const initState = {
    authError: null,
    accountAdded: null,
    loggedIn: false,
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login Failed',
                loggedIn: false,
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null,
                loggedIn: true,
            }
        case 'SIGNOUT_SUCCESS':
            return{
                ...state,
                loggedIn: false,
            }
        case 'SIGNUP_SUCCESS':
            return{
                ...state,
                authError: null,
                accountAdded: true,
                loggedIn: false,
            }
        case 'SIGNUP_ERROR':
            return{
                ...state,
                authError: action.err.message,
                loggedIn: false,
            }
        default:
            return state;
    }
}

export default authReducer;