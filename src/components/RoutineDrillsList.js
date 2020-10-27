import React, { Fragment } from 'react'


 const RoutineDrillsList = (props) => {
    if (props.routines) {
        let urlId = window.location.href.replace('http://localhost:3001/routines/','')
        let currentRoutine = props.routines[(urlId -1)]
        var routine = currentRoutine
    }

    return( 
        <Fragment>
                <li className='routine-li' key={props.routine} style={{listStyleType: 'none'}}>
        {/* {routine ? null : <Redirect to='/routines'/>} */}

            <h1>
            {/* {routine.routine_name} */}
            {routine ? routine.routine_name : null}
            </h1>
            
            <h3 className='drills-list'>Drills List
            {/* <button>
                {routine.drills ? routine.drills.length : null}
            </button> */}
            </h3>
            {/* ! this should be a separate component */}
            {routine ? routine.drills.map(drill => <h5 key={drill.id}>{drill.drill_name} Sets: {drill.sets} Reps: {drill.reps}      </h5>) : null
            }
        </li>
</Fragment>
    )
}
export default RoutineDrillsList ;