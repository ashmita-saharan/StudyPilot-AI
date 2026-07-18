import api from "./api";

export const askTutor = async (question) => {

    const response = await api.post(

        "/chat",

        {

            question,

        }

    );

    return response.data;

};