import React, { Component } from "react";
import { VelocityTransitionGroup } from "velocity-animate";
import clock_icon from "./assets/images/clock_icon.svg";
import phone_icon from "./assets/images/phone_icon.svg";
import mail_icon from "./assets/images/mail_icon.svg";

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
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <hr />
        <div className="panel__hours-container">
          <div className="hour-title">
            <h3>Hours</h3>
            <img className="clock_icon" src={clock_icon} />
          </div>
          <ul className="hour-list">
            <div className="hour-item">
              <div className="weekday">Sunday</div>{" "}
              <div className="status">CLOSED</div>
            </div>
            <div className="hour-item">
              <div className="weekday">Monday</div>{" "}
              <div className="status">CLOSED</div>
            </div>
            <div className="hour-item">
              <div className="weekday">Tuesday</div>{" "}
              <div className="status">10 AM-6 PM</div>
            </div>
            <div className="hour-item">
              <div className="weekday">Wednesday</div>{" "}
              <div className="status">10 AM-6 PM</div>
            </div>
            <div className="hour-item">
              <div className="weekday">Thursday</div>{" "}
              <div className="status">10 AM-6 PM</div>
            </div>
            <div className="hour-item">
              <div className="weekday">Friday</div>{" "}
              <div className="status">10 AM-6 PM</div>
            </div>
            <div className="hour-item">
              <div className="weekday">Saturday</div>{" "}
              <div className="status">10 AM-6 PM</div>
            </div>
          </ul>
        </div>
        <hr />
        <div className="panel__contact-container">
          <h3>Contact</h3>
          <div className="contact-title">
            <img className="phone_icon" src={phone_icon} />
            <h5>+1 000-000-0000</h5>
          </div>
          <hr />
          <div className="mail">
            <img className="mail_icon" src={mail_icon} />
            <h5>newyork@gallerynyc.com</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
