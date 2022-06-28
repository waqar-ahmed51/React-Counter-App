import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counter];
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Handle Delete Called!", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    console.log("Counter Array", this.state.counters);
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-lg m-2"
        >
          Rest
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={() => this.handleDelete(counter.id)}
            OnIncrement={() => this.handleIncrement(counter.id)}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
