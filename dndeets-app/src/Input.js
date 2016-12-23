import React, { Component } from 'react';
import './App.css';
//Im going to work on this but here is a base.

class Input extends Component {
  
  //BTW if you want to require a prop to have something like for construciton you can just put
  // .isRequired after the PropTypes.XXXX.isRequired
  // That will force you to have to add the prop type before the object will be created


  //Types are
  // React.PropTypes.array < in certain cases this can also be used for json
  // React.PropTypes.bool
  // React.PropTypes.func
  // React.PropTypes.number
  // React.PropTypes.object < use this for Json
  // React.PropTypes.string
  // React.PropTypes.symbol
  // React.PropTypes.any  < this one is dangerious but is kinda catch all.

  // Json can get annoying with arrays required etc http://stackoverflow.com/questions/32325912/react-proptype-array-with-shape 


  propTypes = {
    Name: React.PropTypes.string,
  };


  render() {
    return (
      <div>
      {this.props.Name ? <span>{this.props.Name}</span> : null}
      <input></input>
      </div>
    );
  }
}

export default Input;