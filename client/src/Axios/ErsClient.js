import axios from 'axios';
import { environment } from './Environment';

const ErsClient = axios.create({ 
baseURL:"Projectoneserver-env-1.ju5wxnbfhb.us-west-2.elasticbeanstalk.com/",
headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

export default ErsClient;