import React, { Component } from "react";
import DispatchNavbar from "./dispatchnavbar";
import Users from "../users";

class Dispatch extends Component {
  render() {
    return (
      <div>
        <DispatchNavbar />
        <Users />
      </div>
    );
  }
}

export default Dispatch;
