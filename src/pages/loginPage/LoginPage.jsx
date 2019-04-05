import React, { Component } from 'react';

// Classes
import LineForm from '../../components/LineForm'
import Button from '../../components/Button'
import './loginPage.scss'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className='loginPage h-100 d-flex'>
        <div className='content mx-auto my-auto'>
          <div className='container'>
            <form>
              <LineForm inputID='login-user' inputType='text' labelText='User'/>
              <LineForm inputID='password-user' inputType='password' labelText='Password'/>
              <Button customClass='login-button' buttonType='submit' buttonClass='btn-primary' buttonText='Sign in'/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
 
export default LoginPage;