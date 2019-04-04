import React, { Component } from 'react';
import './navbar.scss';

/**
 * 
 */
class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className=''>
        <a className='' href=''>{this.props.name}</a>
        <input className='' type="text" placeholder={props.placeHolder} aria-label="Search"/>
        <a className='' href=''>Sign out</a>
      </nav>
    );
  }
}
export default NavBar;