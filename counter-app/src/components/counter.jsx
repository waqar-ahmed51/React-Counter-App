import React, { Component } from "react";

class Counter extends Component {
  handleIncrement = () => {
    console.log("Increment Clicked!", this.state.value);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    // console.log("Props", this.props.id);
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCounter()}</span>
        <button
          onClick={() => this.props.onIncrement()}
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
