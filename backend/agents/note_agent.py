# backend/agents/note_agent.py

from services.llm import llm

def generate_notes(context: str) -> str:
    """
    Generate structured study notes from given document context.
    Uses the same shared `llm` object as the Tutor Agent (rag.py),
    so behavior and model config stay consistent across agents.
    """

    prompt = f"""
You are StudyPilot AI, an academic note-making assistant.

Using ONLY the content provided below, create clear, structured notes with:

1. A short summary (3-4 lines)
2. Key concepts (bullet points)
3. Important formulas (if any exist in the content)
4. Exam-focused quick revision points

If the content does not contain enough information for a section, write "Not applicable" instead of making something up.

Content:
{context}

Notes:
"""

    response = llm.invoke(prompt)

    return response.content