import React, { Component } from "react";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import BurgerMenu from "./BurgerMenu";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  NavLink,
  withRouter
} from "react-router-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "40px"
};
const contentStyle = {
  background: "rgba(255,255,255,0",
  width: "80%",
  border: "none"
};

class NavBar extends Component {
  renderWelcome = () => {
    if (this.props.rendered !== true) {
      this.props.history.push("/welcome");
      console.log("hello!");
    }
  };

  renderElements = () => {
    this.props.toggleRendered();
    this.renderRedirect();
  };
  render() {
    return (
      <div className="navbar">
        <div style={styles}>
          <Popup
            modal
            overlayStyle={{ background: "rgba(255,255,255,0.98" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} />}
          >
            {close => (
              <BurgerMenu
                close={close}
                rendered={this.props.rendered}
                toggleRendered={this.props.toggleRendered}
              />
            )}
          </Popup>
        </div>
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
