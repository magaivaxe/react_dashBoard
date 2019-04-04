import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'

// Pages to import


class MainRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Switch>
        <Route key={1} path='/login' exact render={} />
      </Switch> 
    );
  }
}
 
export default MainRouter;