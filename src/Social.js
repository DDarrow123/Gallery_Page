import React, { Component } from "react";
import { VelocityTransitionGroup } from "velocity-animate";
import SocialMediaIcons from "./SocialMediaIcons";
import social_btn from "./assets/images/social_btn.svg";

class Social extends Component {
  render() {
    return (
      <div className="social-btn-container">
        <img
          className="social-btn-container__social-img"
          src={social_btn}
          alt="Social Media Button"
        />
      </div>
    );
  }
}

export default Social;

// <SocialMediaIcons />
