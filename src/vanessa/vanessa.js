import React, { Component } from "react";
import vanessa1 from "../img/vanessa1.PNG";
class Vanessa extends Component {
  render() {
    return (
      <div
        class="center-image"
        style={{ padding: "10px 20px", textAlign: "center", color: "white" }}
      >
        >
        <img src={vanessa1} alt="vanessa" width="50%" height="50%"/>
      </div>
    );
  }
}

export default Vanessa;
