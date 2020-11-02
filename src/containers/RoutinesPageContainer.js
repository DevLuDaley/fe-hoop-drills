import React, { Component, Fragment } from 'react';

import NewRoutineForm from '../components/NewRoutineForm'
import RoutinesList from '../components/RoutinesList'
import RoutinesOrderBtns from '../components/RoutinesOrderBtns'
// import 


class RoutinesPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        // add state
        // console.log(`these are props`, this.props);
    }
    render() { 
        return (
            <Fragment>
                <NewRoutineForm/>
                {/* <br></br> */}
                <RoutinesList routines={this.props.routines}/>
                {/* <RoutinesOrderBtns/> */}
            </Fragment>
          );
    }
}
 
export default RoutinesPageContainer;