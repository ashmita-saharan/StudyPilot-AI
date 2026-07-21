from fastapi import APIRouter, HTTPException

from schemas.workflow import WorkflowRequest
from agents.workflow_agent import submit_quiz_workflow

router = APIRouter(
    prefix="/workflow",
    tags=["StudyPilot Workflow"]
)


@router.post("/submit-quiz")
def submit_quiz(request: WorkflowRequest):
    """
    Complete StudyPilot Quiz Workflow

    Flow:
    Quiz Submission
            ↓
    Evaluation Agent
            ↓
    Memory Agent
            ↓
    Dashboard Update
            ↓
    Return Complete Response
    """

    try:

        result = submit_quiz_workflow(
            filename=request.filename,
            topic=request.topic,
            quiz_text=request.quiz_text,
            student_answers=request.student_answers
        )

        return result

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )