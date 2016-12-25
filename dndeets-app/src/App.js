import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Components/Input.js';
import './stylesheet.css';

class App extends Component {


  //States are used to 'reRender the dom'
  constructor(props) {
    super(props);
    this.state = {
      currentInput: "none"
    };
  }


  //This is a callback function.
  callback(e){
    this.setState({currentInput:e});
    return;
  }

  //We will have The main components in here
  //The main components will contain sub components,
  //the main components should call up to the top to save everything. and change the main state.
 
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h2>Current Input {this.state.currentInput}</h2>
          {/* This is where im setting the state. */}
          {/* Also this is how you write comments in the render funciton i know its kinda garbage. */}

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to meme.
        </p>
        <div id="info"></div>
        {/* If you chage state you need to bind it to this instance, it should make sense why you need to bind it to this object's state */}        <Input callback={this.callback.bind(this)} />
        <Input callback={this.callback.bind(this)} />
      </div>

    );
  }
}

export default App;
