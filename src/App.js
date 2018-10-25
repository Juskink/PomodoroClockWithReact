import React from "react";
import "./App.css";
import Clock from "./component/Clock";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Clock />
      </div>
    );
  }
}

export default App;
