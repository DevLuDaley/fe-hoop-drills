import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
// import Routine from '../components/Routine'
import deleteRoutine from '../actions/deleteRoutine'

class RoutinesList extends Component {
    constructor (props){
        super(props)
        this.state = {routines: []}
    }

    // handleDelete = clickedId => this.props.deleteRoutine(clickedId)
        // debugger 
        //  e.preventDefault()
        // ! why does this make the api go haywire?
        //  {deleteRoutine(clickedId)}
        // ! direct connect to action creator
        //  deleteRoutine(clickedRoutine)
        //  ! previous method call =>>> props.delete(clickedRoutine)
        //  this.props.delete(clickedRoutine)
        //  this.props.deleteRoutine(clickedId)
        //  this.props.delete(clickedId)
    // }

    render() { 
// var clickedRoutine
//  var handleDelete = (e) => {
//      let targetId = e.target.id.replace('btn-delete-routine-','') -1
//      var clickedRoutine = this.props.routines[targetId]
//      console.log('RoutinesList -> handleDelete -> clickedRoutine.id', clickedRoutine);
//     //  deleteRoutine(clickedRoutine)
//      this.props.delete(clickedRoutine)
// }

let routinesList = this.props.routines
        return (
        <Fragment>
        <div key={`div-1`}>
            <ul key={`ul-1`} className='routines-list'>
            {routinesList && routinesList.map((
routine, id) => 
               <li key={`li-${routine.id}`}>
                  <Link key={`link-id-${routine.id}`} className="routine-name" to={`/routines/${routine.id}`}> 
                        {routine.routine_name} -
                        routine.id = {routine.id} && id ={id} 
                        {/* {console.log('RoutinesList -> render -> routine.id', routine.id)}  */}
                        {/* {console.log('RoutinesList -> render -> id', id)}  */}

                  </Link> 
                  <p key={`drill-count-${routine.id}`} className='drills-count' id={'drills-count-' + routine.id}>
                      {routine.drills ? routine.drills.length : null}
                  </p>  
                  <button
                    key={routine.id} className='btn-delete'
                    id={'btn-delete-routine-' + routine.id}
                    onClick={() => this.props.deleteRoutine(routine.id)}>
                             Delete
                  </button> 
               </li> 
                  

              )
            }
            </ul>
        </div>
        </Fragment>
        );
}
 }

//  const mapStateToProps = state => {
//   return {
//     routines: state.routines
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    delete: routineClicked => { dispatch(
          {
              type: 'DELETE_ROUTINE',
              payload: routineClicked
          }
        )
      }
  }
  }


export default connect(null, {deleteRoutine})(RoutinesList);
// export default connect(null, mapDispatchToProps)(RoutinesList);

// export default RoutinesList;
