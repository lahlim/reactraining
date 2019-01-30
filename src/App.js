import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Vie roskat',
                completed: false
            },
            {
                id: 2,
                title: 'Opettele reaktia',
                completed: false
            },
            {
                id: 3,
                title: 'Osaa reaktia!',
                completed: false
            },
        ]
    }

    // togleaa valmiiksi tai ei valmiiksi
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }) });
    }


  render() {
    return (
      <div className="App">
       
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
