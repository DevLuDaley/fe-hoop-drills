import React, { Component, Fragment } from 'react'
import {Switch} from 'react-router-dom'
// import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import RoutinesList from '../components/RoutinesList'
// import Home from '../components/Home'
// import {fetchRoutines} from '../actions/fetchRoutines'
// import NewRoutinesContainer from '../containers/NewRoutinesContainer'
var Navbar = () => {
// class Navbar extends Component {
//     state = {  }
//     render() { 
        return (
            <Fragment>
            <Switch>
            <nav className='nav'>
                <ul style={{listStyleType: 'none'}}>
                    <Link to={`/home`}> <li> Home </li> </Link> 
                    <Link to={`/routines`}> <li> Routines </li> </Link> 
                    <Link to={`/routines/new`}> <li> New Routine </li> </Link> 
                </ul>
            </nav>
            </Switch>
        </Fragment>
          );
    // }
}
 
export default Navbar;