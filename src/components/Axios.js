import instanceAxios from 'axios';

export const Axios = instanceAxios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default Axios;