import React, { Component }from 'react';
import './App.css';
class App extends Component {
  // state = {  }
componentDidMount() {
  fetch('http://localhost:3000/api/v1/routines',
{ method: 'GET'}
)
.then(response => response.json())
.then(jsonResponse =>
  console.log('App -> componentDidMount -> jsonResponse', jsonResponse))
}

  render() { 
    return ( 
        <div className="App">
        <p>
        hi
          {/* { jsonResponse } */}
        </p>
        </div>

     );
  }
}
 
export default App;
// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;
