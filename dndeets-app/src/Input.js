import React, { Component } from 'react';
import './App.css';

/**
  * Input compontent which will serve as any input field element
  * i.g if an input field is needed use this component. If text is needed with the input field use Label.js
  * Use with : Label.js, Container.js
  */

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

  // TODO: Leave this as an input component only. Label.js for titles/labels/text etc.. whatever you want to call it.
  static propTypes = {
    callback: React.PropTypes.func.isRequired,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     color: null
  //   };
  // }

  render() {
    return (
      <div>
      <input onChange={(event) => {this.props.callback(event.target.value)}}></input>
      </div>
    );
  }
}

export default Input;
