import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //Object Destrucing is used to remove this.props repetition.
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-lg m-2">
          Rest
        </button>
        {counters.map((counter) => (
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

export default Counters;
