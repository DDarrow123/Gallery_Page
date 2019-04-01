import React, { Component } from "react";
// import { TransitionGroup } from "react-transition-group";
import { VelocityComponent, VelocityTransitionGroup } from "velocity-react";
import plus_arrow_icon from "../assets/images/plus_arrow_icon.svg";
import NyDropdown from "../components/NyDropdown";
import LnDropdown from "../components/LnDropdown";
import PrDropdown from "../components/PrDropdown";
import Social from "./Social";

class Locations extends Component {
  state = {
    nyVisible: false,
    lnVisible: false,
    prVisible: false
  };

  //not sure if one function works here...
  // detailDropdown = e => {
  //   this.setState({
  //     [e.target.name]: !e.target.name
  //   });
  // };

  nyDetailDropdown = () => {
    this.setState({
      nyVisible: !this.state.nyVisible
    });
  };

  lnDetailDropdown = () => {
    this.setState({
      lnVisible: !this.state.lnVisible
    });
  };

  prDetailDropdown = () => {
    this.setState({
      prVisible: !this.state.prVisible
    });
  };

  render() {
    return (
      <div>
        <div className="location-container">
          <div className="location-container__container-img">
            <VelocityComponent
              animation={{
                rotateX: this.state.nyVisible ? 200 : 0
              }}
              duration={500}
            >
              <img
                className="plus-image"
                onClick={this.nyDetailDropdown}
                src={plus_arrow_icon}
              />
            </VelocityComponent>

            <VelocityTransitionGroup
              enter={{ animation: "transition.slideDownBigIn" }}
              leave={{ animation: "slideUp" }}
            >
              {this.state.nyVisible ? <Social /> : null}
            </VelocityTransitionGroup>
          </div>

          <div className="location-container__address">
            <h1> New York</h1>
            <h3 className="detail">34 East 69th Street</h3>
            <h3 className="detail">New York</h3>
          </div>
          <div>
            <h4 className="location-container__hours">Open 10am-6pm</h4>
            <hr className="location-container__hr" />
            <VelocityTransitionGroup
              enter={{ animation: "transition.slideDownIn" }}
              leave={{ animation: "slideUp" }}
            >
              {this.state.nyVisible ? <NyDropdown /> : null}
            </VelocityTransitionGroup>
          </div>
        </div>
        <div className="location-container">
          <div className="location-container__container-img">
            <VelocityComponent
              animation={{
                rotateX: this.state.lnVisible ? 200 : 0
              }}
              duration={500}
            >
              <img
                className="plus-image"
                src={plus_arrow_icon}
                onClick={this.lnDetailDropdown}
              />
            </VelocityComponent>
            <VelocityTransitionGroup
              enter={{ animation: "transition.slideDownBigIn" }}
              leave={{ animation: "slideUp" }}
            >
              {this.state.lnVisible ? <Social /> : null}
            </VelocityTransitionGroup>
          </div>
          <div className="location-container__address">
            <h1>London</h1>
            <h3>24 Grafton Street</h3>
            <h3>London</h3>
          </div>
          <div>
            <h4 className="location-container__hours">Open 10am-6pm</h4>
            <hr className="location-container__hr" />
            <VelocityTransitionGroup
              enter={{ animation: "transition.slideDownIn" }}
              leave={{ animation: "slideUp" }}
            >
              {this.state.lnVisible ? <LnDropdown /> : null}
            </VelocityTransitionGroup>
          </div>
        </div>
        <div className="location-container">
          <div className="location-container__container-img">
            <VelocityComponent
              animation={{
                rotateX: this.state.prVisible ? 200 : 0
              }}
              duration={500}
            >
              <img
                className="plus-image"
                src={plus_arrow_icon}
                onClick={this.prDetailDropdown}
              />
            </VelocityComponent>
            <VelocityTransitionGroup
              enter={{ animation: "transition.slideDownBigIn" }}
              leave={{ animation: "slideUp" }}
            >
              {this.state.prVisible ? <Social /> : null}
            </VelocityTransitionGroup>
          </div>
          <div className="location-container__address">
            <h1>Paris</h1>
            <h3>261 Boulevard Raspail</h3>
            <h3>Paris</h3>
          </div>
          <div>
            <h4 className="location-container__hours">Open 10am-6pm</h4>
            <hr className="location-container__hr" />
            <VelocityTransitionGroup
              enter={{ animation: "transition.slideDownIn" }}
              leave={{ animation: "slideUp" }}
            >
              {this.state.prVisible ? <PrDropdown /> : null}
            </VelocityTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default Locations;
