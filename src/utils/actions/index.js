import axios from 'axios';

export const LOGIN_START = 'LOGIN_START'
export const HANDLE_CHANGE = 'HANDLE_CHANGE'

export const login = (e, credentials) => dispatch => {
    e.preventDefault()
    dispatch({type: LOGIN_START });
    axios
        .post('api url here', credentials)
        .then(res => {
            dispatch({ payload: res.data })
        })
        .catch(err=>console.log(err))
}

export const handleChange = (e, formType) => ({
    type: HANDLE_CHANGE,
    payload: { target: e.target, form: formType}
})