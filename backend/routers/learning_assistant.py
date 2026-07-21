from fastapi import APIRouter
from pydantic import BaseModel

from agents.tutor_agent import tutor_response

router = APIRouter(
    prefix="/learning-assistant",
    tags=["Learning Assistant"]
)

class AssistantRequest(BaseModel):
    question: str

@router.post("/")
def ask(request: AssistantRequest):

    student_id = 1

    return tutor_response(
        student_id=student_id,
        question=request.question
    )