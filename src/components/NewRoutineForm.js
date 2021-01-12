import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {addRoutine} from '../actions/addRoutine'
import RoutinesList from '../components/RoutinesList'


class NewRoutineForm extends Component {
    // state = {routine_name: '' }
    // state = {name: ''}
    state = {
        routine_name:''
    }
    
    handleChange = (e) => {
        // e.preventDefault()
        // console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // let newRoutineForm = document.getElementById('new-routine-form')
        this.props.addRoutine(this.state)
        // store.dispatch({type:'ADD_ROUTINE_DRILL', payload:{routine_name: routine.routine_name}})
        // e.target.reset()
        // alert(`${[this.state.routine_name]} created!`)
        this.setState({
      routine_name: ''
      })
    }
        

 
// export default connect(mapStateToProps)(App);

    render() {
        return (
        <Fragment>
            <form id='new-routine-form' onSubmit={this.handleSubmit}>
                <label> Routine Name:</label> 
                    <input type="text" placeholder='enter new routine...' value={this.state.routine_name} name="routine_name" onChange={this.handleChange}/>
                        <button type="submit">Add Routine</button>
            </form>  
        </Fragment>  
        );
    }
}


export default connect(null, {addRoutine})(NewRoutineForm);
// ! doesn't need mapStateToProps
// ! doesn't need access to prop
//  ! doesn;t need to know what is currently in store...only responsible for adding new routine and updating

// ! instead of mapDispatchToProps we're calling {addRutine} and use the connect component
