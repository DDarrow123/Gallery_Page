import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import art_image from "./assets/images/art_image.jpg";
import next_arrow from "./assets/images/next_arrow.svg";

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
          <div className="middle-title">
            <h1 className="middle-title__show">
              Abstract <br /> <span>Direction</span>
            </h1>
          </div>
          <div className="middle-title__link">
            ENTER COLLECTION
            <img
              className="arrow-color"
              src={next_arrow}
              onClick={this.renderCollection}
            />
          </div>
          <div className="middle-image">
            <img src={art_image} />
          </div>
          <div className="middle-description">
            <h5 className="middle-description__heading">YEAR</h5>
            <h5 className="middle-description__subheading">2019</h5>
            <h5 className="middle-description__heading">COLLECTION</h5>
            <h5 className="middle-description__subheading">15 PIECES</h5>
            <h5 className="middle-description__heading">ARTIST</h5>
            <h5 className="middle-description__subheading">ANDREW HOLMQUIST</h5>
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

// <img
//   className="arrow-color"
//   src={next_arrow}
//   onClick={this.renderCollection}
// />

// <svg
//   onClick={this.renderCollection}
//   className="arrow-color"
//   width="514px"
//   height="535px"
//   viewBox="0 0 514 535"
//   version="1.1"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <defs />
//   <g
//     id="Page-1"
//     stroke="none"
//     strokeWidth="1"
//     fill="none"
//     fillRule="evenodd"
//   >
//     <g
//       id="noun_next-arrow_1096245"
//       transform="translate(1.000000, 1.000000)"
//     >
//       <g id="Group" stroke="#000000" strokeWidth="0.1" />
//       <g
//         id="Group"
//         transform="translate(6.000000, 6.000000)"
//         fillRule="nonzero"
//       >
//         <path
//           d="M73.2,426.8 C26,379.6 0,316.8 0,250 C0,183.2 26,120.4 73.2,73.2 C120.4,26 183.2,0 250,0 C316.8,0 379.6,26 426.8,73.2 C474,120.4 500,183.2 500,250 C500,316.8 474,379.6 426.8,426.8 C379.6,474 316.8,500 250,500 C183.2,500 120.4,474 73.2,426.8 Z M10,250 C10,382.3 117.7,490 250,490 C382.3,490 490,382.3 490,250 C490,117.7 382.3,10 250,10 C117.7,10 10,117.7 10,250 Z"
//           id="Shape"
//           fill="#F0F0F0"
//         />
//         <g
//           transform="translate(104.000000, 180.000000)"
//           fill="#BEBEBF"
//         >
//           <polygon
//             id="Shape"
//             points="222.8 131.9 284.7 70 222.8 8.1 230.8 0.2 300.5 70 230.8 139.8"
//           />
//           <rect
//             id="Rectangle-path"
//             x="0.6"
//             y="64.4"
//             width="286.3"
//             height="11.2"
//           />
//         </g>
//       </g>
//     </g>
//   </g>
// </svg>
