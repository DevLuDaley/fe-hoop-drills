import React, {Fragment} from 'react'

const RoutinesList = (props)  => {
        return (
        <Fragment>
            RoutinesList
            <ul style={{listStyleType: 'none'}}>
            {props.routines.map( 
                routine => 
                <li key={routine.id}>
                    <h3>
                    {routine.routine_name}
                    </h3>
                        <ul style={{listStyleType: 'none'}}>
                        {routine.drills.map(d => 
                        
                        <li key={d.id}>
                        <h4>
                        {d.drill_name}
                        </h4>
                        </li>
                        )}
                        </ul>
                    <br></br>
                </li> 
            )}
            </ul>
        </Fragment>  
        );
}
 
export default RoutinesList;