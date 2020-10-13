import React, { Component } from 'react';
// import NewDrillForm from '../components/NewDrillForm'
import DrillsList from '../components/DrillsList'
//'.components/NewDrillForm'

class DrillsContainer extends Component {
    
    render() { 
        return ( 
        <div>
            DrillsContainer
            {/* <NewDrillForm/> */}
            <DrillsList/>
        </div> );
    }
}
 
export default DrillsContainer;