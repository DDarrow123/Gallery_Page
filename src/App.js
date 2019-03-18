import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./assets/stylesheets/App.scss";

import Welcome from "./Welcome";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Welcome />
        <footer>
          <div className="opening">NEXT OPENING - MAY 2019</div>
        </footer>
      </div>
    );
  }
}

export default App;
