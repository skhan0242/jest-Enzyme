import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0
    }
  }

  makeIncrement = amount =>() =>{
    this.setState(prevState =>{
      return{
        count : prevState.count + amount
      }
    })
  }

  increment = this.makeIncrement(1);
  decrement = this.makeIncrement(-1);

  // increment = () =>{
  //   this.setState(prevState =>{
  //     return{
  //       count : prevState.count +1
  //     }
  //   })
  // }

  // decrement = () =>{
  //   this.setState(prevState =>{
  //     return{
  //       count: prevState.count-1
  //     }
  //   })
  // }
  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <p>current count {count}</p>
        <button className="incrementBtn" onClick={this.increment}>+++</button>
        <button className="decrementBtn" onClick={this.decrement}>---</button>    
      </div>
    );
  }
}

export default App;
