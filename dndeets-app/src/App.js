import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Components/Input.js';
import blankSheet from './blankRecord.js';
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

      var CHARACTER_INFO = [];

      var keylen = Object.keys(blankSheet.info).length;

      for (var i = 0; i < keylen; i++) {

        var keyString = Object.keys(blankSheet.info)[i];
        var UniqueKey1 = (i*2)+1;//odd
        var UniqueKey2 = (i*2);//even
        var value = blankSheet.info[keyString];
        var type = typeof(value);

        //I would probably push this down to another container so they would format nicely, and the container type would create them nicer.
        CHARACTER_INFO.push(<CharacterInfo callback={this.callback.bind(this)} text={keyString} value={value} type={type} key={i} keys={[UniqueKey1,UniqueKey2]}/>)

      }


    return (
      <div className="App">

        <div className="top">
            {CHARACTER_INFO}
        </div>

      </div>
    );
  }
}

export default App;
