import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MiddleSection from "./MiddleSection";

class Welcome extends Component {
  renderCollection = () => {
    this.props.history.push("/collection");
    // console.log("hello!");
  };

  render() {
    return (
      <>
        <MiddleSection />
      </>
    );
  }
}

export default withRouter(Welcome);
