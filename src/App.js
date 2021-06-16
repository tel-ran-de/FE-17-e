import React, { Fragment, Component } from "react";

import Form from "./components/Form";
import TodoList from './components/TodoList.jsx'

class App extends Component {

  constructor(props) {
    super(props)
    this.state={
      title: 'My ToDo List',
      todos: [{id:1, title: 'Hello', completed: false}]
    }
  }

  addNewToDo = (item) => {
    this.setState(
      {...this.state, 
        todos: [...this.state.todos, {id: Date.now(), title: item, completed: false}]
      }
    )
  }

  changeCompleteProp = (id) => {
    const _todos = [...this.state.todos]
    const idx = _todos.findIndex(t=>t.id===id)
    if (idx===-1) return null
    _todos[idx].completed = !_todos[idx].completed
    this.setState({...this.state, todos: _todos})
  }

  deleteItem = (id) => {
    const _todos = [...this.state.todos]
    const idx = _todos.findIndex(t=>t.id===id)
    if (idx===-1) return null
    _todos.splice(idx, 1) 
    this.setState({...this.state, todos: _todos})
  }

  render() {
    return (
      <Fragment>
        <h1 className="text-center mt-3">{this.state.title}</h1>
        <section id="form">
          <Form onAdd={this.addNewToDo} />
        </section>
        <section id="list">
          <TodoList 
            todos={this.state.todos} 
            onComplete={this.changeCompleteProp} 
            onDelete={this.deleteItem}  
          />
        </section>
      </Fragment>
    );
  }
}

export default App;
