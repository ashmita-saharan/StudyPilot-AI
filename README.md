# 🎓 StudyPilot AI

> **An Agentic AI-Powered Personalized Learning Assistant**

StudyPilot AI is a multi-agent intelligent learning platform that transforms uploaded study materials into an interactive learning experience. It helps students generate notes, ask context-aware questions, practice with AI-generated quizzes, receive personalized feedback, and track their learning progress through a memory-driven dashboard.

---

# 🚀 Features

- 📄 Upload PDF and PowerPoint study materials
- 📝 Automatically generate concise study notes
- 💬 AI Tutor with Retrieval-Augmented Generation (RAG)
- ❓ Generate Multiple Choice Quizzes
- ✅ Evaluate quiz performance
- 🧠 Personalized Memory Agent to track learning progress
- 📊 Interactive Dashboard with analytics
- 🎯 AI-powered revision recommendations
- 🤖 Multi-Agent Workflow for seamless learning

---

# 🏗️ System Architecture

```
                    Student

                        │

                        ▼

                 Upload Documents

                        │

                        ▼

              Document Parsing

                        │

                        ▼

          Chunking & Embedding

                        │

                        ▼

                  ChromaDB

                        │

                        ▼

              Workflow Agent

     ┌────────┬────────┬────────┐

     ▼        ▼        ▼        ▼

 Notes     Tutor     Quiz   Evaluation

                             │

                             ▼

                      Memory Agent

                             │

                             ▼

                  Recommendation Agent

                             │

                             ▼

                       Dashboard
```

---

# 🤖 AI Agents

## 📘 Notes Agent

- Generates concise notes from uploaded documents.
- Helps students revise lengthy study material quickly.

---

## 👨‍🏫 Tutor Agent

- Uses Retrieval-Augmented Generation (RAG).
- Answers questions using only the uploaded documents.
- Provides personalized explanations based on learning history.

---

## ❓ Quiz Agent

- Automatically generates MCQ quizzes from uploaded study material.
- Creates practice assessments for self-evaluation.

---

## ✅ Evaluation Agent

- Evaluates quiz responses.
- Calculates score and percentage.
- Identifies weak topics.

---

## 🧠 Memory Agent

Maintains long-term student learning data.

Stores:

- Quiz History
- Topic Confidence
- Weak Topics
- Revision Status
- Overall Progress

---

## 🎯 Recommendation Agent

Analyzes student performance and suggests:

- Topics to revise
- Personalized learning recommendations

---

## 🔄 Workflow Agent

Coordinates all agents to provide a seamless learning experience.

Workflow:

```
Upload Document
        ↓
Generate Quiz
        ↓
Evaluate Quiz
        ↓
Update Memory
        ↓
Generate Recommendation
        ↓
Refresh Dashboard
```

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Tailwind CSS
- Axios
- React Router

## Backend

- FastAPI
- Python
- LangChain
- Google Gemini API

## AI & Machine Learning

- Google Gemini 2.5 Flash
- Sentence Transformers (`all-MiniLM-L6-v2`)
- Retrieval-Augmented Generation (RAG)

## Vector Database

- ChromaDB

## Database

- SQLite

---

# 📂 Project Structure

```
StudyPilot-AI/

│

├── frontend/

│   ├── public/

|   ├── src/

│     ├── assets/

│     ├── pages/

│     ├── services/

│     |── utils/

│     ├── App.jsx

│     |── main.jsx

│     └── index.css

│   ├── index.html

|   └──  package.json

├── backend/

│   ├── agents/

│   ├── routers/

│   ├── services/

│   ├── schemas/

│   ├── uploads/

│   ├── database/

│   └── main.py

│

└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/StudyPilot-AI.git

cd StudyPilot-AI
```

---

## 2️⃣ Backend Setup

Create Virtual Environment

```bash
python -m venv venv
```

Activate

### Windows

```bash
venv\Scripts\activate
```

### Linux / Mac

```bash
source venv/bin/activate
```

Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 3️⃣ Environment Variables

Create a `.env` file inside the backend directory.

```env
GOOGLE_API_KEY=YOUR_API_KEY
MODEL_NAME=gemini-2.5-flash
```

---

## 4️⃣ Run Backend

```bash
uvicorn main:app --reload
```

Backend will start at

```
http://127.0.0.1:8000
```

---

## 5️⃣ Frontend Setup

Move to frontend

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run React

```bash
npm run dev
```

Frontend

```
http://localhost:5173
```

---

# 📊 Current Workflow

```
Upload Document
      │
      ▼
Document Parsing
      │
      ▼
Chunking
      │
      ▼
Sentence Embeddings
      │
      ▼
ChromaDB
      │
      ▼
Notes Agent
Tutor Agent
Quiz Agent
      │
      ▼
Evaluation Agent
      │
      ▼
Memory Agent
      │
      ▼
Recommendation Agent
      │
      ▼
Dashboard
```

---

# 📸 Features

- Upload study material
- AI Tutor
- AI Notes
- AI Quiz Generator
- Quiz Evaluation
- Learning Memory
- Dashboard Analytics
- Personalized Recommendations

---

# 👥 Team Members

- **Ashmita**
- **Priyanka Yadav**
- **Yana Garg**
- **Shaik Tahseen**

---

# 🔮 Future Enhancements

- User Authentication
- Multi-user Support
- LMS Integration
- Audio & Video Learning Support
- Subjective Answer Evaluation
- Adaptive Learning Paths
- Cloud Deployment

---

# 📜 License

This project is developed for educational and academic purposes.
