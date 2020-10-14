import React, { Fragment} from 'react'
import {Redirect} from 'react-router-dom'

const Routine = (props) => {
    // console.log('props here =>',props.routine.id);
    // console.log(`props`, props.id);
    let routine = props.routines[props.match.params.id -1]
    // console.log(routine);
    // console.log(routine)
    handleChange = ()=> {
        
    }
    handleSubmit = ()=> {

    }
handleChange = (params) => {
    
}


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
        
        Add a Drill to this Routine
        <form onSubmit={this.handleSubmit}>
                <label>Drill Name:</label> 
                <input type="text" placeholder='enter new drill...' value={this.state.drill_name} name="drill_name" onChange={this.handleChange}/>
                <button type="submit">Add Drill</button>
        </form> 
                
    </Fragment>

    )
}
export default Routine