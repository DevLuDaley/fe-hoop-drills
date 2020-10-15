import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addRoutineDrill} from '../actions/addRoutineDrill'

class NewRoutineDrillForm extends Component {
    state = {  }

    handleChange = (e)=> {
        console.log(e.target);
         this.setState({
            [e.target.name]: e.target.value,
            id: this.props.routine['id']
            // [e.target.drill_name]: e.target.value,
            // [e.target.reps]: e.target.reps,
            // [e.target.sets]: e.target.sets
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault()
        // console.log(e);
        this.props.addRoutineDrill(this.state)
         this.setState({
            [e.target.name]: e.target.value,
            id: this.props.routine['id']})
        // e.target.children['name'].value = ''
        // e.target.children['reps'].value = ''
        // e.target.children['sets'].value = ''
        // console.log(e.target);
        // console.log(this.props)
        
    }
    render() { 
        return (  
        <form onSubmit={this.handleSubmit}>
              <input type="hidden" placeholder='' value={this.props.id} name="id" onChange={this.handleChange}/>
            <label>Name:</label> 
              <input type="text" placeholder='enter new drill...' value={this.props.drill_name} name="drill_name" onChange={this.handleChange}/>
            <label>Reps:</label> 
              <input type="text" placeholder='enter reps...' value={this.props.reps} name="reps" onChange={this.handleChange}/>
            <label> Sets:</label> 
              <input type="text" placeholder='enter sets...' value={this.props.sets} name="sets" onChange={this.handleChange}/>
                <button type="submit">Add Drill</button>
        </form>
        );
    }
}
 
export default  connect(null, {addRoutineDrill}) (NewRoutineDrillForm);