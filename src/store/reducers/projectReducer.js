const initState = {
    loggedIn: false,
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case '':
            return {
                ...state,
            }
        
        default:
            return state;
    }
}

export default projectReducer;