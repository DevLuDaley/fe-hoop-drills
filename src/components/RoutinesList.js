import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
// import Routine from '../components/Routine'


const RoutinesList = (props)  => {
        return (
        <Fragment>
                    {/* {props.routine && props.routines.map(routine =>  */}
            {props.routines && props.routines.map(routine => 
            <ul className='routines-list' key={routine.id}>
                  <li key={routine.id}>
                      <Link to={`/routines/${routine.id}`}>{routine.routine_name}</Link> 
                  </li> 
                  </ul> 
            )
            }
        </Fragment>  
        );
}
 
export default RoutinesList;