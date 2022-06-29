
import React, { Component } from "react";
import Counters from './components/counters';
import Navbar from './components/Navbar';
class App extends Component {
state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 1 },
      { id: 4, value: 5 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
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
    return (
      <div>
      <Navbar/>
      <Counters/>
    </div>
    );
  }
}
 
export default App;
