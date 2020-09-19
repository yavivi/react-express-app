import axios from 'axios';

const api = axios.create({
    baseURL:"http://localhost:3001/category"
})

export const getAllCategories = async () => api.get('/');

