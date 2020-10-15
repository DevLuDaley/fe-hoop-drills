export default function accountReducer(state = {routines: []}, action) {
// debugger;
    switch (action.type) {
        case 'FETCH_ROUTINES':
            // return state
            return {routines: action.payload}
        case 'ADD_ROUTINE':
            return {...state, routines:[...state.routines, action.payload]}
        case 'ADD_ROUTINE_DRILL':
            let routinesDrills =  state.routines.map(routine => {
                if (routine.id === action.payload.id) {
                    return action.payload
                } else {
                    return routine
                }
            })
            return {...state, routines:[...state.routines, action.payload]}

        default:
            return state
    }

    //Routine.all.length || Routine.all.count
// return state

}

// dispatch(actionObje) 