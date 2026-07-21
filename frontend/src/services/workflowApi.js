import api from "./api";

export async function submitQuizWorkflow(data) {

    const response = await api.post(

        "/workflow/submit-quiz",

        data

    );

    return response.data;
}