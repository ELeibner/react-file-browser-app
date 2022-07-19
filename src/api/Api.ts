import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json'
    }
});

export function getData(id: number) {
    return api.get(`/folder/${id}`);
}
