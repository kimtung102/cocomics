import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://apicocomic.herokuapp.com/rest/Service',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});

export const get = async (path, options) => {
    const response = await instance.get(path, options);
    return response.data;
};

export const post = async (path, options) => {
    const response = await instance.post(path, options);
    return response;
};

export default instance;
