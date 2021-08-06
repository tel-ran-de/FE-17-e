import React from 'react'
import {Link, NavLink, Switch, Route} from "react-router-dom";
import {useSelector} from 'react-redux'
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const App = () => {

    const isAuth = useSelector(state => state.isAuth)

    return (
        <div className="container">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                    <Link to="/signin">Sign In</Link>
                    { isAuth ? <Link to="/hello">toHello</Link> : 'null' }

                </div>
            </nav>
            <Switch>
                <Route exact path="/"><h1>Home</h1></Route>
                <Route path="/signup"><SignUp/></Route>
                <Route path="/signIn"><SignIn/></Route>
                <Route path="/hello"><h1>Hello</h1></Route>

            </Switch>
        </div>
    )
}

export default App