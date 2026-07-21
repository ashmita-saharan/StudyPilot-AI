import api from "./api";

export async function askLearningAssistant(question) {

    const response = await api.post(
        "/learning-assistant/",
        {
            question
        }
    );

    return response.data;
}