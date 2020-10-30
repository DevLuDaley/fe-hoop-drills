// export function fetchRoutines(action) {
export function fetchRoutines() {
    // ! thunk allows meus to use dispatch here
    // ! bring in dispatch so that we can async if not the connect will handle synchronously
    return(dispatch) => { 
        // fetch('http://localhost:3000/api/v1/routines')
        fetch('https://hoop-drills.herokuapp.com/api/v1/routines')
        // fetch('http://localhost:8080/herokuapp.com/https://hoop-drills.herokuapp.com/api/v1/routines')
        // fetch('https://cors-anywhere.herokuapp.com/https://hoop-drills.herokuapp.com/api/v1/routines')
        // fetch('https://cors-anywhere.hoop-drills.herokuapp.com/api/v1/routines')
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'FETCH_ROUTINES', payload: data}
        ))
    }
        
// .then(jsonResponse =>
//   console.log('App -> componentDidMount -> jsonResponse', jsonResponse))
}

// return action.payload
// export fetchRoutines