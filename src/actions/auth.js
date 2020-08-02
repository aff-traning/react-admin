import {
    AUTH_GET_TOKEN,
    AUTH_SET_TOKEN,
    AUTH_DISCARD_TOKEN
} from '../constants/actionTypes';

const requestToken = (data) => {
    console.log('Get token action');
    return {
        type: AUTH_GET_TOKEN,
        payload: data
    }
}

const setToken = (data) => {
    console.log('Set token action');
    return {
        type: AUTH_SET_TOKEN,
        payload: data
    }
};

const removeToken = () => {
    console.log('Remove token');
    return {
        type: AUTH_DISCARD_TOKEN
    }
}

export { requestToken, setToken, removeToken };