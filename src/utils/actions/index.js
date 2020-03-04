import axios from 'axios';

export const LOGIN_START = 'LOGIN_START'
export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'

export const login = (e, credentials) => dispatch => {
    e.preventDefault()
    dispatch({type: LOGIN_START });
    axios
        .post('api url here', credentials)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err=>console.log(err))
}

export const handleChange = (e, formType) => ({
    type: HANDLE_CHANGE,
    payload: { target: e.target, form: formType}
})

export const register = (e, credentials) => dispatch => {
    e.preventDefault()
    dispatch({ type: REGISTER_START });
    const credentials = {
        username: credentials.username,
        password: credentials.password
    }
    axios
        .post('url here', credentials)
        .then(res => {
            dispatch({ type: REGISTER_SUCCESS, payload: res })
            dispatch(login(e, credentials))
        })
        .catch(err => console.log(err))
}