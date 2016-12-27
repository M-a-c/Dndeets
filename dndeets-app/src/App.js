import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Components/Input.js';
// import Label from './Components/Label.js';
// import blankSheet from './blankRecord.js';
import CharacterInfo from './Containers/CharacterInfo.js';
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

      // var inputs = [];
      // console.log(Object.keys(blankSheet.info).length);//This is how many keys there are.
      //
      // var keylen = Object.keys(blankSheet.info).length;
      //
      // for (var i = 0; i < keylen; i++) {
      //
      //   var keyString = Object.keys(blankSheet.info)[i];
      //   var UniqueKey1 = (i*2)+1;//odd
      //   var UniqueKey2 = (i*2);//even
      //   var value = blankSheet.info[keyString];
      //   var type = typeof(value);
      //
      //   //I would probably push this down to another container so they would format nicely, and the container type would create them nicer.
      //   inputs.push(<Label Text={keyString} key={UniqueKey1} />);
      //   inputs.push(<Input callback={this.callback.bind(this)} value={value} type={type} key={UniqueKey2} />);
      //
      // }

    var CHARACTER_INFO = [];
    CHARACTER_INFO.push(<CharacterInfo callback={this.callback.bind(this)} text="dog" value="house" type="string" key="1"/>)

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

        {CHARACTER_INFO}

      </div>
    );
  }
}

export default App;
