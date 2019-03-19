import React, { Component } from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  NavLink,
  withRouter
} from "react-router-dom";
import art_image from "./assets/images/art_image.jpg";
import next_arrow from "./assets/images/next_arrow.svg";
import Collection from "./Collection";
import Welcome from "./Welcome";

class MiddleSection extends Component {
  renderRedirect = () => {
    if (this.props.rendered !== true) {
      this.props.history.push("/collection");
      console.log("hello!");
    }
  };

  renderElements = () => {
    this.props.toggleRendered();
    this.renderRedirect();
  };

  renderMain = () => {
    return (
      <div className="middle-section">
        <div className="middle-title">
          <h1 className="middle-title__show">
            Abstract <br /> <span>Direction</span>
          </h1>
          <div className="middle-title__link">
            ENTER COLLECTION
            <img src={next_arrow} onClick={this.renderElements} />
          </div>
        </div>
        <div className="middle-image">
          <img src={art_image} />
        </div>
        <div className="middle-description">
          <h5 className="middle-description__heading">YEAR</h5>
          <h5 className="middle-description__subheading">2019</h5>
          <h5 className="middle-description__heading">COLLECTION</h5>
          <h5 className="middle-description__subheading">15 PIECES</h5>
          <h5 className="middle-description__heading">ARTIST</h5>
          <h5 className="middle-description__subheading">ANDREW HOLMQUIST</h5>
        </div>
        <footer>
          <div className="opening">NEXT OPENING - MAY 2019</div>
        </footer>
      </div>
    );
  };
  render() {
    return <>{!this.props.rendered ? this.renderMain() : <Collection />}</>;
  }
}

export default withRouter(MiddleSection);
