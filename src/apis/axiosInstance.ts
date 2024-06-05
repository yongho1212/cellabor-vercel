import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {getAuth} from 'firebase/auth';

// with token
export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { 'Content-Type': 'application/json' },
});

export const noTokenInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(
    async (config) => {
        try {
            const idToken = await getAuth().currentUser?.getIdToken(true);
            if (idToken) {
                config.headers['Authorization'] = `Bearer ${idToken}`;
            }
            return config;
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(

    async (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status) {
            switch (error.response.status) {
                case 401:
                    const navigate = useNavigate();
                    navigate('/login');
                    return new Promise(() => {});
                default:
                    return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    },
);

