const initState = {
    medicationCosts: {
        name: ["Advil", "Oxycotin", "Warfarin"],
        totalCost: 0,
        totalToDate: 0,
    },
    physio: {
        totalCost: 0,
        totalSessions: 0,

    },
    appointments: [],
    exercises: [],
    medications: [],
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_MEDICATION':
            return {
                ...state,
                medicationCosts: {
                    ...state.medicationCosts,
                    name: [...state.medicationCosts.name, action.med.name],
                    totalCost: action.med.totalCost,
                    totalToDate: action.med.totalToDate
                }
            }
        case 'ADD_APPT':
            return{
                appointments: [...state.appointments, action.appt]
            }
        case 'ADD_EXERCISE':
            return{
                exercises: [...state.exercises, action.exercise]
            }
        case 'ADD_MED_OP':
            return{
                medications: [...state.medications, action.med]
            }
        case 'ADD_PHYSIO':
            return {
                ...state,
                physio: {
                    ...state.physio,
                    totalCost: action.med.totalCost,
                    totalSessions: action.med.totalSessions
                }
            }
        default:
            return state;
    }
}

export default projectReducer;