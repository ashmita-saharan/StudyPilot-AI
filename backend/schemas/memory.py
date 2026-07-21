from pydantic import BaseModel
from typing import List


class TopicResult(BaseModel):
    topic: str
    confidence: float


class MemoryUpdateRequest(BaseModel):
    quiz_id: int
    topic: str
    score: int
    total_questions: int
    topics: List[TopicResult]