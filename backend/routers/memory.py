from fastapi import APIRouter
from schemas.memory import MemoryUpdateRequest

from services.memory_service import (
    save_quiz_result,
    update_topic_progress,
    get_dashboard,
    get_quiz_history,
    get_weak_topics
)

router = APIRouter(
    prefix="/memory",
    tags=["Memory Agent"]
)

# update memory

@router.post("/update")
def update_memory(request: MemoryUpdateRequest):
    student_id = 1

    save_quiz_result(
        student_id=student_id,
        quiz_id=request.quiz_id,
        topic=request.topic,
        score=request.score,
        total_questions=request.total_questions
    )

    for topic in request.topics:

        update_topic_progress(
            student_id=student_id,
            topic=topic.topic,
            latest_confidence=topic.confidence
        )

    return {
        "message": "Memory updated successfully."
    }

# dashboard
@router.get("/dashboard")
def dashboard():
    student_id = 1

    return get_dashboard(student_id)

# quiz history
@router.get("/history")
def history():
    student_id = 1

    return get_quiz_history(student_id)

# weak topics
@router.get("/weak-topics")
def get_student_weak_topics():
    student_id = 1

    return get_weak_topics(student_id)