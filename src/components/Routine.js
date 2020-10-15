import React, { Fragment } from 'react'
import {Redirect} from 'react-router-dom'
import NewRoutineDrillForm from '../components/NewRoutineDrillForm'

const Routine = (props) => {
    // console.log('props here =>',props.routine.id);
    // console.log(`props`, props.id);
    // let routine = props.routines[props.match.params.id -1]
    let routine = props.routines.filter(routine => routine.id == props.match.params.id)[0]
    // console.log('Routine -> routine', routine);
    // console.log(routine);
    // console.log('ROUTINE => ', routine)

    return( 
    <Fragment>
        <li className='routine-li' key={props.routine} style={{listStyleType: 'none'}}>
        {/* {routine ? null : <Redirect to='/routines'/>} */}

            <h1>
            {/* {routine.routine_name} */}
            {routine ? routine.routine_name : null}
            </h1>
            <h3 className='drills-list'>Drills List</h3>
            {routine ? routine.drills.map(drill => <h5 key={drill.id}>{drill.drill_name}</h5>) : null
            }
        </li>
        
   <NewRoutineDrillForm routine={routine} />
   {/* id={props.routines[props.match.params.id -1]} */}
    </Fragment>

    )
}
export default Routine