from services.memory_service import (
    save_quiz_result,
    update_topic_progress,
    get_dashboard
)


def update_memory(
    student_id: int,
    quiz_id: int,
    topic: str,
    score: int,
    total_questions: int,
    topic_results: list
):
    """
    Memory Agent

    Responsible for maintaining the student's long-term learning profile.
    """

    # Save quiz history
    save_quiz_result(
        student_id=student_id,
        quiz_id=quiz_id,
        topic=topic,
        score=score,
        total_questions=total_questions
    )

    # Update confidence of every topic
    for item in topic_results:

        update_topic_progress(

            student_id=student_id,

            topic=item["topic"],

            latest_confidence=item["confidence"]

        )

    # Return updated dashboard
    dashboard = get_dashboard(student_id)

    return dashboard

def get_student_profile(student_id: int):
    dashboard = get_dashboard(student_id)

    return {
        "weak_topics": dashboard["weak_topics"],
        "overall_progress": dashboard["overall_progress"],
        "topics": dashboard["topics"]
    }