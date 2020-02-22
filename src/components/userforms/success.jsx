import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank Your Submission</h1>
          <p>You will get an email with further instruction</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
