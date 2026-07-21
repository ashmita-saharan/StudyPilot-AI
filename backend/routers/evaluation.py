# backend/routers/evaluation.py

from fastapi import APIRouter
from pydantic import BaseModel
from agents.evaluation_agent import evaluate_quiz

router = APIRouter(
    prefix="/evaluate",
    tags=["Evaluation Agent"]
)

class EvaluationRequest(BaseModel):
    quiz_text: str
    student_answers: str

@router.post("/")
def create_evaluation(request: EvaluationRequest):
    """
    Evaluate a student's quiz answers and return score + weak topics.
    """
    result = evaluate_quiz(request.quiz_text, request.student_answers)

    return {
        "evaluation": result
    }