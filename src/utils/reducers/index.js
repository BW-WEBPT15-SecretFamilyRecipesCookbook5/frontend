import { LOGIN_START, HANDLE_CHANGE, LOGIN_SUCCESS } from '../actions'

const initialState = {
    loginCredentials: {},
    isLoggingIn: false
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
            }
    }
}