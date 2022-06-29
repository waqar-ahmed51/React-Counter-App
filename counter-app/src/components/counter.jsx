import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCounter()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className={"btn btn-secondary btn-lg"}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-lg m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClass() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning m-2" : "primary m-2";
    return classes;
  }

  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
