import React, { Component, Fragment } from 'react'
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import Routine from '../components/Routine'
import deleteRoutine from '../actions/deleteRoutine'

class RoutinesList extends Component {
    constructor (props){
        super(props)
        this.state = {}
    }

    render() { 
        // return (  );
// }
// var clickedRoutine
//  var handleDelete = (e) => {
//      let targetId = e.target.id.replace('btn-delete-routine-','') -1
//      var clickedRoutine = this.props.routines[targetId]
//      console.log('RoutinesList -> handleDelete -> clickedRoutine.id', clickedRoutine);
//     //  deleteRoutine(clickedRoutine)
//      this.props.delete(clickedRoutine)
// }


        return (
        <Fragment>
            {this.props.routines && this.props.routines.map((
                routine, id) => 
                     <>
                    <Routine 
                        key={id} 
                        routine={routine} 
                        routines={this.props.routines}
                        // delete={this.props.delete}
                    />
                     </>
              )
            }
        </Fragment>
        );
}
 }

//  const mapStateToProps = state => {
//   return {
//     routines: state.routines
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     delete: routineClicked => { dispatch(
//           {
//               type: 'DELETE_ROUTINE',
//               payload: routineClicked
//           }
//         )
//       }
//   }
//   }


export default connect(null, {deleteRoutine})(RoutinesList);
// export default connect(null, mapDispatchToProps)(RoutinesList);

// export default RoutinesList;
