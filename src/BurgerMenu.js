import React from "react";

const BurgerMenu = ({ close }) => {
  return (
    <div className="menu">
      <ul>
        <li onClick={close}>Home</li>
        <li onClick={close}>Getting Started</li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
