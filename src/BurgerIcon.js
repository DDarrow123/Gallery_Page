import React, { Component } from "react";
import Popup from "reactjs-popup";
//-- modifiers do alter apprearance of html elements & __ elements don't alter appearance

const BurgerIcon = ({ open, ...props }) => {
  // console.log(props);
  return (
    <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
      {console.log(open)}
      <div className="burger-menu__bar1" key="b1" />

      <div className="burger-menu__bar3" key="b3" />
    </div>
  );
};

export default BurgerIcon;
