from fastapi import APIRouter, UploadFile, File, HTTPException
import shutil
from pathlib import Path
from services.pdf_parser import extract_pdf_documents
from services.ppt_parser import extract_ppt_documents
from services.chunker import split_into_chunks
from langchain_core.documents import Document
from services.embeddings import store_chunks
from config import UPLOAD_FOLDER

router = APIRouter(
    prefix="/upload",
    tags=["Upload"]
)

UPLOAD_DIR = Path(UPLOAD_FOLDER)

UPLOAD_DIR.mkdir(exist_ok=True)

ALLOWED_EXTENSIONS = {".pdf", ".pptx", ".txt"}

@router.post("/")
async def upload_document(file: UploadFile = File(...)):
    """
    Upload PDF/PPT/TXT files.
    """
    file_extentions = Path(file.filename).suffix.lower()

    if file_extentions not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail="Only PDF, PPTX and TXT files are allowed."
        )
    
    file_path = UPLOAD_DIR / file.filename

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    if file_extentions == ".pdf":
        documents = extract_pdf_documents(str(file_path))
    
    elif file_extentions == ".pptx":
        documents = extract_ppt_documents(str(file_path))
    
    else:
        with open(file_path, "r", encoding="utf-8") as f:
            documents = (
                Document(
                    page_content=f.read(),
                    metadata={
                        "source": file.filename
                    }
                )
            )
        
    
    chunks = split_into_chunks(documents)


    stored_chunks = store_chunks(chunks)

    return {
        "filename": file.filename,
        "pages": len(documents),
        "chunks_created": len(chunks),
        "stored_in_chromadb": stored_chunks,
        "first_chunk": {
            "content": chunks[0].page_content,
            "metadata": chunks[0].metadata
        }
    }