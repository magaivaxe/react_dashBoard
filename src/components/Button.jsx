import React, { Component } from 'react';

/**
 * Create a button 
 * @param customClass - class choose to customize
 * @param buttonType - button attribute type
 * @param buttonClass - class or bootstrap button class
 * @param buttonText - button text
 */
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className={`row ${this.props.customClass}`}>
        <button type={this.props.buttonType} className={`btn mr-auto ml-auto ${this.props.buttonClass}`}>{this.props.buttonText}</button>
      </div>
    );
  }
}
 
export default Button;