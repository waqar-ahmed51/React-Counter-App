import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0, tags: ["tag1", "tag2", "tag3"] };
  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClass()}>
          {this.formatCounter()}
        </span>
        <button className={"btn btn-secondary btn-lg"}>Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
  getBadgeClass() {
    let classes = "badge badge-";
    classes += this.state.count === 0 ? "warning m-2" : "primary m-2";
    return classes;
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
