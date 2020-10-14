import React, { Fragment} from 'react'
import {Redirect} from 'react-router-dom'

const Routine = (props) => {
    // console.log('props here =>',props.routine.id);
    // console.log(`props`, props.id);
    let routine = props.routines[props.match.params.id -1]
    // console.log(routine);
    // console.log(routine)
    return( 
    <Fragment>
    <li key={props.routine} style={{listStyleType: 'none'}}>
    {routine ? null : <Redirect to='/routines'/>}

        <h1>
        {routine ? routine.routine_name : null}
        </h1>
        {/* console.log(routine) */}
        {routine ? routine.drills.map(drill => <h5>{drill.drill_name}</h5>) : null
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