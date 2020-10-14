import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import routineReducer from './reducers/routineReducer'


// compose == chain middleware functions
// let reducer = ''

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancer = compose()

let store = createStore(routineReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
  {/* <React.StrictMode> */}
  <Router>
    <App />
  {/* </React.StrictMode> */}
  </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
