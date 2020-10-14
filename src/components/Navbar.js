import React, { Component, Fragment } from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import RoutinesList from '../components/RoutinesList'
import {fetchRoutines} from '../actions/fetchRoutines'

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <nav className='nav'>
                <Route exact path='/routines' component={RoutinesList}/>
                <ul style={{listStyleType: 'none'}}>
  <li><a href="/routines">Home</a></li>
  <li><a href="/routines/new">New Routine</a></li>
</ul>
            </nav>
          );
    }
}

//! redux store
const mapStateToProps = state => {
    return(
        {
            routines: state.routines
        }
    )
}


export default connect(mapStateToProps, {fetchRoutines})(Navbar);
 
// export default Navbar;