from fastapi import FastAPI
from routers.upload import router as upload_router
from routers.search import router as search_router
from routers.chat import router as chat_router
from routers.quiz import router as quiz_router

app = FastAPI(
    title="StudyPilot AI",
    description="Agentic AI Learning Assistant",
    version="1.0"
)

app.include_router(upload_router)
app.include_router(search_router)
app.include_router(chat_router)
app.include_router(quiz_router)

@app.get("/")
def home():
    return {"message": "StudyPilot AI Backend Running"}