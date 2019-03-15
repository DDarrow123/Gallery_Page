import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar__gallery-name">GALLERY.NYC</div>
        <ul className="navbar__gallery-media">
          <a href="#">
            <li className="list-item">IN</li>
          </a>
          <a href="#">
            <li className="list-item">FB</li>
          </a>
          <a href="#">
            <li className="list-item">TW</li>
          </a>
        </ul>
      </div>
    );
  }
}

export default NavBar;
