import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class FormPersonalDetails extends Component {
  render() {
    const { values, handleChange } = this.props;

    return (
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
              //onChange={this.handleChange("occupation")}
              //defaultValue={values.occupation}
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
              //onChange={this.handleChange("city")}
              //defaultValue={values.city}
            />
          </div>

          <div style={style}>
            <TextField
              hintText="Enter Your Street Address"
              floatingLabelText="Street Address"
              //How react works, everytime the textfield changes
              //everytime we type in it, it will fire off an event
              //of onChange.....You will have firstName in brackets coz
              //handleChange takes in an input
              //onChange={this.handleChange("bio")}
              //defaultValue={values.bio}
            />
          </div>

          <div style={style}>
            <TextField
              hintText="Enter Your Apt Number"
              floatingLabelText="Apt"
              //How react works, everytime the textfield changes
              //everytime we type in it, it will fire off an event
              //of onChange.....You will have firstName in brackets coz
              //handleChange takes in an input
              //onChange={this.handleChange("bio")}
              //defaultValue={values.bio}
            />
          </div>

          <div style={style}>
            <TextField
              hintText="Enter Your City"
              floatingLabelText="City"
              //How react works, everytime the textfield changes
              //everytime we type in it, it will fire off an event
              //of onChange.....You will have firstName in brackets coz
              //handleChange takes in an input
              //onChange={this.handleChange("bio")}
              //defaultValue={values.bio}
            />
          </div>

          <div style={style}>
            <TextField
              hintText="Enter Your State"
              floatingLabelText="State"
              //How react works, everytime the textfield changes
              //everytime we type in it, it will fire off an event
              //of onChange.....You will have firstName in brackets coz
              //handleChange takes in an input
              //onChange={this.handleChange("bio")}
              //defaultValue={values.bio}
            />
          </div>

          <div style={style}>
            <TextField
              hintText="Enter Your Social Security Number"
              floatingLabelText="SSN"
              //How react works, everytime the textfield changes
              //everytime we type in it, it will fire off an event
              //of onChange.....You will have firstName in brackets coz
              //handleChange takes in an input
              //onChange={this.handleChange("bio")}
              //defaultValue={values.bio}
            />
          </div>

          <div style={style}>
            <RaisedButton
              label="Continue"
              primary={true}
              style={styles.button}
              //we put contiue up above and what contiunue does
              //is call the next step of userForm and we do that through
              //props
              onClick={this.continue}
            />
          </div>

          <RaisedButton
            label="Back"
            //makes the button a white
            primary={false}
            style={styles.button}
            //we put contiue up above and what contiunue does
            //is call the next step of userForm and we do that through
            //props
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
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

export default FormPersonalDetails;
