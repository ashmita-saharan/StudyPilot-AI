import api from "./api";

export async function generateNotes(filename){

    const response = await api.post(

        "/notes/",

        {

            filename

        }

    );

    return response.data;

}