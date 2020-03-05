import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START'
export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const GET_RECIPE = 'GET_RECIPE'

export const getList = () => dispatch => {
    dispatch({type: GET_RECIPE})
    axiosWithAuth()
        .get('https://safe-peak-28764.herokuapp.com/api/auth/login')
        .then(res => {
            console.log(res);
        })
}

export const login = (e, credentials) => dispatch => {
    e.preventDefault()
    dispatch({type: LOGIN_START });
    axios
        .post('https://safe-peak-28764.herokuapp.com/api/auth/login', credentials)
        .then(res => {
            console.log(res)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err=>console.log(err))
}

export const register = (e, credentials) => dispatch => {
    e.preventDefault()
    dispatch({ type: REGISTER_START });
    const newCredentials = {
        username: credentials.username,
        password: credentials.password
    }
    axios
        .post('https://safe-peak-28764.herokuapp.com/api/auth/register', newCredentials)
        .then(res => {
            dispatch({ type: REGISTER_SUCCESS, payload: res })
            dispatch(login(e, credentials))
        })
        .catch(err => console.log(err))
}

export const handleChange = (e, formType) => ({
    type: HANDLE_CHANGE,
    payload: { target: e.target, form: formType}
})