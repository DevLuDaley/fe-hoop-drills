import React, { Fragment } from 'react'
import {Redirect} from 'react-router-dom'
import NewRoutineDrillForm from '../components/NewRoutineDrillForm'

const Routine = (props) => {
    // console.log('props here =>',props.routine.id);
    // console.log(`props`, props.id);
    // let routine = props.routines[props.match.params.id -1]
    if (props.routines) {

        var routine = props.routines.filter(routine => routine.id == props.match.params.id)[0]
    }

    // console.log(`CONSOLED PROPS from ROUTINE.JS`, props.routines);
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
            
            {routine ? routine.drills.map(drill => <h5 key={drill.id}>{drill.drill_name} Sets: {drill.sets} Reps: {drill.reps}      </h5>) : null
            }
        </li>
        
   <NewRoutineDrillForm routine={routine} />
   {/* id={props.routines[props.match.params.id -1]} */}
    </Fragment>

    )
}
export default Routine