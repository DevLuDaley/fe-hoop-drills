import React, { Fragment, useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import NewRoutineForm from './NewRoutineForm';
// import Routine from '../components/Routine'


const RoutinesList = props => {
    const [stateRoutines, setStateRoutines] = useState([])
    //! [[],fn]
    // ! use state as a low cost lifecycle methods
        useEffect(() => {
                setStateRoutines(props.routines);
            }, [props.routines]);
    var ascSort = (a, b) =>
    {
            return a.routine_name === b.routine_name ? 0 : a.routine_name > b.routine_name ? 1 : -1
    }

    var descSort = (a, b) =>
    {
            return a.routine_name === b.routine_name ? 0 : a.routine_name < b.routine_name ? 1 : -1
    }

         return (
        <Fragment>
        <h1>
                Your Routines List
                </h1>
                <NewRoutineForm/>
                <br></br>
            sort: <button key={99} className='routine-order-btns' onClick={() => setStateRoutines([...stateRoutines].sort(ascSort))}
            >asc</button>
            <button key={98} className='routine-order-btns' onClick={() => setStateRoutines([...stateRoutines].sort(descSort))}
            >desc</button>

            <ul key={props.id} id='list-of-routines' className='routines-list'>
                
                 {
                  stateRoutines && stateRoutines.map(
                    routine => 
                        <li key={routine.id}>
                            <Link to={`/routines/${routine.id}`}> 
                                    {routine.routine_name} 
                                    <button>
                                        {routine.drills ? routine.drills.length : null}
                                    </button> 
                            </Link> 
                        </li> 
                    )
                }
            </ul>
        </Fragment>
        );
}
 
export default RoutinesList;