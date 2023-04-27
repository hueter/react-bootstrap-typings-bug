import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Popover, { PopoverProps } from "react-bootstrap/Popover";

const x: PopoverProps = {
  id: "1",
  content: true,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Popover {...x}>
          <div />
        </Popover>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
