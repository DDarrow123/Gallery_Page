import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./assets/stylesheets/App.scss";

import Welcome from "./Welcome";
import NavBar from "./NavBar";
import BurgerIcon from "./BurgerIcon";
import BurgerMenu from "./BurgerMenu";

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={styles}>
            <Popup
              modal
              overlayStyle={{ background: "rgba(255,255,255,0.98" }}
              contentStyle={contentStyle}
              closeOnDocumentClick={false}
              trigger={open => <BurgerIcon open={open} />}
            >
              {" "}
              {close => <BurgerMenu close={close} />}
            </Popup>
          </div>
          <NavBar />
        </header>
        <Welcome />
        <footer>
          <div>NEXT OPENING - MAY 2019</div>
        </footer>
      </div>
    );
  }
}

export default App;
