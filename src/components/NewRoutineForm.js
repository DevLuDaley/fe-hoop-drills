import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {addRoutine} from '../actions/addRoutine'

class NewRoutineForm extends Component {
    // state = {routine_name: '' }
    // state = {name: ''}
    state = {}
    
    handleChange = (e) => {
        // e.preventDefault()
        // console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log('NewRoutineForm -> handleChange -> e', e);
        // console.log('NewRoutineForm -> handleChange -> e.target', e.target);
        // console.log('NewRoutineForm -> handleChange -> e.target.name', e.target.name);
        // console.log('NewRoutineForm -> render -> this.state.routine_name', this.state);
        // console.log('NewRoutineForm -> handleChange -> e.target.value', e.target.value);
        // console.log('NewRoutineForm -> handleChange -> e.target.routine_name', e.target.routine_name);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addRoutine(this.state)
        e.target.children['routine_name'].value = ''
        // e.target.value
        // console.log('NewRoutineForm -> handleSubmit -> e.target.value', e.target.value);
        // console.log('NewRoutineForm -> handleSubmit -> e.target.children[1]', e.target.children['routine_name'].value);
        // // e.target.reset()
    }
        
    render() {
        return (
        <Fragment>
            {/* NewRoutineForm */}
            <form onSubmit={this.handleSubmit}>
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
