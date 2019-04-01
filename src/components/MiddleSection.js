import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import art_image from "../assets/images/art_image.jpg";
import next_arrow from "../assets/images/next_arrow.svg";

class MiddleSection extends Component {
  renderCollection = () => {
    this.props.history.push("/collection");
    window.scroll({ top: 10, left: 0, behavior: "smooth" });
    console.log("hello!");
  };

  render() {
    return (
      <>
        <div className="middle-section">
          <div className="middle-section__title">
            <h1 className="exihibit-name">
              Abstract <br /> <span>Direction</span>
            </h1>
          </div>
          <div className="middle-section__exhibit-link">
            ENTER COLLECTION
            <img
              className="arrow-color"
              src={next_arrow}
              onClick={this.renderCollection}
            />
          </div>
          <div className="middle-section__middle-image">
            <img src={art_image} />
          </div>
          <div className="middle-section__middle-description">
            <h5 className="heading">YEAR</h5>
            <h5 className="subheading">2019</h5>
            <h5 className="heading">COLLECTION</h5>
            <h5 className="subheading">15 PIECES</h5>
            <h5 className="heading">ARTIST</h5>
            <h5 className="subheading">ANDREW HOLMQUIST</h5>
          </div>
        </div>
        <footer>
          <div className="opening">NEXT OPENING - MAY 2019</div>
        </footer>
      </>
    );
  }
}

export default withRouter(MiddleSection);
