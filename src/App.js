import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList.jsx";
import {Button, Col, Row } from react-bootstrap;

class App extends Component {
  constructor(props) {
    super(props);

  };
  

  removeTask = () => {
    
  };

  completeTask = () => {

  };


  render() {
    return (
    <div className="App">
      <header className="App-header">
        <p className="App-title">Memory Game</p>
        <p className="App-subtitle">Match Cards To Win</p>
      </header>
        
        <div>
          <div className="section-title">Add Task</div>
          <TodoList />
        </div>
        <div>
          <div className="section-title">My Tasks</div>
          <TodoList />
        </div>
        <div>
          <div className="section-title">Complete Tasks</div>
          
          <button type="button" onClick={this.removeTask}>Remove</button>
          <button type="button" onClick={this.completeTask}>Complete</button>
          <TodoList />

        </div>

        <button type="button" onClick={this.resetGame}>Click Me!</button>
    
    </div>
    )
  }
}

export default App;
