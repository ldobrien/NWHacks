export const signIn = (credentials) => {
    return (dispatch) => {
        dispatch({ type: "LOGIN_SUCCESS"});
    }
}

export const signOut = () => {
    return (dispatch) => {
        dispatch({type: "SIGNOUT_SUCCESS"})
    }
}

export const addAccount = (newUser) => {
    return (dispatch) => {

        console.log(newUser)
        dispatch({ type: "SIGNUP_SUCCESS"})
    }
}