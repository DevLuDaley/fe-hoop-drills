import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
// import Routine from '../components/Routine'


const RoutinesList = (props)  => {
        return (
        <Fragment>
            {props.routines.map(routine => 
            <ul style={{listStyleType: 'none'}} key={routine.id}>
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