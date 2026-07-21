import api from "./api";

export async function generateQuiz(filename){

    const response = await api.post(

        "/quiz/",

        {

            filename

        }

    );

    return response.data;

}