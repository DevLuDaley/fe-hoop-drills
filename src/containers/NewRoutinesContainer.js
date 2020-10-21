import React, { Component, Fragment } from 'react';

import NewRoutineForm from '../components/NewRoutineForm'
import RoutinesList from '../components/RoutinesList'
// import 


class NewRoutinesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        // add state
        console.log(`these are props`, this.props);
    }
    render() { 
        return (
            <Fragment>
                <NewRoutineForm/>
                <RoutinesList routines={this.props.routines}/>
            </Fragment>
          );
    }
}
 
export default NewRoutinesContainer;