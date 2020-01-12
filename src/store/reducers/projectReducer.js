const initState = {
    medicationCosts: {
        name: [],
        totalCost: 0,
        totalToDate: 0,
    },
    appointments: [],
    exercises: [],
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
        
        default:
            return state;
    }
}

export default projectReducer;