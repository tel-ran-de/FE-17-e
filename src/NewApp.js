import React from "react";
import Li from "./Li";
import logo from "./logo.svg";

const persons = [
  "Anastasia",
  "Vladimir",
  "Anna",
  "Dmitriy",
  "Daulet",
  "Mariya",
  "Alexey",
  "Saida",
];

export default class NewApp extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Group G17-e - The best of the World groups!!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Hooks
        </a>

        <ul>
          { persons.map(p => (<Li key={p} name={p} />)) }
        </ul>
      </header>
    );
  }
}
