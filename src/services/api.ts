import axios from 'axios';

export const api = axios.create({
  baseURL: ' https://imaxinformatica.com.br/avaliacao/frontend'
})