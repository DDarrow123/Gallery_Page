import React, { Component } from "react";
import { VelocityTransitionGroup } from "velocity-animate";

class Dropdown extends Component {
  // componentWillEnter = cb => {
  //   const element = this.container.getDOMNode();
  //   Velocity(element, "slideDown", { duration: 300 }).then(cb);
  // };

  // componentWillLeave = cb => {
  //   const element = this.container.getDOMNode();
  //   Velocity(element, "slideDown", { duration: 300 }).then(cb);
  // };

  // setContainer = c => {
  //   this.container = c;
  // };

  render() {
    return (
      <div className="panel">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
    );
  }
}

export default Dropdown;
