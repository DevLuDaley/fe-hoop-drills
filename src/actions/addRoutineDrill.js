export const addRoutineDrill = (data) => {
    // debugger
    console.log('addRoutineDrill - line 3 - data =>', data)
    // ! return dispatch so that we have access to dispatch function, thanks to thunk.
    // ! thunk is allowing us to pass in dispatch to the thunk function that we have inside of our action creator addRoutineDrill

    return(dispatch) => {
        fetch(`
        https://be-hoop-drills.herokuapp.com/api/v1/routines/${data.id}`, {
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(routine => dispatch({
            type: 'ADD_ROUTINE_DRILL',
            payload: routine
                }
            )
        )
        // console.log('addRoutineDrill -> data =>', data);
        // console.log(routine);
    }
};
