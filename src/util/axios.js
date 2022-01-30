import axios from 'axios';

const instance = axios.create({
    // baseURL: ' http://localhost:9000/api/message/'
    baseURL: 'https://whatsapp-react-project.herokuapp.com/api/message/'
});

export default instance;