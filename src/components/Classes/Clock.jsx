import React, { Component } from 'react';

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

class Clock extends Component {

  /**
   * Don't call there:
   * this.setState(), 
   * @param {*} props - passed from by this.props
   */
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({date: new Date()})
  }
  
  render() { 
    return (
      <div>
        <h1>Hi man!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
  )}
}
 
export default Clock;