import React, { Component } from 'react';
import {TodoForm, TodoList} from './components/todo';
import {addTodo, generateId, findById, toggleTodo, updateTodo} from './lib/todoHelpers';
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

  handleToggle(id) {
    const todo = findById(id, this.state.todos);
    const toggled = toggleTodo(todo);
    const updatedTodos = updateTodo(this.state.todos, toggled);
    this.setState({
      todos: updatedTodos
    });
  }

  handleInputChange(evt) {
    this.setState({
      currentTodo: evt.target.value
    });
  }

  handleEmptySubmit(evt) {
    evt.preventDefault();
    this.setState({
      errorMessage: 'Please enter some text in your todo'
    });
  }

  handleSubmit(evt) {
    const newId = generateId();
    const newTodo = { id: newId, name: this.state.currentTodo, isComplete: false };

    evt.preventDefault();
    this.setState({
      todos: addTodo(this.state.todos, newTodo),
      currentTodo: '',
      errorMessage: ''
    });
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          { this.state.errorMessage && <span className="error">{ this.state.errorMessage }</span> }
          <TodoForm
            handleInputChange={this.handleInputChange.bind(this)}
            currentTodo={ this.state.currentTodo }
            handleSubmit={ submitHandler.bind(this) } />
        </div>
        <TodoList
          handleToggle={ this.handleToggle.bind(this) }
          todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
