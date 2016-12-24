import React, { Component } from 'react';
import './App.css';

/**
  * Label compontent which will serve as any text on the page.
  * i.g if an input field needs text below or above ... use this label with the Input react class.
  * Use with : Input.js, Container.js
  */

class Label extends Component {

  propTypes = {
    Text: React.PropTypes.string,
  };

  render() {
    return (
      <div>
      {this.props.Text ? <span>{this.props.Text}</span> : null}
      </div>
    );
  }
}

export default Label;
