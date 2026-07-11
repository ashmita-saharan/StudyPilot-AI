from fastapi import FastAPI

app = FastAPI(title="StudyPilot AI")

@app.get("/")
def home():
    return {"message": "StudyPilot AI Backend Running"}