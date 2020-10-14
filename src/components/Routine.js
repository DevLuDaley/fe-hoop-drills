import React, { Fragment} from 'react'

const Routine = (props) => {
    return( 
    <Fragment>
    <li key={props.id}>
        <h1>
        {props.routine.routine_name}  
        </h1>
        {props.routine.drills.map(drill => <h5>{drill.drill_name}</h5>  )
        }
    </li>
                {/* <li key={routine.id}>
                    <h3>
                    {routine.routine_name}
                    </h3> */}
    </Fragment>

    )
}
export default Routine