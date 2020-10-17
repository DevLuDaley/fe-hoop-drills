 export default function routineReducer(state = {routines: []}, action) {
// debugger;
    switch (action.type) {
        case 'FETCH_ROUTINES':
            // return state
            return {routines: action.payload}
        case 'ADD_ROUTINE':
            let routineId = action.payload.id - 1
            let newRoutine = state.routines[routineId]
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

                return {...state, routine: action.payload}
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