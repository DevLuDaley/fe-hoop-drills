import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'

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
            RoutinesContainer
            <br></br>
            <br></br>
            <NewRoutineForm/>
            <br></br>
            <RoutinesList routines={this.props.routines}/>
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