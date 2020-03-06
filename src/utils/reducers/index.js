import { LOGIN_START, HANDLE_CHANGE, LOGIN_SUCCESS, REGISTER_START, REGISTER_SUCCESS, GET_RECIPE } from '../actions'

const initialState = {
    loginCredentials: {},
    registerCredentials: {},
    isLoggingIn: false,
    isRegistering: false,
    loggedIn: false
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
            }        
        case LOGIN_SUCCESS:
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJ'
            localStorage.setItem('token', token)
            return {
                ...state,
                isLoggingIn: false,
                loggedIn: true,
            }
        case HANDLE_CHANGE:
            return {
                ...state,
                [action.payload.form]:
                {
                [action.payload.target.name]: action.payload.target.value
                }
            }
        case REGISTER_START:
            return {
                isRegistering: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegistering: false,
            }
        default: 
            return state
    }
}