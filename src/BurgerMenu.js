import React from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  NavLink,
  withRouter
} from "react-router-dom";

const BurgerMenu = ({ close, ...props }) => {
  console.log(close);

  const renderWelcome = () => {
    props.history.push("/");
    console.log("hello!");
  };

  const renderElements = ({ close }) => {
    // props.onClose();
    props.toggleRendered();
    renderWelcome();
  };

  return (
    <div className="menu">
      <ul>
        <li onClick={renderElements}>Home</li>
        <li onClick={close}>Locations</li>
      </ul>
    </div>
  );
};

export default withRouter(BurgerMenu);
