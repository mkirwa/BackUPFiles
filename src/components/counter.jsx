import React, { Component } from "react";
//component class has methods that will be inherited in counter class
class Counter extends Component {
  //this component is called after a component is updated
  //this means we have new state or new props
  //this means we can compare this new state with the old state
  //or the new props with the old props and if there's a change, we can make ajax
  //request to get new data from the server
  //if there are no changes, perhaps we don't want to make an additional ajax
  //request this is an optimization technique
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    //console.log("Counter - Unmount");
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm."
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    //You can also return a jsx expression here
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;
