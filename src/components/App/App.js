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
      <h1>Redux Intro!</h1>
      <button onClick={this.handleClick}>Button 1</button>
      <button onClick={this.handleClick2}>Button 2</button>
      <input placeholder="text goes here" type="text" onChange={this.handleChange} value={this.state.element}></input>
      <button onClick={() => {this.props.dispatch({type: 'ADD_ELEMENT', payload: this.state.element}); this.setState({element: ''})
      }}>Add Element</button>
    </div>
  );
  }
}

//gives us a dispatch() property which tells redux what has just happened
export default connect()(App);
