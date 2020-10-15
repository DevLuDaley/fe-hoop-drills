import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addRoutineDrill} from '../actions/addRoutineDrill'

class NewRoutineDrillForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      drill_name: '',
      reps: '',
      sets: '',
      }

  }

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
        e.preventDefault();
        this.props.addRoutineDrill(this.state)
            this.setState({
      id: '',
      drill_name: '',
      reps: '',
      sets: '',
      })
      //! formData object/hash
        // let formData  = { 
        //   [e.target.drill_name]: this.state.drill_name,
        //   [e.target.reps]: this.state.reps,
        //   [e.target.sets]: this.state.sets,
        //   id: this.props.routine['id']
        //  }
    }
    render() { 
        return (  
          <div>
        <form onSubmit={this.handleSubmit}>
              <input type="hidden" placeholder='' value={this.state.id} name="id" onChange={this.handleChange}/>
            <label>Name:</label> 
              <input type="text" placeholder='enter new drill...' value={this.state.drill_name} name="drill_name" onChange={this.handleChange}/>
            <label>Reps:</label> 
              <input type="text" placeholder='enter reps...' value={this.state.reps} name="reps" onChange={this.handleChange}/>
            <label> Sets:</label> 
              <input type="text" placeholder='enter sets...' value={this.state.sets} name="sets" onChange={this.handleChange}/>
                <button type="submit">Add Drill</button>
        </form>
        </div>
        );
      }
      // debugger
}
 
export default connect(null, {addRoutineDrill}) (NewRoutineDrillForm);