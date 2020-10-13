import React, { Component, Fragment } from 'react'
class NewRoutineForm extends Component {
    // state = {routine_name: '' }
    state = {}
    
    handleChange = (e) => {
        e.preventDefault()
        // console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log('NewRoutineForm -> handleChange -> e', e);
        console.log('NewRoutineForm -> handleChange -> e.target', e.target);
        console.log('NewRoutineForm -> handleChange -> e.target.name', e.target.name);
        console.log('NewRoutineForm -> render -> this.state.routine_name', this.state);
        // console.log('NewRoutineForm -> handleChange -> e.target.value', e.target.value);
        // console.log('NewRoutineForm -> handleChange -> e.target.routine_name', e.target.routine_name);
    }
    
    render() {
        return (
        <Fragment>
            NewRoutineForm
            <form>
            <label> Routine Name:</label> 
            <input type="text" placeholder='enter new routine...' value={this.state.routine_name} name="routine_name" onChange={this.handleChange}/>
            <button type="submit">Add Routine</button>
            </form>        
        </Fragment>  
        );
    }
}
 
export default NewRoutineForm;