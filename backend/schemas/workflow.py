from pydantic import BaseModel


class WorkflowRequest(BaseModel):
    filename: str
    topic: str
    quiz_text: str
    student_answers: str