import React, { Component } from 'react';
import './clock.scss'
/**
 * ---------- To mount a react class and insert into DOM
 * 
 * 1- constructor() 
 * 2- static getDerivedStateFromProps() 
 * 3- render() 
 * 4- componentDidMount() 
 * 
 * ---------- To Updating into DOM 
 * 
 * 1- static getDerivedStateFromProps() 
 * 2- shouldComponentUpdate() 
 * 3- render() 
 * 4- getSnapshotBeforeUpdate() 
 * 5- componentDidUpdate() 
 * 
 * ---------- To remove from the DOM 
 * 
 * 1- componentWillUnmount() 
 * 
 * ---------- To error handling 
 * static getDerivedStateFromError() 
 * componentDidCatch() 
 */

/**
 * Don't call inside constructor:
 * this.setState(), 
 * @param {*} props - passed from by this.props
 */

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
  }

  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({date: new Date()})
  }
  
  render() { 
    return (
      <div className='clock'>
        <span>{this.state.date.toLocaleTimeString()}</span>
      </div>
  )}
}
 
export default Clock;