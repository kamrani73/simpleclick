import React, { Component } from "react";

export default class App extends Component
{
  constructor (props)
  {
    super(props);
    this.state={
      counter:0,
      hasButtonBeenClicked : false
              }
  }
  render =() => 
    <button onClick={this.handclick}
      className={this.props.className}
      disabled={this.props.disabled === true || this.props.disabled === true }>
      {this.props.text} {this.state.counter}
      {this.state.hasButtonBeenClicked && <div>click</div>}
    </button>
    handclick =() =>{
      this.setState ({ counter : this.state.counter +1 },
      ()=> this.setState({hasButtonBeenClicked :this.state.counter>0}));
    } 
}
