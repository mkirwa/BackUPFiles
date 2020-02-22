import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { Route, Switch } from "react-router-dom";
import LoginBox from "./components/login/loginbox";
import RegisterBox from "./components/login/registerbox";

import Loads from "./components/loads";
import Users from "./components/users";
import AllDrivers from "./components/alldrivers";
import Allcomponents from "./components/allcomponents";
import FormSearch from "./components/formsearch";
import UserForm from "./components/userforms/userform";
import UsersForm from "./components/userforms/usersform";
import AllAccountants from "./components/allaccountants";

import Accountant from "./components/accountants/accountant";
import LoadsAccountant from "./components/accountants/loadsaccountant";
import AccountantDrivers from "./components/accountants/accountantdrivers";
import AccountantDispatchers from "./components/accountants/accountantdispatchers";

import Admin from "./components/admins/admin";
import NavBar from "./components/admins/navbaradmin";
import AddAdmin from "./components/admins/addadmin";
import AddDriver from "./components/admins/adddriver";
import AddAccountant from "./components/admins/addaccountant";
import AddDispatch from "./components/admins/adddispatch";
import LoadsAdmin from "./components/admins/loadsadmin";
import UsersAdmin from "./components/admins/usersadmin";
import AdminAlldrivers from "./components/admins/adminalldrivers";
import AdminAllAdmins from "./components/admins/adminalladmins";
import AdminAllAccountants from "./components/admins/adminallaccountants";

import DriverPayStubs from "./components/driver/driverpaystubs";
import Card1 from "./components/driver/card1";
import Card2 from "./components/driver/card2";
import DepartureBoL from "./components/driver/departurebol";
import ArrivalBoL from "./components/driver/arrivalbol";
import DriverLoads from "./components/driver/driverloads";
import Drivers from "./components/driver/drivers";

import Dispatch from "./components/dispatchs/dispatch";
import DispatchLoads from "./components/dispatchs/dispatchloads";
import DispatchNavbar from "./components/dispatchs/dispatchnavbar";
import DispatchUsers from "./components/dispatchs/dispatchusers";
import DispatchLoad from "./components/dispatchs/dispatchload";
import Dispatchers from "./components/dispatchers";

import "./App.css";
import AllAdmins from "./components/alladmins";
import AdminAllDispatch from "./components/admins/adminalldispatch";
import LoginPage from "./components/login/loginpage";

class App extends Allcomponents {
  state = {
    //instead of hard coding all the counters in the render method
    //div section,
    //just use an array instead and render them using the map method
    //array will have counter objects
    //add a new property allcomponents
    // Use this to uniquely identify each
    //counter
    allcomponents: [
      //counter objects
      //we use id to uniquely identify each counter
      //value property sets the intial value for each counter
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
    companyName: ""
  };

  submitRegister(e) {}
  submitLogin(e) {}

  //has a method to proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  back = e => {
    //prevent default
    e.preventDefault();
    this.props.prevStep();
  };

  continue = e => {
    //prevent default
    e.preventDefault();
    this.props.nextStep();
  };

  //2nd lifecycle hooks
  //called after the component is rendered into the DOM
  //this is the perfect place to make Ajax calls to get data from the server

  componentDidMount() {
    //ajax call
    console.log("App-Constructor", this.props);
  }

  handleIncrement = counter => {
    //creating a new counters array and giving it
    //to the set state method and have react update
    //the state
    //... this is the spread operator clones
    //this.state.allcomponents
    //with these, you will get a new array of counters
    //the object in the new array(counters) are the same
    //objects we have in allcomponents
    const counters = [...this.state.allcomponents];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ allcomponents: counters });
  };

  handleReset = () => {
    //this.state.allcomponents - this refers to the existing
    //counters
    //we use the map method to get each counter and reset
    //its value to zero and then return it
    //this give you a new array of counters
    //You store them in counters.
    //
    const counters = this.state.allcomponents.map(c => {
      c.value = 0;
      return c;
    });
    //here you call this.setState with this new array
    this.setState({ allcomponents: counters });
  };

  handleDelete = counterId => {
    const counters = this.state.allcomponents.filter(c => c.id !== counterId);
    this.setState({ allcomponents: counters });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChange = input => e => {
    //take whatever the input is
    //set it to whatever the value is
    //we can get that using the event parameter and using target.value
    //be it firstName, lastName, whatever value is entered
    this.setState({ [input]: e.target.value });
  };

  constructor(props) {
    super(props);
    this.setState = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }
  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }
  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  render() {
    //render method
    console.log("App-rendered");
    //const { search } = this.state;

    return (
      <React.Fragment>
        <main className="container">
          <Allcomponents
            counters={this.state.allcomponents}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
        <div className="box-controller">
          <div
            className={
              "controller " +
              (this.setState.isLoginOpen ? "selected-controller" : "")
            }
            onClick={this.showLoginBox.bind(this)}
          >
            Login
          </div>
          <div
            className={
              "controller " +
              (this.setState.isRegisterOpen ? "selected-controller" : "")
            }
            onClick={this.showRegisterBox.bind(this)}
          >
            Register
          </div>
        </div>
        <div className="box-container">
          {this.setState.isLoginOpen && <LoginBox />}
          {this.setState.isRegisterOpen && <RegisterBox />}
        </div>
        <div className="root-container"></div>
        <div className="content">
          <Switch>
            <Route path="/loads" component={Loads} />
            <Route path="/alladmins" component={AllAdmins} />
            <Route path="/navbar" component={NavBar} />
            <Route path="/users" component={Users} />
            <Route path="/dispatchers" component={Dispatchers} />
            <Route path="/formsearch" component={FormSearch} />
            <Route path="/alldrivers" component={AllDrivers} />
            <Route path="/loadsadmin" component={LoadsAdmin} />
            <Route path="/allaccountants" component={AllAccountants} />

            <Route path="/admins/admin" component={Admin} />
            <Route path="/admins/addadmin" component={AddAdmin} />
            <Route path="/admins/addaccountant" component={AddAccountant} />
            <Route path="/admins/adddispatch" component={AddDispatch} />
            <Route path="/admins/adddriver" component={AddDriver} />
            <Route path="/admins/loadsadmin" component={LoadsAdmin} />
            <Route path="/admins/usersadmin" component={UsersAdmin} />
            <Route
              path="/admins/adminallaccountants"
              component={AdminAllAccountants}
            />
            <Route path="/admins/adminalldrivers" component={AdminAlldrivers} />
            <Route path="/admins/adminalladmins" component={AdminAllAdmins} />
            <Route
              path="/admins/adminalldispatch"
              component={AdminAllDispatch}
            />

            <Route path="/accountants/accountant" component={Accountant} />
            <Route
              path="/accountants/loadsaccountant"
              component={LoadsAccountant}
            />
            <Route
              path="/accountants/accountantdrivers"
              component={AccountantDrivers}
            />
            <Route
              path="/accountants/accountantdispatchers"
              component={AccountantDispatchers}
            />

            <Route path="/dispatchs/dispatch" component={Dispatch} />
            <Route
              path="/dispatchs/dispatchnavbar"
              component={DispatchNavbar}
            />
            <Route path="/dispatchs/dispatchusers" component={DispatchUsers} />
            <Route path="/dispatchs/dispatchloads" component={DispatchLoads} />
            <Route path="/dispatchs/dispatchload" component={DispatchLoad} />

            <Route path="/driver/drivers" component={Drivers} />
            <Route path="/driver/driverpaystubs" component={DriverPayStubs} />
            <Route path="/driver/card1" component={Card1} />
            <Route path="/driver/card2" component={Card2} />
            <Route path="/driver/departurebol" component={DepartureBoL} />
            <Route path="/driver/arrivalbol" component={ArrivalBoL} />
            <Route path="/driver/driverloads" component={DriverLoads} />

            <Route path="/login/loginpage" component={LoginPage} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

//<NavBar
// totalCounters={
// this.state.allcomponents.filter(c => c.value > 0).length
// }
///>

//handleChange = input => e => {
//take whatever the input is
//set it to whatever the value is
//we can get that using the event parameter and using target.value
//be it firstName, lastName, whatever value is entered
//this.setState({ [input]: e.target.value });
//};

//showLoginBox() {
//this.setState({isLoginOpen: true, isRegisterOpen: false});
//}

//showRegisterBox() {
//this.setState({isRegisterOpen: true, isLoginOpen: false});
//}
