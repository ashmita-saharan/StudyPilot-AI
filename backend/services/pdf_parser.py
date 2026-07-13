from pypdf import PdfReader
from langchain_core.documents import Document

def extract_pdf_documents(pdf_path: str) -> str:
    """
    Extract text from a PDF file.
    Args:
        pdf_path: Path to the PDF.
        
    Returns:
        Complete extracted text.
    """

    reader = PdfReader(pdf_path)

    documents = []

    for page_number, page in enumerate(reader.pages):
        text = page.extract_text()

        if text:
            documents.append(
                Document(
                    page_content=text,
                    metadata={
                        "page": page_number + 1,
                        "source": pdf_path
                    }
                )
            )
    
    return documents