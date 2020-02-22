import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class FormUserDetails extends Component {
  render() {
    //pulling values from the props in continue
    //doing this so you can use values as a variable
    const { values, handleChange } = this.props;
    return (
      <main role="main" className="container align-content-center flex-wrap">
        <div>
          <MuiThemeProvider>
            <React.Fragment>
              <div style={style}>
                <TextField
                  hintText="Enter Your First Name"
                  floatingLabelText="First Name"
                  //How react works, everytime the textfield changes
                  //everytime we type in it, it will fire off an event
                  //of onChange.....You will have firstName in brackets coz
                  //handleChange takes in an input
                  onChange={handleChange("firstName")}
                  defaultValue={values.firstName}
                />
              </div>

              <div style={style}>
                <TextField
                  hintText="Enter Your Last Name"
                  floatingLabelText="Last Name"
                  //How react works, everytime the textfield changes
                  //everytime we type in it, it will fire off an event
                  //of onChange.....You will have firstName in brackets coz
                  //handleChange takes in an input
                  onChange={handleChange("lastName")}
                  defaultValue={values.lastName}
                />
              </div>

              <div style={style}>
                <TextField
                  hintText="Enter Your Email"
                  floatingLabelText="Email"
                  //How react works, everytime the textfield changes
                  //everytime we type in it, it will fire off an event
                  //of onChange.....You will have firstName in brackets coz
                  //handleChange takes in an input
                  onChange={handleChange("email")}
                  defaultValue={values.email}
                />
              </div>
            </React.Fragment>
          </MuiThemeProvider>
        </div>
      </main>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default FormUserDetails;
