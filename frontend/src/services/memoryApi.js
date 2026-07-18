import api from "./api";

export const getDashboard = async () => {

    const response = await api.get("/memory/dashboard");

    return response.data;

};

export const getWeakTopics = async () => {

    const response = await api.get("/memory/weak-topics");

    return response.data;

};

export const getHistory = async () => {

    const response = await api.get("/memory/history");

    return response.data;

};