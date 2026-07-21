from agents.quiz_agent import generate_quiz
from services.memory_service import get_weak_topics

def generate_adaptive_quiz(student_id, document_text):

    weak_topics = get_weak_topics(student_id)

    prompt_prefix = ""

    if weak_topics:

        prompt_prefix = f"""
Focus more questions on:

{", ".join([t["topic"] for t in weak_topics])}

Still include some revision questions.
"""

    enhanced_text = prompt_prefix + "\n\n" + document_text

    return generate_quiz(enhanced_text)