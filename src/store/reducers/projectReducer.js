const initState = {
    medicationCosts: {
        name: [],
        totalCost: 0,
        totalToDate: 0,
    },
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
        
        default:
            return state;
    }
}

export default projectReducer;