 export default function routineReducer(
      state={routines: []}, action) {
    //  state = {routines: []}, action) {
        
// debugger;
    switch (action.type) {
        case 'FETCH_ROUTINES':
            // return state
            return {routines: action.payload}

        case 'ADD_ROUTINE':
            // console.log('ADD-ROUTINE in REDUCER WORKS');
            let newRoutine = action.payload
            let appendRoutine = state.routines.concat(newRoutine)
            return {...state.routines, routines: appendRoutine}
            // return {...state, routines: [...state.routines, action.payload]}

        case 'DELETE_ROUTINE':
            // console.log('DELETE-ROUTINE in REDUCER WORKS');
            // let loadId = action.payload
            let filteredState = state.routines.filter(routine => routine.id !== action.payload.routineId)
                // state.routines[action.payload - 1])
            // console.log('action.payload', action.payload);
            // console.log('filteredState', filteredState);
            // console.log('action.payload', action.payload);
            // console.log('action.payload.routineId', action.payload.routineId);
            // state.routines[action.payload]
            // let propId = action.payload
            // console.log('state.routines[action.payload]', state.routines[propId]);
            // console.log('routine => routine.id !== state.routines routine.id - 1', action.payload);

            // return {...state.routines, routines: filteredState}
            // console.log('action.type', action.type);
            return {...state, routines: filteredState}
            // return {...state, routines: filteredState}
            // console.log("DELETE ROUTINE IS WORKING");
            
            // console.log('(action.payload.id)-1)', (action.payload.id)-1);
            // console.log('action.payload', action.payload);
            // console.log('action.payload.id', action.payload.id);
            // console.log('state.routines', state.routines);
            // console.log('routine => routine.id !== state.routines routine.id - 1', (state.routines[action.payload -1]));

            // let selectedRoutine = state.routines[(action.payload.id -1)];
            // console.log('state.routines', state.routines);
            // console.log('selectedRoutine', selectedRoutine);

// console.log('LOADID',loadId);
            // console.log('selectedRoutine', selectedRoutine);
            // console.log('selectedRoutine.id', selectedRoutine.id);
            // console.log('filteredState', filteredState);
            //  return { routines: filteredState}

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
            // console.log('accountReducer -> state', state);
            return state
    }

}