import React, { Component } from "react";
import FormSearch from "../formsearch";
import NavBarAdmin from "./navbaradmin";
import Allcomponents from "../allcomponents";
import { Button } from "react-bootstrap";
import Counter from "../counter";

//import "./App.css";

class Admin extends Component {
  render() {
    return (
      <div>
        <NavBarAdmin />
        <h1>Maps should be here </h1>
      </div>
    );
  }
}

export default Admin;
