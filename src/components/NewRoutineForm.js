import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {addRoutine} from '../actions/addRoutine'
// import DrillsContainer from '../containers/DrillsContainer'

class NewRoutineForm extends Component {
    // state = {routine_name: '' }
    // state = {name: ''}
    state = {} //{routine_name:''}
    
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
        // let newRoutineForm = document.getElementById('new-routine-form')
        this.props.addRoutine(this.state)
        
//         console.log('NewRoutineForm -> handleSubmit -> e.target.children[1] =>', e.target.children[1]);
//         console.log('NewRoutineForm -> handleSubmit -> e.target.children[1].name =>', e.target.children[1].name);
//         console.log('NewRoutineForm -> handleSubmit -> e.target.children[1].value =>', e.target.children[1].value);
// console.log('NewRoutineForm -> handleSubmit -> e.target.children[routine_name].value', e.target.children['routine_name'].value);
        // e.target.children['routine_name'].value = ''
        // e.target.children[1].value = ''
        // console.log(newRoutineForm);
        // this.props.routine_name = ''
        // newRoutineForm.reset()
        // e.target.value
        // console.log('NewRoutineForm -> handleSubmit -> e.target.value', e.target.value);
        // console.log('NewRoutineForm -> handleSubmit -> e.target.children[1]', e.target.children['routine_name'].value);
        // // e.target.reset()
    }
        
    render() {
        return (
        <Fragment>
            {/* NewRoutineForm */}
            <form id='new-routine-form' onSubmit={this.handleSubmit}>
                <label> Routine Name:</label> 
                    <input type="text" placeholder='enter new routine...' value={this.state.routine_name} name="routine_name" onChange={this.handleChange}/>
                        <button type="submit">Add Routine</button>
            </form>  
            {/* <DrillsContainer/>       */}
        </Fragment>  
        );
    }
}
 
export default connect(null, {addRoutine})(NewRoutineForm);
// ! doesn't need mapStateToProps
// ! doesn't need access to prop
//  ! doesn;t need to know what is currently in store...only responsible for adding new routine and updating

// ! instead of mapDispatchToProps we're calling {addRutine} and use the connect component
