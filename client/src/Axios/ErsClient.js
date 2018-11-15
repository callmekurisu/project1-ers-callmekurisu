import axios from 'axios';
import { environment } from './Environment';

const ErsClient = axios.create({ 
baseURL: 'http://localhost:8080/',
headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

export default ErsClient;