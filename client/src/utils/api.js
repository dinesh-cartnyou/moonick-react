import axios from 'axios';
import store from '../store';
import { LOGOUT } from '../actions/types';

const api = axios.create({
    // baseURL: 'https://run.mocky.io',
    // baseURL: 'http://15.206.89.124/supershop/api',
    baseURL: 'https://mobilenyou.herokuapp.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.response.use(
    res => res,
    err => {
        if(err.response.status === 401) {
           store.dispatch({type: LOGOUT});
        }
        return Promise.reject(err);
    }
)

export default api;
