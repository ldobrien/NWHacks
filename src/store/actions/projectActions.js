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

export const addExercise = (exercise)=> {
    return (dispatch, getState) => {
        dispatch({ type: "ADD_EXERCISE", exercise: exercise})
    }
}

export const addMedOp = (med)=> {
    return (dispatch, getState) => {
        dispatch({ type: "ADD_MED_OP", med: med})
    }
}

export const addPhysio = (med)=> {
    return (dispatch, getState) => {
        dispatch({ type: "ADD_PHYSIO", med: med})
    }
}


