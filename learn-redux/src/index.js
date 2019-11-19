import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

/**
 * STORE
 * 
 * Store is a globalized state, holds all data / state for your app
 * 
 */


/**
 * ACTION
 * 
 * Action describes what you are going to do to
 * 
 * Action is a function that returns an object
 */

const increment = () => {
  return {
    type: 'INCREMENT' //name of the action
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT' //name of the action
  }
}

/**
 * REDUCER
 * 
 * Reducer describes how actions transform the current state to the next state
*/

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

//Display it in the console
store.subscribe(() => console.log(store.getState()));

/**
  * DISPATCH
  * 
  * Dispatch executes the action to the reducer
*/
store.dispatch(increment());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
