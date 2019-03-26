import andrew_1 from "./assets/images/andrew_1.jpg";
import andrew_2 from "./assets/images/andrew_2.jpg";
import andrew_3 from "./assets/images/andrew_3.jpg";
import andrew_4 from "./assets/images/andrew_4.jpg";

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch,
  Redirect
} from "react-router-dom";

class Collection extends Component {
  render() {
    return (
      <div className="work-container">
        <div className="work-container__image-container">
          <div className="work-description">
            <hr className="work-divider" />
            <div className="filler"> Aphotic Zone</div>
          </div>
          <img src={andrew_1} alt="Andrew Work - Aphotic Zone Image" />
        </div>
        <div className="work-container__image-container">
          <div className="work-description-2">
            <hr className="work-divider-2" />
            <div className="filler"> Succulence</div>
          </div>
          <img src={andrew_2} alt="Andrew Work - Succulence Image" />
        </div>
        <div className="work-container__image-container">
          <img
            className="heaven_img"
            src={andrew_3}
            alt="Andrew Work - Heaven Image"
          />
        </div>
        <div className="work-container__image-container">
          <img src={andrew_4} alt="Andrew Work - Deep End Image" />
        </div>
      </div>
    );
  }
}

export default withRouter(Collection);
