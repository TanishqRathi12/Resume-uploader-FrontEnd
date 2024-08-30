import instanceAxios from 'axios';

export const Axios = instanceAxios.create({
    baseURL: 'https://resume-uploader-backend.onrender.com/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default Axios;