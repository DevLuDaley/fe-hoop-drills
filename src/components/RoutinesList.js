import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
// import Routine from '../components/Routine'


const RoutinesList = (props)  => {
        return (
        <div>
        {/* {console.log('RoutinesList -> props.routines', props.routines)} */}
            {props.routines && props.routines.map(routine => 
            <ul className='routines-list' key={routine.id}>
                  <li key={routine.id}>
                      <Link to={`/routines/${routine.id}`}> 
                            {routine.routine_name} 
                            <button>
                                {routine.drills.length}
                            </button> 
                      </Link> 
                  </li> 
                  </ul> 
            )
            }
        </div>  
        );
}
 
export default RoutinesList;