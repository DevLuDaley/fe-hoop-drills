 export default function routineReducer(
      state={}, action) {
    //  state = {routines: []}, action) {
// debugger;
    switch (action.type) {
        case 'FETCH_ROUTINES':
            // return state
            return {routines: action.payload}
        case 'ADD_ROUTINE':
            let routineId = action.payload.id // + 1
            console.log('routineReducer -> routineId', routineId);
            let newRoutine = action.payload
            console.log('routineReducer -> newRoutine', newRoutine);
            console.log('routineReducer -> state.routines 1', state.routines);
            // ! add new routine to list of routines
            console.log('routineReducer -> state.routines 2', state.routines);

                return {...state.routines, routines: state.routines.concat(newRoutine)}
            
        case 'DELETE_ROUTINE':
                    return {...state.routines, routines: state.routines}

        case 'ADD_ROUTINE_DRILL':
            // let routineId = [action.payload.id -1]
            let routineDrills =  state.routines.map(routine => {
                if (routine.id === action.payload.id) {
                    return action.payload
                    } else {
                        return routine
                    }
                  }
                )
            return {...state, routines: routineDrills}

        default:
            console.log('accountReducer -> state', state);
            return state
    }

}