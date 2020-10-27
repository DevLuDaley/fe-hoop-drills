export const deleteRoutine = (data) => {
    const baseUrl = 'http://localhost:3000/api/v1/routines/'
    const routineUrl = (baseUrl + data)

    return (dispatch) => {
        return fetch(routineUrl, {
        method: 'DELETE'
        })
        .then(response => response.json())
        .then(routine => dispatch({type: 'DELETE_ROUTINE', payload: routine}))
    }
};
// console.log('deleteRoutine -> dispatch', dispatch);

export default deleteRoutine;

// console.log('deleteRoutine  is WORKING');
// debugger
// ! return dispatch so that we have access to dispatch function, thanks to thunk.
// ! thunk is allowing us to pass in dispatch to the thunk function that we have inside of our action creator
