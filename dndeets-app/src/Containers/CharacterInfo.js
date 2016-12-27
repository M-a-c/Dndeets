import React, { Component } from 'react';

import '../App.css';
import Container from './Container.js';
import Input from '../Components/Input.js';
import Label from '../Components/Label.js';

/**
  * Label compontent which will serve as any text on the page.
  * i.g if an input field needs text below or above ... use this label with the Input react class.
  * Use with : Input.js, Container.js
  */

/**
  * Creates the container for character info elements
  */

class CharacterInfo extends Container {

  static propTypes = {
    keys: React.PropTypes.array.isRequired,
    text: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    value: React.PropTypes.any.isRequired,
    callback: React.PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="largeLine left">
        <Input cssClasses="left" callback={this.props.callback} type={this.props.type} value={this.props.value} key={this.props.keys[0]}></Input>
        <Label Text={this.props.text} cssClasses="left" key={this.props.keys[1]}></Label>
      </div>
    );
  }
}

export default CharacterInfo;
