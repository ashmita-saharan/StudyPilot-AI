from dotenv import load_dotenv
import os

load_dotenv()

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
MODEL_NAME = "gemini-3.1-flash-lite"

CHROMA_DB_PATH = "chroma_db"
COLLECTION_NAME = "studypilot_documents"

# Uploads
UPLOAD_FOLDER = "uploads"

# Chunking
CHUNK_SIZE = 500
CHUNK_OVERLAP = 100

# Retrieval
TOP_K_RESULTS = 5