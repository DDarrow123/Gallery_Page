import React, { Component } from "react";
import { VelocityComponent, VelocityTransitionGroup } from "velocity-react";
import SocialMediaIcons from "./SocialMediaIcons";
import social_btn from "./assets/images/social_btn.svg";

class Social extends Component {
  state = {
    visible: false
  };

  socialDropdown = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    return (
      <div className="social-btn-container">
        <img
          onClick={this.socialDropdown}
          className="social-btn-container__social-img"
          src={social_btn}
          alt="Social Media Button"
        />

        <VelocityTransitionGroup
          enter={{ animation: "slideDown" }}
          leave={{ animation: "slideUp" }}
        >
          {this.state.visible ? <SocialMediaIcons /> : null}
        </VelocityTransitionGroup>
      </div>
    );
  }
}

export default Social;

// <SocialMediaIcons />
