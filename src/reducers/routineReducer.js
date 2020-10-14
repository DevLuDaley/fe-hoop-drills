export default function accountReducer(state = {routines: []}, action) {
// debugger;
    switch (action.type) {
        case 'FETCH_ROUTINES':
            // return state
            return {routines: action.payload}
        case 'ADD_ROUTINE':
            // console.log(state)
            return {...state, routines:[...state.routines, action.payload]}

        default:
            return state
    }

    //Routine.all.length || Routine.all.count
// return state

}

// dispatch(actionObje) 