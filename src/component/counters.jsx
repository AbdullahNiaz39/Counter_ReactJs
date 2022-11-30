import React, { Component } from "react";
import Counter from "./counter";
///composing a component
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  // Raise And handle
  handleDelete = (counterId) => {
    console.log(counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);

    this.setState({ counters: counters });
  };
  // HandleRest
  handleReset = () => {
    const counterReset = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState(counterReset);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary m-4">
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={() => this.handleDelete(counter.id)}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
