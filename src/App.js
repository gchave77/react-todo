import React, { Component } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { v4 as uuid } from "uuid";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Morning stretches",
        completed: false,
      },
      {
        id: uuid(),
        title: "Get ready",
        completed: false,
      },
      {
        id: uuid(),
        title: "Work on TekSystems exercises",
        completed: false,
      },
      {
        id: uuid(),
        title: "Log in to TekSystems Webex lecture",
        completed: false,
      },
      {
        id: uuid(),
        title: "Study TekSystems training videos",
        completed: false,
      },
    ],
  };

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
