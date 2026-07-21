from agents.memory_agent import get_student_profile
from services.rag import ask_question


def tutor_response(student_id: int, question: str):
    """
    Personalized Tutor Agent.

    Responsibilities:
    1. Read student's weak topics from Memory.
    2. Retrieve relevant context using RAG.
    3. Generate a personalized explanation.
    4. Recommend follow-up learning actions.
    """

    # Read student profile
    # Read student profile from Memory Agent
    student_profile = get_student_profile(student_id)

    weak_topics = student_profile["weak_topics"]

    weak_topic_names = [
        topic["topic"]
        for topic in weak_topics
    ]

    # Build personalized prompt
    if weak_topic_names:

        profile = f"""
Student Profile

Weak Topics:
{', '.join(weak_topic_names)}

Teaching Style:
- Explain using simple language.
- Use step-by-step explanations.
- Give practical examples.
- End with one short revision question.
"""

    else:

        profile = """
Student Profile

No weak topics currently detected.

Teaching Style:
- Provide a concise explanation.
- Include one advanced insight.
"""

    prompt = f"""
{profile}

Student Question:

{question}
"""

    # RAG Answer
    answer = ask_question(prompt)

    recommendation = None

    if weak_topic_names:

        recommendation = {
            "recommended_topic": weak_topic_names[0],
            "message": f"Consider revising '{weak_topic_names[0]}' after reading this explanation."
        }

    return {

        "answer": answer,

        "student_profile": {
            "weak_topics": weak_topic_names
        },

        "recommendation": recommendation

    }