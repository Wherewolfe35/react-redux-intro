import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";



class App extends Component {
  state = {
    element: ''
  }

  handleClick = () => {
    let action = {
      type: 'BUTTON WON',
    }
    this.props.dispatch(action);
  }

  handleClick2 = () => {
    let action = {
      type: 'BUTTON TOO',
    }
    this.props.dispatch(action);
  }

  handleChange = (event) => {
    this.setState({
      element: event.target.value,
    })
  }

  render(){
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <code>{JSON.stringify(this.props.reduxStore)}</code>
      <h1>Redux Intro!</h1>
      <button onClick={this.handleClick}>Button 1</button>
      <button onClick={this.handleClick2}>Button 2</button>
      <input placeholder="text goes here" type="text" onChange={this.handleChange} value={this.state.element}></input>
      <button onClick={() => {if(this.state.element !== ''){this.props.dispatch({type: 'ADD_ELEMENT', payload: this.state.element}); this.setState({element: ''});
      } else {alert('Thou shall not pass an empty string!')}}}>Add Element</button> <br />
      {this.state.element === 'goat' && <img className="goat" src='./goat_small.jpg' alt='' />}
    </div>
  );
  }
}

const putReduxStateOnProps = (reduxStore) => {
  return {
    //puts the store on this.props.reduxStore
    reduxStore
  }
}

//gives us a dispatch() property which tells redux what has just happened
//putReduxStateonProps adds stor object to this.props
export default connect(putReduxStateOnProps)(App);
