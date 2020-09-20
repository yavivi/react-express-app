import axios from 'axios';
import backendUrl from './backend-url';

const api = axios.create({
    baseURL:`${backendUrl}/category`
})

export const getAllCategories = async () => api.get('/');

