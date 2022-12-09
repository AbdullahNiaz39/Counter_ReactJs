import React, { Component } from "react";
import Counter from "./counter";
///composing a component
class Counters extends Component {
  render() {
    /// Destructing object/props
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-4">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
