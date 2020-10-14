import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchRoutines} from '../actions/fetchRoutines'
import NewRoutineForm from '../components/NewRoutineForm'
import RoutinesList from '../components/RoutinesList'
//'.components/NewRoutineForm'

class RoutinesContainer extends Component {
    componentDidMount(){
        this.props.fetchRoutines()
    }

    render() { 
        return ( 
        <Fragment>
            <br></br>
            <Route path='/routine/new' component={NewRoutineForm}/>
            {/* <NewRoutineForm/> */}
            <br></br>
            <Route path='/routines' render={
                () => <RoutinesList routines={this.props.routines}
             /> } />
        </Fragment> );
    }
}
const mapStateToProps = state => {
    return(
        {
            routines: state.routines
        }
    )
}

 
export default connect(mapStateToProps, {fetchRoutines})(RoutinesContainer);