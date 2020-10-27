import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {fetchRoutines} from '../actions/fetchRoutines'
// import NewRoutineForm from '../components/NewRoutineForm'
// import Routine from '../components/Routine'
import RoutinesList from '../components/RoutinesList'
import Home from '../components/Home'
import NewRoutinesContainer from '../containers/NewRoutinesContainer'
import RoutineShowContainer from '../containers/RoutineShowContainer'
//'.components/NewRoutineForm'

class RoutinesContainer extends Component {
    componentDidMount(){
        this.props.fetchRoutines()
    }

    render() { 
        return ( 
        <Fragment>
            <Switch>
            <Route path='/home' component={Home}/>

            <Route exact path='/routines' render={(routerProps) => <RoutinesList {...routerProps} routines={this.props.routines}/>}/>

            <Route exact path='/routines/new' render={(routerProps) => <NewRoutinesContainer {...routerProps} routines={this.props.routines} delete={this.props.delete}/>}/>
            
            <Route exact path='/routines/:id' render={(routerProps) => <RoutineShowContainer {...routerProps}/>}/> 

            {/* <Route exact path='/routines/:id' render={(routerProps) => <Routine {...routerProps} routines={this.props.routines}/>}/> */}
            
            </Switch>
        </Fragment> );
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
//     delete: routinePayload => dispatch({type: 'DELETE_ROUTINE', payload: this.props.routines[(routinePayload -1)] })
//   }
// }

 
export default connect(mapStateToProps, {fetchRoutines})(RoutinesContainer);
// export default connect(mapStateToProps, {fetchRoutines})(RoutinesContainer);
// export default connect(mapStateToProps, {mapDispatchToProps})(RoutinesContainer);