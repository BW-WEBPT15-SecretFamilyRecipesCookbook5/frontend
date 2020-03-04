import { LOGIN_START, HANDLE_CHANGE, LOGIN_SUCCESS, REGISTER_START, REGISTER_SUCCESS } from '../actions'

const initialState = {
    loginCredentials: {},
    isLoggingIn: false,
    isRegistering: false
}

export const recipeReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLogginIn: true,
            }
        // case HANDLE_CHANGE:
        //     return {
        //         ...state,
        //         [payload.target.name]: payload.target.value
        //         }
        case LOGIN_SUCCESS:
            const token = ''
            localStorage.setItem('token', token)
            return {
                ...state,
                isLoggingIn: false
            }
        case REGISTER_START:
            return {
                isRegistering: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegistering: false
            }
    }
}