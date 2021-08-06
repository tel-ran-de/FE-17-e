import React from 'react'
import {Switch, Route} from 'react-router'
import Home from "./components/Home";
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <div className="w-50 mx-auto mt-5">
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/quiz"><Quiz/></Route>
      </Switch>
    </div>
  );
}

export default App;
