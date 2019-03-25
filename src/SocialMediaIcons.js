import React, { Component } from "react";
import { VelocityTransitionGroup } from "velocity-animate";
import insta_icon from "./assets/images/insta_icon.svg";
import twitter_icon from "./assets/images/twitter_icon.svg";
import facebook_icon from "./assets/images/facebook_icon.png";

class SocialMediaIcons extends Component {
  render() {
    return (
      <div className="social-icon-list">
        <div>
          <a className="social-icon-list__social-link" href="#">
            <img className="twitter-handle" src={twitter_icon} alt="icon" />
          </a>
        </div>
        <div>
          <a className="social-icon-list__social-link" href="#">
            <img className="fb-handle" src={facebook_icon} alt="icon" />
          </a>
        </div>
        <div>
          <a className="social-icon-list__social-link" href="#">
            <img
              className="instagram-handle"
              src={insta_icon}
              alt="Instagram Icon"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default SocialMediaIcons;
// <img src={null} alt="icon" />
// <img src={null} alt="icon" />
// <img src={null} alt="icon" />
