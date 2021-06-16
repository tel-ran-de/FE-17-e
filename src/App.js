import React, { Fragment, Component } from "react";

import Form from "./components/Form";

class App extends Component {

  constructor(props) {
    super(props)
    this.state={
      title: 'My ToDo List',
      todos: []
    }
  }

  addNewToDo = async (item) => {
    await this.setState(
      {...this.state, 
        todos: [...this.state.todos, {id: Date.now(), title: item, completed: false}]
      }
    )
    console.log( this.state.todos );
  }

  render() {
    return (
      <Fragment>
        <h1 className="text-center mt-3">{this.state.title}</h1>
        <section id="form">
          <Form onAdd={this.addNewToDo} />
        </section>
        <section id="list"></section>
      </Fragment>
    );
  }
}

export default App;
