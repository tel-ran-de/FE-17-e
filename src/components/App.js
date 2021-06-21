import React from 'react'
import TodoApp from "./TodoApp"
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'

const App = () => {

    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact={true} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/todo-list">ToDo List</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/hello">Hello World</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/user">User 1</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact={true} to="/user/hello">User hello</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/user/hello/here">User Hello Here</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact={true} path="/">
                    <h1>Home page here</h1>
                </Route>
                <Route path="/todo-list">
                    <TodoApp />
                </Route>
                <Route path="/hello">
                    <h1>Hello World!</h1>
                </Route>
            </Switch>
        </Router>
    )
}

export default App