from fastapi import APIRouter
from pydantic import BaseModel

from services.embeddings import search_chunks

router = APIRouter(
    prefix="/search",
    tags=["Search"]
)

class SearchRequest(BaseModel):
    query: str

@router.post("/")
def search(request: SearchRequest):

    results = search_chunks(request.query)

    return results