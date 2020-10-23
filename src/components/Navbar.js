import React, { Component, Fragment } from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import RoutinesList from '../components/RoutinesList'
// import Home from '../components/Home'
import {fetchRoutines} from '../actions/fetchRoutines'
import NewRoutinesContainer from '../containers/NewRoutinesContainer'

class Navbar extends Component {
    state = {  }
    render() { 
        return (
                    <Fragment>

            <Switch>
            <nav className='nav'>
                {/* <Route exact path='/routines' component={RoutinesList}/> */}
                <ul style={{listStyleType: 'none'}}>
                    {/* <li><a href="/routines">Routines</a></li> */}
                    {/* <li><a href="/routines/new">New Routine</a></li> */}
                    <Link to={`/home`}> <li> Home </li> </Link> 
                    <Link to={`/routines`}> <li> Routines </li> </Link> 
                    <Link to={`/routines/new`}> <li> New Routine </li> </Link> 
                    
                </ul>
            </nav>
            {/* <Route exact path='/routines/new' render={(routerProps) => <NewRoutinesContainer {...routerProps} routines={this.props.routines}/>}/> */}
            {/* <Route exact path='/routines/new' component={NewRoutinesContainer}/> */}
            {/* <Route exact path='/routines/new' component={NewRoutineForm}/> */}
            {/* <Route path='/routines/new' render={props => 
            <Fragment>
                 <NewRoutineForm/>
                 <RoutinesList {...props}/>
            </Fragment>}/> */}
            {/* <Route path='/routines/new' component={NewRoutineForm}/> */}
            
            {/* <Route exact path='/routines/:id' render={(routerProps) => <Routine {...routerProps} routines={this.props.routines}/>}/> */}
            {/* <Route exact path='/routines' className='nav' render={(routerProps) => <RoutinesList {...routerProps} routines={this.props.routines}/>}Routines/> */}
            </Switch>
        </Fragment>
          );
    }
}

//! redux store
// const mapStateToProps = state => {
//     return(
//         {
//             routines: state.routines
//         }
//     )
// }


// export default connect(mapStateToProps, {fetchRoutines})(Navbar);
 
export default Navbar;