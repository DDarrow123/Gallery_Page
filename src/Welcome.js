import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch,
  Redirect
} from "react-router-dom";
import MiddleSection from "./MiddleSection";
import NavBar from "./NavBar";
import Collection from "./Collection";

class Welcome extends Component {
  // state = {
  //   rendered: false
  // };
  //
  // toggleRendered = () => {
  //   this.setState({
  //     rendered: !this.state.rendered
  //   });
  // };

  render() {
    return (
      <>
        <MiddleSection
          rendered={this.props.rendered}
          toggleRendered={this.props.toggleRendered}
        />
      </>
    );
  }
}

export default Welcome;
