export const addMedication = (med)=> {
    return (dispatch, getState) => {
        dispatch({ type: "ADD_MEDICATION", med: med})
    }
}