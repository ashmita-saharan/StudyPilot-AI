import sqlite3

DATABASE = "database/studypilot.db"


def get_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_connection()
    cursor = conn.cursor()

    # Students table
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )
        """
    )

    # Quiz history table
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS quiz_history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            student_id INTEGER,
            quiz_id INTEGER,
            topic TEXT,
            score INTEGER,
            total_questions INTEGER,
            percentage REAL,
            quiz_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        """
    )

    # Topic progress table
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS topic_progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            student_id INTEGER,
            topic TEXT,
            confidence REAL,
            attempts INTEGER DEFAULT 1,
            revision_status TEXT,
            last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        """
    )

    cursor.execute(
        "INSERT OR IGNORE INTO students (id, name) VALUES (1, 'Default Student')"
    )

    conn.commit()
    conn.close()