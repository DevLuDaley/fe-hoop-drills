import React, { Fragment } from 'react'
import Routine from '../components/Routine'

const RoutinesList = (props)  => {
        return (
        <Fragment>
            {/* RoutinesList */}
            <ul style={{listStyleType: 'none'}}>
            {props.routines.map(routine => 
                    <Routine routine={routine} />
                
            )}
            </ul>
        </Fragment>  
        );
}
 
export default RoutinesList;