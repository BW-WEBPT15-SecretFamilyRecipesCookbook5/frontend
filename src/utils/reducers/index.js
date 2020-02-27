import { LOGIN_START, HANDLE_CHANGE } from '../actions'

const initialState = {
    loginCredentials: {},
    isLoggingIn: false
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case LOGIN_START:
            return {
                ...state,
                isLogginIn: true,
            }
        case HANDLE_CHANGE:
            return {
                ...state,
                [payload.form]:
                {
                    ...state[payload.form],
                    [payload.target.name]: payload.target.value
                }
            }
    }
}