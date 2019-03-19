import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./assets/stylesheets/App.scss";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch
} from "react-router-dom";
import Welcome from "./Welcome";
import MiddleSection from "./MiddleSection";
import NavBar from "./NavBar";
import Collection from "./Collection";
import Locations from "./Locations";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <NavBar />
          </header>
          <div>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/collection" component={Collection} />
              <Route path="/middle" component={MiddleSection} />
              <Route path="/locations" component={Locations} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
