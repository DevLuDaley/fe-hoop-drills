import React, { Fragment, useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
// import Routine from '../components/Routine'


const RoutinesList = props => {
    const [stateRoutines, setStateRoutines] = useState([])
    //! [[],fn]
        useEffect(() => {
                setStateRoutines(props.routines);
            }, [props.routines]);

//     function fn(toggle){ 
//       return function(){
//          toggle = !toggle; 
//         return function(a,b){
//             return (a.routine_name === b.routine_name ? 0 : a.routine_name < b.routine_name ? 1 : -1) * (toggle ? 1 : -1)    
//         } 
//       }
//     }
//    var alphaSort = fn()



    var ascSort = (a, b) =>
    {
            return a.routine_name === b.routine_name ? 0 : a.routine_name > b.routine_name ? 1 : -1
    }

    var descSort = (a, b) =>
    {
            return a.routine_name === b.routine_name ? 0 : a.routine_name < b.routine_name ? 1 : -1
    }

    

            //  useEffect(() =>
            // setStateRoutines([...stateRoutines].sort()), [stateRoutines])
 
            //! [[],fn]
            // ! use state as a low cost mimic of lifecycle

         return (
        <Fragment>
            {/* <button key={100} onClick={() => setStateRoutines([...stateRoutines].sort(alphaSort()))}
            >
                sort alpha
            </button>    */}
            <button key={99} onClick={() => setStateRoutines([...stateRoutines].sort(ascSort))}
            >
                sort asc
            </button>   
            <button key={98} onClick={() => setStateRoutines([...stateRoutines].sort(descSort))}
            >
                sort desc
            </button>   
            
            <ul
            key={props.id} id='list-of-routines' className='routines-list'
            >
            {/* {props.routines && props.routines.map(routine =>  */}
            {stateRoutines && stateRoutines.map(routine => 
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