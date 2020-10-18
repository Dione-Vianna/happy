import axios from 'axios';

const api = axios.create({
  baseURL: 'https://happy-apy.herokuapp.com',
})

export default api;
