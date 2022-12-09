import Navbar from "./component/navbar";
import React, { Component } from "react";
import Counters from "./component/counters";
import "./App.css";
import Additions from "./component/Additions";

class App extends Component {
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

  /// HandleIncrement
  handleIncrement = (counter) => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <Navbar
          totalCounter={
            this.state.counters.filter((count) => count.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
          />
          {/* <Additions /> */}
        </main>
      </div>
    );
  }
}

export default App;
