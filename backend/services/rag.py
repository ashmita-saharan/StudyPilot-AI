from services.embeddings import search_chunks
from services.llm import llm

def ask_question(question: str):
    retrieved_chunks = search_chunks(question)

    context = "\n\n".join(retrieved_chunks)

    prompt = f"""
You are StudyPilot AI, an AI tutor.

Use ONLY the provided context to answer.

If the answer is not present in the context, reply exactly:

"I couldn't find this information in the uploaded documents."

Context:
{context}

Question:
{question}

Answer:
"""
    response = llm.invoke(prompt)

    return response.content