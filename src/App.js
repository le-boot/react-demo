import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

class App extends Component {

  state = { 
      toDoList: []
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({ toDoList: [...this.state.toDoList, event.target.task.value] })
  }

  render() {
    return (
      <React.Fragment>
        <ToDoList value={this.state.toDoList}/>
        <div>Congrats! You have nothing to do!</div>
        <ToDoForm name="todo" onSubmit={this.onSubmit}/>
      </React.Fragment>
    );
  }
}

export default App;