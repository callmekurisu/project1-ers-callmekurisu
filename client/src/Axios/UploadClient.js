import axios from 'axios';

const UploadClient = axios.create({ 
    baseURL:"https://gotcode.hopto.org/"
    });
    
    export default UploadClient;