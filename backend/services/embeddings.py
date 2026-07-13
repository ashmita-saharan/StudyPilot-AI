from sentence_transformers import SentenceTransformer
import chromadb
import uuid
from config import CHROMA_DB_PATH, COLLECTION_NAME

model = SentenceTransformer("all-MiniLM-L6-v2")

#persistent chroma database
client = chromadb.PersistentClient(path=CHROMA_DB_PATH)

collection = client.get_or_create_collection(
    name=COLLECTION_NAME
)

def store_chunks(chunks):
    """
    Convert langchain document chunks into embeddings and store them in ChromaDB.
    """
    documents = []
    embeddings = []
    metadatas = []
    ids = []

    for chunk in chunks:
        documents.append(chunk.page_content)

        embeddings.append(
            model.encode(chunk.page_content).tolist()
        )

        # Copy existing metadata
        metadata = chunk.metadata.copy()

        # Add extra metadata
        metadata["filename"] = chunk.metadata.get("source", "Unknown")
        metadata["subject"] = "General" #later take in from frontend

        metadatas.append(metadata)

        ids.append(str(uuid.uuid4()))

    collection.add(
        documents=documents,
        embeddings=embeddings,
        metadatas=metadatas,
        ids=ids
    )

    return len(documents)

def search_chunks(query: str, n_results: int = 5):
    """
    Search the vector database for relevant chunks.
    """

    query_embedding = model.encode(query).tolist()

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results
    )

    return results["documents"][0]