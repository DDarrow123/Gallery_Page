import React, { Component } from "react";
import art_image from "./assets/images/art_image.jpg";
import next_arrow from "./assets/images/next_arrow.svg";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  HashRouter
} from "react-router-dom";
import Collection from "./Collection";

class MiddleSection extends Component {
  render() {
    return (
      <HashRouter>
        <div className="middle-section">
          <div className="middle-title">
            <h1 className="middle-title__show">
              Abstract <br /> <span>Direction</span>
            </h1>
            <div className="middle-title__link">
              ENTER COLLECTION
              <NavLink to="/collection">
                <img src={next_arrow} />
              </NavLink>
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
          <div>
            <Route path="/collection" component={Collection} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default MiddleSection;
