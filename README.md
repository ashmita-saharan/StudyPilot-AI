# StudyPilot-AI

Personalized Agentic Learning Assistant

## Tech Stack

Frontend

- React
- Tailwind CSS

Backend

- FastAPI
- LangChain
- Gemini API

Database

- SQLite
- ChromaDB

Agents

- Note Agent
- Tutor Agent
- Quiz Agent
- Evaluation Agent
- Memory Agent

Workflow

Upload → Embeddings → Notes/Tutor/Quiz → Evaluation → Memory → Dashboard

## Team Members

- Ashmita
- Priyanka Yadav
- Yana Garg
- Shaik Tahseen

## Backend Setup

### Clone

git clone <repo>

### Create Virtual Environment

python -m venv venv

### Activate

venv\Scripts\activate

### Install

pip install -r requirements.txt

### Create .env

GOOGLE_API_KEY=YOUR_API_KEY

### Run

uvicorn main:app --reload
