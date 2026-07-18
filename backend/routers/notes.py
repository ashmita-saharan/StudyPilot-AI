# backend/routers/notes.py

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from pathlib import Path
from agents.note_agent import generate_notes
from services.pdf_parser import extract_pdf_documents
from services.ppt_parser import extract_ppt_documents
from config import UPLOAD_FOLDER

router = APIRouter(
    prefix="/notes",
    tags=["Note Agent"]
)

UPLOAD_DIR = Path(UPLOAD_FOLDER)

class NotesRequest(BaseModel):
    filename: str

@router.post("/")
def create_notes(request: NotesRequest):
    """
    Generate structured notes for a previously uploaded document,
    using the ORIGINAL full document (not chunked pieces).
    """
    file_path = UPLOAD_DIR / request.filename

    if not file_path.exists():
        raise HTTPException(
            status_code=404,
            detail="File not found. Please upload it first."
        )

    file_extension = file_path.suffix.lower()

    if file_extension == ".pdf":
        documents = extract_pdf_documents(str(file_path))
    elif file_extension == ".pptx":
        documents = extract_ppt_documents(str(file_path))
    else:
        raise HTTPException(
            status_code=400,
            detail="Unsupported file type for note generation."
        )

    # Combine all pages/slides into one full document text
    full_text = "\n\n".join([doc.page_content for doc in documents])

    notes = generate_notes(full_text)

    return {
        "filename": request.filename,
        "notes": notes
    }