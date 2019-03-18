import React from "react";

const BurgerMenu = ({ close }) => {
  console.log(close);
  return (
    <div className="menu">
      <ul>
        <li onClick={close}>Home</li>
        <li onClick={close}>Locations</li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
