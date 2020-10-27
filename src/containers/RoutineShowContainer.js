import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
// import {Route, Switch} from 'react-router-dom'

import {fetchRoutines} from '../actions/fetchRoutines'
// import NewRoutineForm from '../components/NewRoutineForm'
// import Routine from '../components/Routine'
import RoutineDrillsList from '../components/RoutineDrillsList'
import NewRoutineDrillForm from '../components/NewRoutineDrillForm'
// import RoutinesList from '../components/RoutinesList'
// import Home from '../components/Home'
// import NewRoutinesContainer from './NewRoutinesContainer'
//'.components/NewRoutineForm'

class RoutineShowContainer extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {}
    // }
    componentDidMount(){
        this.props.fetchRoutines()
    }

    render() {
       if (this.props.routines) {
        let urlId = window.location.href.replace('http://localhost:3001/routines/','')
        let currentRoutine = this.props.routines[(urlId -1)]
        console.log('RoutineDrillsList -> currentRoutineId', currentRoutine);

        // currentRoutine.routine-name
        // console.log('RoutineDrillsList -> currentRoutine.routine-name', currentRoutine.routine_name);
        console.log('RoutineDrillsList -> urlId', urlId);

        var routine = currentRoutine
    }
        return ( 
        <Fragment>
            <RoutineDrillsList routines={this.props.routines} routine={routine}/>
            {/* <NewRoutineDrillForm/> */}
            <NewRoutineDrillForm routines={this.props.routines} routine={routine}/>
        </Fragment> );
    // }
// }

}
}
//! redux store
    const mapStateToProps = state => {
    // console.log('state.routines', state.routines);
        return(
            {
                routines: state.routines
            }   
        
            )
        }

// const mapDispatchToProps = dispatch => {
//   return {
//     delete: routinePayload => dispatch({type: 'DELETE_ROUTINE', payload: routinePayload })
//   }
// }

 
export default connect(mapStateToProps, {fetchRoutines})(RoutineShowContainer);