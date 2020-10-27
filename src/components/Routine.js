import React, { Component, Fragment } from 'react'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
// import deleteRoutine from '../actions/deleteRoutine'
// import NewRoutineDrillForm from '../components/NewRoutineDrillForm'
// import RoutineShowContainer from '../containers/RoutineShowContainer'

class Routine extends Component {
    // constructor(props){
        // super(props)
        // state = {routine: []}
        // this.deleteRoutine = deleteRoutine
    // }


    // var targetId
    
    // handleDelete = (clickedId) => {
    //     // debugger 
    //     //  e.preventDefault()
    //      this.props.deleteRoutine(clickedId)
    //     // ! direct connect to action creator
    //     //  deleteRoutine(clickedRoutine)
    //     //  ! previous method call =>>> props.delete(clickedRoutine)
    //     //  this.props.delete(clickedRoutine)
    // }
    
    render() { 
    return( 
        // ! Each route/page needs a container to handle the state/maptoprops/dispatch calls- basically the container components are controllers that make calls to the reducer which make a call to the matching action component which will call the rails api and then the database will be updated. then the respsonse data is sent to the controller to the reducer to the component/update state and 

        // ? rerender affected componenets via connect???.

        // ! This coponent should be the template for the routines show page...The current logic should be used for the edit or create component/page.

        <Fragment>
   
        {/* <li className='routine-li' key={props.routine.id}  */}
        
   {/* <NewRoutineDrillForm routine={routine} /> */}
   {/* <RoutineShowContainer routine={routine} /> */}
   {/* id={props.routines[props.match.params.id -1]} */}
    </Fragment>

    )
}
}
// const mapDispatchToProps = dispatch => {
//   return {
//     delete: routineId => { dispatch(
//           {
//               type: 'DELETE_ROUTINE',
//               payload: routineId
//           }
//         )
//       }
//   }
//   }
// export default connect(null, mapDispatchToProps)(Routine);
export default connect()(Routine);
// export default connect(null, {deleteRoutine})(Routine);
// export default Routine