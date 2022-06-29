import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar bg-info">
          <h1>{this.props.totalCounters}</h1>
        </nav>
      </div>
    );
  }
}

export default Navbar;
