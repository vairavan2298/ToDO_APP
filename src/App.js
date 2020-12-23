import Navbar from "./Components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    );
  }
}

export default App;
