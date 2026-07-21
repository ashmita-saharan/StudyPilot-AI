import random

from agents.evaluation_agent import evaluate_quiz
from agents.recommendation_agent import get_recommendation
from agents.memory_agent import update_memory


def submit_quiz_workflow(
    filename: str,
    topic: str,
    quiz_text: str,
    student_answers: str
):
    """
    Main orchestration workflow for StudyPilot AI.

    Flow

    Student
        ↓
    Evaluation Agent
        ↓
    Memory Agent
        ↓
    Dashboard
        ↓
    Return complete response
    """

    # Step 1 : Evaluate Quiz

    evaluation = evaluate_quiz(
        quiz_text=quiz_text,
        student_answers=student_answers
    )

    # Step 2 : Extract values

    score = evaluation["score"]
    total_questions = evaluation["total_questions"]
    percentage = evaluation["percentage"]

    topics = evaluation["topics"]

    weak_topics = evaluation["weak_topics"]

    overall_feedback = evaluation["overall_feedback"]

    # Step 3 : Save Quiz History

    student_id = 1

    quiz_id = random.randint(100000, 999999)

    dashboard = update_memory(
        student_id=student_id,
        quiz_id=quiz_id,
        topic=topic,
        score=score,
        total_questions=total_questions,
        topic_results=topics
    )

    recommendation = get_recommendation(
        evaluation,
        dashboard
    )

    return {

        "status": "success",

        "filename": filename,

        "quiz_id": quiz_id,

        "evaluation": evaluation,

        "dashboard": dashboard,

        "recommendation": recommendation

    }