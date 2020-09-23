import axios from 'axios';
import backendUrl from './backend-url';

const api = axios.create({
    baseURL:`${backendUrl}/ticket`
})

export const getAllTickets = async () => api.get('/');

