import React, { Component } from "react";
import { VelocityTransitionGroup } from "velocity-animate";
import clock_icon from "../assets/images/clock_icon.svg";
import phone_icon from "../assets/images/phone_icon.svg";
import mail_icon from "../assets/images/mail_icon.svg";
import paris_gallery from "../assets/images/paris_gallery.jpg";
//src: https://www.maximhome.fr/50/appart-raspail

class PrDropdown extends Component {
  render() {
    return (
      <div className="panel">
        <div>
          <img
            className="dropdown-img"
            src={paris_gallery}
            alt="Chelsea New York Image"
          />
        </div>
        <hr className="panel__hr" />
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
              <div className="status">CLOSED</div>
            </div>
            <div className="hour-item">
              <div className="weekday">Wednesday</div>{" "}
              <div className="status">10 AM-5 PM</div>
            </div>
            <div className="hour-item">
              <div className="weekday">Thursday</div>{" "}
              <div className="status">10 AM-5 PM</div>
            </div>
            <div className="hour-item">
              <div className="weekday">Friday</div>{" "}
              <div className="status">10 AM-5 PM</div>
            </div>
            <div className="hour-item">
              <div className="weekday">Saturday</div>{" "}
              <div className="status">10 AM-5 PM</div>
            </div>
          </ul>
        </div>
        <hr className="panel__hr" />
        <div className="panel__contact-container">
          <h3>Contact</h3>
          <div className="contact-title">
            <img className="phone_icon" src={phone_icon} />
            <h5>+33 01-00-00-00-00</h5>
          </div>
          <hr className="hr-divider" />
          <div className="mail">
            <img className="mail_icon" src={mail_icon} />
            <h5>paris@gallerypr.com</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default PrDropdown;
