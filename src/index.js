import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import lager from 'redux-logger';

const firstReducer = (state = 0, action) => {
  // console.log('first reducer state', state);
  if (action.type === 'BUTTON WON') {
    return state + 1
  }
  return state;
}

const secondReducer = (state = 100, action) => {
  if (action.type === 'BUTTON TOO') {
    return state - 1;
  }
  return state;
}

const elementListReducer = (state = [], action) => {
  if(action.type === 'ADD_ELEMENT'){
    return [...state, action.payload]
  }
  return state;
}

const store = createStore(
  //this is reducer
  combineReducers({ //smashes reducers together
    firstReducer, 
    secondReducer,
    elementListReducer
  }),
  applyMiddleware(lager)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
