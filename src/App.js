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

class App extends Component {
  state = {
    rendered: false
  };

  toggleRendered = () => {
    this.setState({
      rendered: !this.state.rendered
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <NavBar
              rendered={this.state.rendered}
              toggleRendered={this.toggleRendered}
            />
          </header>
          <Welcome
            rendered={this.state.rendered}
            toggleRendered={this.toggleRendered}
          />

          <div>
            <Switch>
              <Route path="/welcome" component={Welcome} />
              <Route path="/middle" component={MiddleSection} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
