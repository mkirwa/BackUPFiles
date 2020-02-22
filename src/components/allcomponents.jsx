import React, { Component } from "react";
//import the counter component from the folder ./counter
//this component is used by allcomponents
import Counter from "./counter";

class Allcomponents extends Component {
  render() {
    //Destructuring arguments
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      //this div is the wrapper or the container for allcomponents
      //counter -- get each counter and map it to a counter component
      // set the key property to counter.id
      //value and selected will be the properties of that props object
      //key will not be part of that because it is a special attribute
      //for uniquely identify elements
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Allcomponents;
