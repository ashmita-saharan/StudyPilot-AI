def get_recommendation(evaluation, dashboard):

    weak_topics = evaluation.get("weak_topics", [])

    if weak_topics:

        topic = weak_topics[0]

        return {

            "recommended_topic": topic,

            "message": f"You should revise {topic}.",

            "next_step": "Tutor",

            "actions": [

                "Tutor",

                "Notes",

                "Quiz"

            ]

        }

    return {

        "recommended_topic": None,

        "message": "Excellent performance!",

        "next_step": "Continue",

        "actions": [

            "Upload Document"

        ]

    }