import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const firstReducer = (state = 0, action) => {
  console.log('first reducer state', state);
  if (action.type === 'BUTTON WON') {
    console.log(`hey y'all, I'm a reducer`, action);
    return state + 1
  }
  return state;
}

const secondReducer = (state = 100, action) => {
  console.log('second reducer state', state);
  if (action.type === 'BUTTON TOO') {
    console.log(`hey y'all, I'm another reducer`, action);
    return state - 1;
  }
  return state;
}

const elementListReducer = (state = [], action) => {
  if(action.type === 'ADD_ELEMENT'){
    console.log(action.payload);
    return action.payload
  }
  return state;
}

const store = createStore(
  //this is reducer
  combineReducers({ //smashes reducers together
    firstReducer, 
    secondReducer,
    elementListReducer
  })
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
