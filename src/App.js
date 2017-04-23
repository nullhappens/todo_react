import React, { Component } from 'react';
import {TodoForm, TodoList} from './components/todo';
import {addTodo, generateId} from './lib/todoHelpers';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: 'Learn JSX', isComplete: false },
        { id: 2, name: 'Learn React', isComplete: false },
        { id: 3, name: 'Learn Flux', isComplete: true },
        { id: 4, name: 'Quit Job', isComplete: false }
      ],
      currentTodo: ''
    };
  }

  handleInputChange(evt) {
    this.setState({
      currentTodo: evt.target.value
    });
  }

  handleSubmit(evt) {
    const newId = generateId();
    const newTodo = { id: newId, name: this.state.currentTodo, isComplete: false };

    evt.preventDefault();
    this.setState({
      todos: addTodo(this.state.todos, newTodo),
      currentTodo: ''
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm handleInputChange={this.handleInputChange.bind(this)}
            currentTodo={this.state.currentTodo}
            handleSubmit={this.handleSubmit.bind(this)} />
        </div>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
