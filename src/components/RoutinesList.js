import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom';
import Routine from '../components/Routine'

class RoutinesList extends Component {
    constructor (props){
        super(props)
        this.state = {}
    }

    render() { 
        // return (  );
// }
 let handleDelete = (e) => {
 this.props.deleteRoutine(this.state)
}
// export default RoutinesList;
// const RoutinesList = (props)  => {

        return (
        <Fragment>
        {/* {console.log('RoutinesList -> this.props.routines', this.props.routines)} */}
            {this.props.routines && this.props.routines.map(routine => 
            <ul key={routine.id} className='routines-list'>
                  <li key={routine.id}>
                      <div className="routine-name">
                      <Link to={`/routines/${routine.id}`}> 
                            {routine.routine_name} 
                      </Link> 
                      </div>

                            <button>
                                {routine.drills ? routine.drills.length : null}
                            </button> 
                            <button onClick={this.handleDelete}>
                                Delete
                            </button> 
                  </li> 
            </ul>
            )
            }
        </Fragment>
        );
}
 }
export default RoutinesList;