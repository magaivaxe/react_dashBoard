import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'

// Pages to import
import LoginPage from './loginPage/LoginPage'

class MainRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Switch>
        <Route key={1} exact path='/' component={LoginPage} />
      </Switch>
    );
  }
}
 
export default MainRouter;