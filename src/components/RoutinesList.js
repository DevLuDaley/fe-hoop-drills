import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import Routine from '../components/Routine'


const RoutinesList = (props)  => {
        return (
        <Fragment>
        {console.log('RoutinesList -> props.routines', props.routines)}
            {props.routines && props.routines.map(routine => 
            <ul key={routine.id} className='routines-list'>
                  <li key={routine.id}>
                      <Link to={`/routines/${routine.id}`}> 
                            {routine.routine_name} 
                            <button>
                                {routine.drills ? routine.drills.length : null}
                            </button> 
                      </Link> 
                  </li> 
            </ul>
            )
            }
        </Fragment>
        );
}
 
export default RoutinesList;