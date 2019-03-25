import React, { Component } from "react";
import { VelocityTransitionGroup } from "velocity-animate";
import insta_icon from "./assets/images/insta_icon.svg";
import twitter_icon from "./assets/images/twitter_icon.svg";
import facebook_icon from "./assets/images/facebook_icon.svg";

class SocialMediaIcons extends Component {
  render() {
    return (
      <div className="social-icon-list">
        <div>
          <img
            className="social-icon-list__twitter-handle"
            src={twitter_icon}
            alt="icon"
          />
        </div>
        <div>
          <img
            className="social-icon-list__fb-handle"
            src={facebook_icon}
            alt="icon"
          />
        </div>
        <div>
          <img
            className="social-icon-list__instagram-handle"
            src={insta_icon}
            alt="Instagram Icon"
          />
        </div>
      </div>
    );
  }
}

export default SocialMediaIcons;
// <img src={null} alt="icon" />
// <img src={null} alt="icon" />
// <img src={null} alt="icon" />
