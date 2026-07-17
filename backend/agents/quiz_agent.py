from services.llm import llm

def generate_quiz(text: str):
    prompt = f"""
You are an expert quiz generator.

Generate 5 multiple-choice questions from the following text.

For each question provide:
- Question
- Four options (A, B, C, D)
- Correct answer

Text:
{text}
"""

    response = llm.invoke(prompt)

    return response.content