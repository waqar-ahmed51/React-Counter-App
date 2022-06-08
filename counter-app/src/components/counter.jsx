import React, { Component } from "react";

class Counter extends Component {
  state = { value: this.props.value, tags: ["tag1", "tag2", "tag3", "tag4"] };
  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };

  rednerTags() {
    if (this.state.tags.length === 0) return <p>There are no Tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    console.log("Increment Clicked!", this.state.value);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClass()}>
          {this.formatCounter()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className={"btn btn-secondary btn-lg"}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-lg m-2"
        >
          Delete
        </button>
        {this.state.tags.length === 0 && "Please create the new tag!"}
        {this.rednerTags()}
      </div>
    );
  }
  getBadgeClass() {
    let classes = "badge badge-";
    classes += this.state.value === 0 ? "warning m-2" : "primary m-2";
    return classes;
  }

  formatCounter() {
    const { value: count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
