import axios from "axios";

export const api = axios.create({ // instancia de informação padrão para todas as requisições
    baseURL: 'http://localhost:3000/api',
})