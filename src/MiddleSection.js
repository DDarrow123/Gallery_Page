import React, { Component } from "react";
import art_image from "./assets/images/art_image.jpg";

class MiddleSection extends Component {
  render() {
    return (
      <div className="navbar">
        <div>
          <h1>Abstract Vibes</h1>
          <img src={art_image} />
          <h5>Enter Collection</h5>
        </div>
        <div>
          <h5>YEAR</h5>
          <h5>2019</h5>
          <h5>COLLECTION</h5>
          <h5>15 PIECES</h5>
          <h5>ARTIST</h5>
          <h5>ANDREW HOLMQUIST</h5>
        </div>
      </div>
    );
  }
}

export default MiddleSection;
