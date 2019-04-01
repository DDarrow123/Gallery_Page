import React from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  NavLink,
  withRouter
} from "react-router-dom";

const BurgerMenu = ({ close, ...props }) => {
  // console.log(close);

  const renderWelcome = () => {
    props.history.push("/");
    console.log("hello!");
  };

  const renderLocation = () => {
    props.history.push("/locations");
  };

  const renderCollection = () => {
    props.history.push("/collection");
  };

  const renderElements = () => {
    renderWelcome();
    close();
  };

  const renderLocationElements = () => {
    renderLocation();
    close();
  };

  const renderCollectionElements = () => {
    renderCollection();
    close();
  };

  return (
    <div className="menu">
      <ul>
        <li onClick={renderElements}>Home</li>
        <li onClick={renderLocationElements}>Locations</li>
        <li onClick={renderCollectionElements}>Exhibitions</li>
      </ul>
    </div>
  );
};

export default withRouter(BurgerMenu);
