export const addMedication = (med)=> {
    return (dispatch, getState) => {
        dispatch({ type: "ADD_MEDICATION", med: med})
    }
}

export const addAppointment = (appt)=> {
    return (dispatch, getState) => {
        dispatch({ type: "ADD_APPT", appt: appt})
    }
}