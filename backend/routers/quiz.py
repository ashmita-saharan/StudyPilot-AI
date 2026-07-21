from fastapi import APIRouter, HTTPException
from pathlib import Path
from pydantic import BaseModel

from agents.quiz_agent import generate_quiz
from services.pdf_parser import extract_pdf_documents
from services.ppt_parser import extract_ppt_documents
from config import UPLOAD_FOLDER

router = APIRouter(
    prefix="/quiz",
    tags=["Quiz AI"]
)

UPLOAD_DIR = Path(UPLOAD_FOLDER)

class QuizRequest(BaseModel):
    filename: str

@router.post("/")
def quiz(request: QuizRequest):

    file_path = UPLOAD_DIR / request.filename

    if not file_path.exists():
        raise HTTPException(
            status_code=404,
            detail="File not found."
        )

    if file_path.suffix.lower()==".pdf":

        documents=extract_pdf_documents(str(file_path))

    elif file_path.suffix.lower()==".pptx":

        documents=extract_ppt_documents(str(file_path))

    else:

        raise HTTPException(
            status_code=400,
            detail="Unsupported file type."
        )

    text="\n\n".join(doc.page_content for doc in documents)

    quiz=generate_quiz(text)

    return{

        "filename":request.filename,

        "quiz":quiz

    }