import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch,
  Redirect
} from "react-router-dom";
import {
  VelocityComponent,
  VelocityTransitionGroup,
  Velocity
} from "velocity-react";
import andrew_1 from "./assets/images/andrew_1.png";
import andrew_2 from "./assets/images/andrew_2.png";
import andrew_3 from "./assets/images/andrew_3.png";
import andrew_4 from "./assets/images/andrew_4.png";

class Collection extends Component {
  state = {
    visible: false
  };

  componentDidMount() {
    this.toggleVisibility();
  }

  toggleVisibility = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  // getAnimation = () => {
  //   "transition.slideDownIn";
  // };

  render() {
    return (
      <div className="work-container">
        <h1>ANDREW HOLMQUIST</h1>
        <div className="work-container__image-container">
          <VelocityTransitionGroup
            enter={{
              animation: "transition.slideDownBigIn"
            }}
          >
            {this.state.visible ? (
              <img src={andrew_1} alt="Andrew Work - Aphotic Zone Image" />
            ) : null}
          </VelocityTransitionGroup>
          <div className="work-description">
            <hr className="work-divider" />
            <div className="filler">
              <h3>Aphotic Zone</h3>
              <h5>
                Oil on canvas <br /> <span>60 x 50 in</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="work-container__image-container">
          <VelocityTransitionGroup
            enter={{ animation: "transition.slideDownBigIn" }}
          >
            {this.state.visible ? (
              <img src={andrew_2} alt="Andrew Work - Succulence Image" />
            ) : null}
          </VelocityTransitionGroup>
          <div className="work-description-2">
            <hr className="work-divider-2" />
            <div className="filler">
              <h3>Succulence</h3>
              <h5>
                Oil and acrylic on canvas <br /> <span>60 x 50 in</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="work-container__image-container">
          <VelocityTransitionGroup
            enter={{ animation: "transition.slideDownBigIn" }}
          >
            {this.state.visible ? (
              <img
                className="heaven_img"
                src={andrew_3}
                alt="Andrew Work - Heaven Image"
              />
            ) : null}
          </VelocityTransitionGroup>
          <div className="work-description-3">
            <hr className="work-divider-3" />
            <div className="filler-3">
              <h3>Heaven</h3>
              <h5>
                Oil and acrylic on canvas <br />{" "}
                <span>144 x 84 in, diptych</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="work-container__image-container">
          <VelocityTransitionGroup
            enter={{ animation: "transition.slideDownBigIn" }}
          >
            {this.state.visible ? (
              <img src={andrew_4} alt="Andrew Work - Deep End Image" />
            ) : null}
          </VelocityTransitionGroup>
          <div className="work-description-4">
            <hr className="work-divider-4" />
            <div className="filler">
              <h3>Deep End</h3>
              <h5>
                Oil and acrylic on canvas <br />
                <span>84 x 72 in</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Collection);
