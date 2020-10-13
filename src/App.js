import React, { Component, Fragment }from 'react';
import './App.css';
// import {connect} from 'react-redux'
// import {fetchRoutines} from './actions/fetchRoutines'
import RoutinesContainer from './containers/RoutinesContainer'
import DrillsContainer from './containers/DrillsContainer'

class App extends Component {
  // state = {  }
componentDidMount() {
  // this.props.fetchRoutines({ type: 'FETCH_ROUTINES', payload: {routine_name: 'name'}})
//   fetch('http://localhost:3000/api/v1/routines',
// { method: 'GET'}
// )
// .then(response => response.json())
// .then(jsonResponse =>
//   console.log('App -> componentDidMount -> jsonResponse', jsonResponse))
}
  // this.props.routines
  // this.props.fetchRoutines

  render() { 
    return (
      <Fragment>
        <div className="App">
        <RoutinesContainer/>
        {/* <br/> */}
        {/* <DrillsContainer/> */}
          {/* { jsonResponse } */}
        </div>

      </Fragment> 
     );
  }
}
//  const mapStateToProps = (state) = {
//    return (
//      routines: state.routines
//    )

//  }
// ! call dispach on the return value of the 2nd argument (null,fetchRoutines) 
// export default connect(null, {fetchRoutines})(App);
export default App;
// export default connect()(App);
// export default connect(mapStateToProps, {fetchRoutines})(App);
// export default connect(mapStateToProps, {fetchRoutines})(App);
// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;
