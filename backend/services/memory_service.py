import sqlite3
from database import DATABASE

#database Connection
def get_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def save_quiz_result(student_id, quiz_id, topic, score, total_questions):
    percentage = (score / total_questions) * 100

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO quiz_history
        (student_id, quiz_id, topic, score, total_questions, percentage)
        VALUES (?, ?, ?, ?, ?, ?)
    """, (
        student_id,
        quiz_id,
        topic,
        score,
        total_questions,
        percentage
    ))

    conn.commit()
    conn.close()

# update topic progress
def update_topic_progress(student_id, topic, latest_confidence):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT confidence, attempts
        FROM topic_progress
        WHERE student_id=? AND topic=?
    """, (student_id, topic))

    row = cursor.fetchone()

    if row:
        old_confidence = row["confidence"]
        attempts = row["attempts"]

        new_confidence = (
            (old_confidence * attempts) + latest_confidence
        ) / (attempts + 1)

        attempts += 1

        if new_confidence >= 80:
            status = "Strong"

        elif new_confidence >= 60:
            status = "Good"

        elif new_confidence >= 40:
            status = "Needs Practice"

        else:
            status = "Needs Revision"

        cursor.execute("""
            UPDATE topic_progress
            SET confidence=?,
                attempts=?.
                revision_status=?,
                last_updated=CURRENT_TIMESTAMP
            WHERE student_id=? AND topic=?
        """, (
            new_confidence,
            attempts,
            status,
            student_id,
            topic
        ))

    else:
        if latest_confidence >= 80:
            status = "Strong"
        
        elif latest_confidence >= 60:
            status = "Good"

        elif latest_confidence >= 40:
            status = "Needs Practice"

        else:
            status = "Needs Revision"

        cursor.execute("""
            INSERT INTO topic_progress
            (student_id,
            topic,
            confidence,
            attempts,
            revision_status)
            VALUES (?, ?, ?, ?, ?)
        """, (
            student_id,
            topic,
            latest_confidence,
            1,
            status
        ))
    
    conn.commit()
    conn.close()

# quiz history
def get_quiz_history(student_id):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT *
        FROM quiz_history
        WHERE student_id=?
        ORDER BY quiz_date DESC
    """, (
        student_id,
    ))

    rows = cursor.fetchall()

    conn.close()

    return [dict(row) for row in rows]

# weak topics
def get_weak_topics(student_id):

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT *
        FROM topic_progress
        WHERE student_id=?
        AND confidence < 60
        ORDER BY confidence ASC
    """, (student_id,))

    rows = cursor.fetchall()

    conn.close()

    return [dict(row) for row in rows]


# Dashboard data
def get_dashboard(student_id):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT * 
        FROM topic_progress
        WHERE student_id=?
    """, (student_id,))

    topics = cursor.fetchall()

    topic_list = [dict(row) for row in topics]

    if len(topic_list) == 0:
        overall_progress = 0

    else:
        total = sum(topic["confidence"] for topic in topic_list)
        overall_progress = round(total / len(topic_list), 2)

    conn.close()

    return {
        "overall_progress": overall_progress,
        "topics": topic_list,
        "weak_topics": get_weak_topics(student_id),
        "quiz_history": get_quiz_history(student_id)
    }