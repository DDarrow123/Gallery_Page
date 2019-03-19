import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch,
  Redirect
} from "react-router-dom";

class Collection extends Component {
  render() {
    return (
      <div className="background">
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

export default withRouter(Collection);
