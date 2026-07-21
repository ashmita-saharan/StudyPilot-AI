import json
import re

from services.llm import llm


def evaluate_quiz(quiz_text: str, student_answers: str):
    """
    Evaluates the student's answers and returns structured JSON.
    """

    prompt = f"""
You are the Evaluation Agent of StudyPilot AI.

Evaluate the student's answers against the quiz.

Return ONLY valid JSON.

Format:

{{
    "score": 4,
    "total_questions": 5,
    "percentage": 80,

    "topics": [
        {{
            "topic": "Deadlock",
            "confidence": 100,
            "correct": true,
            "feedback": "Correct answer."
        }},
        {{
            "topic": "Paging",
            "confidence": 40,
            "correct": false,
            "feedback": "Review paging concepts."
        }}
    ],

    "weak_topics": [
        "Paging"
    ],

    "overall_feedback": "Good work. Improve Paging."
}}

Rules:

- Return JSON ONLY.
- Do NOT use markdown.
- Do NOT explain anything.
- Do NOT wrap inside ```json.

Quiz:
{quiz_text}

Student Answers:
{student_answers}
"""

    response = llm.invoke(prompt)

    content = response.content

    # Handle Gemini response format
    if isinstance(content, list):

        text = ""

        for part in content:

            if isinstance(part, dict):

                text += part.get("text", "")

            else:

                text += getattr(part, "text", str(part))

    else:

        text = str(content)

    text = text.strip()

    # Remove markdown if Gemini still adds it
    text = text.replace("```json", "")
    text = text.replace("```", "").strip()

    # Extract JSON if Gemini adds extra text
    match = re.search(r"\{.*\}", text, re.DOTALL)

    if match:

        text = match.group()

    try:

        return json.loads(text)

    except Exception as e:

        raise ValueError(
            f"Evaluation Agent returned invalid JSON:\n\n{text}\n\nError: {e}"
        )