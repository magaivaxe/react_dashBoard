import React, { Component } from 'react';

/**
 * Create a form line of label + input
 * @param inputID - input id and name and label for.
 * @param inputType - input type.
 * @param labelText - text to show in label
 */
class LineForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className='form-group row'>
        <label className='col-sm-2 col-form-label' htmlFor={this.props.inputID}>{this.props.labelText}</label>
        <div className='col-sm-10'>
          <input className='form-control' type={this.props.inputType} name={this.props.inputID} id={this.props.inputID}/>
        </div>
      </div>
    );
  }
}

export default LineForm;