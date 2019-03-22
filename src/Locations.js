import React, { Component } from "react";
import plus_arrow_icon from "./assets/images/plus_arrow_icon.svg";
import Dropdown from "./Dropdown";
import { TransitionGroup } from "react-transition-group";
import { VelocityComponent, VelocityTransitionGroup } from "velocity-react";

class Locations extends Component {
  state = {
    visible: false
  };

  detailDropdown = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    return (
      <div>
        <div className="location-container">
          <div className="location-container__container-img">
            <img
              className="location-container__image"
              onClick={this.detailDropdown}
              src={plus_arrow_icon}
            />
          </div>
          <div className="location-container__address">
            <h1> New York</h1>
            <h3 className="detail">34 East 69th Street</h3>
            <h3 className="detail">New York</h3>
          </div>
          <div>
            <h4 className="location-container__hours">Open 10am-6pm</h4>
            <hr />
            <VelocityTransitionGroup
              enter={{ animation: "slideDown" }}
              leave={{ animation: "slideUp" }}
            >
              {this.state.visible ? <Dropdown /> : null}
            </VelocityTransitionGroup>
          </div>
        </div>
        <div className="location-container">
          <div className="location-container__container-img">
            <img className="location-container__image" src={plus_arrow_icon} />
          </div>
          <div className="location-container__address">
            <h1>London</h1>
            <h3>24 Grafton Street</h3>
            <h3>London</h3>
          </div>
          <div>
            <h4 className="location-container__hours">Open 10am-6pm</h4>
            <hr />
          </div>
        </div>
        <div className="location-container">
          <div className="location-container__container-img">
            <img className="location-container__image" src={plus_arrow_icon} />
          </div>
          <div className="location-container__address">
            <h1>Paris</h1>
            <h3>261, Boulevard Raspail</h3>
            <h3>Paris</h3>
          </div>
          <div>
            <h4 className="location-container__hours">Open 10am-6pm</h4>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default Locations;
