from fastapi import APIRouter
from pydantic import BaseModel

from services.rag import ask_question

router = APIRouter(
    prefix="/chat",
    tags=["Tutor AI"]
)


class ChatRequest(BaseModel):
    question: str


@router.post("/")
def chat(request: ChatRequest):

    answer = ask_question(request.question)

    return {
        "question": request.question,
        "answer": answer
    }