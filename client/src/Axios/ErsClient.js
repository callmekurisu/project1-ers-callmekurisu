import axios from 'axios';
import { environment } from './Environment';

const ErsClient = axios.create({ 
baseURL:`${environment}`,
headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

export default ErsClient;