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
            // console.log('routineReducer -> action.payload', action.payload);
            // console.log('routineReducer -> action.payload.id', action.payload.id);
            console.log('routineReducer -> routineId', routineId);
            // let newRoutine = state.routines[routineId]
            let newRoutine = action.payload
            // let newRoutine = state.routines[9]
            console.log('routineReducer -> newRoutine', newRoutine);
            console.log('routineReducer -> state.routines 1', state.routines);
            
            // console.log('routineReducer -> state.routines[8]', state.routines[8]);
            // ! add new routine to list of routines
            state.routines.push(newRoutine)
            // console.log('routineReducer -> state.routines[10]', state.routines[10]);
            
            // state.routines.push(action.payload)
            // console.log('routineReducer -> newRoutine AFTER PUSH', newRoutine);
            console.log('routineReducer -> state.routines 2', state.routines);
            // let newLoad =  state.routines.map(routine => {
                // routine.id === action.payload.id //{
                    // return newRoutine.payload
                // } else {
                    // debugger
                    // return newRoutine
                // }
                // console.log('routineReducer -> routine', routine);
            // }
                // )

                return {...state.routines, routines: state.routines}
                // return {...state, routines: action.payload}
                // return {...state, routines:[...state.routines, action.payload]}
                // debugger
// console.log(action.payload);


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

                    // console.log('accountReducer -> ...state', [...state]);
                // console.log('accountReducer -> state', state);
                // console.log('accountReducer -> state.routine', state.routines[action.payload.id -1]);
                // console.log('accountReducer -> state.routines[routineId]', state.routines[routineId]);
                // console.log('accountReducer -> state.routines[routineId].drills', state.routines[routineId].drills);
                // console.log('accountReducer -> action.payload', action.payload);
                // return {...state, routine: [state.routines[routineId]].drills} //, action.payload]}
                // } else {
                    // return action.payload //routine
        // }

    //Routine.all.length || Routine.all.count
// return state

}

// dispatch(actionObje) 