from fastapi import APIRouter
from pydantic import BaseModel

from agents.quiz_agent import generate_quiz

router = APIRouter(
    prefix="/quiz",
    tags=["Quiz AI"]
)

class QuizRequest(BaseModel):
    text: str

@router.post("/")
def quiz(request: QuizRequest):

    quiz = generate_quiz(request.text)

    return {
        "quiz": quiz
    }