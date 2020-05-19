import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
    ],
  };

  handleDelete = (deleteId) => {
    //console.log("Delete detected");
    const new_counters = this.state.counters.filter(
      (counter) => counter.id !== deleteId
    );
    this.setState({ counters: new_counters });
  };

  handleIncrement = (counter) => {
    //console.log(counter);
    const new_counters = [...this.state.counters];
    const index = new_counters.indexOf(counter);
    //new_counters[index] = { ...counter };
    new_counters[index].value++;
    this.setState({ counters: new_counters });
  };

  reset = () => {
    const new_counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: new_counters });
  };

  render() {
    //console.log(this.state.counters.length);
    return (
      <div>
        <button onClick={this.reset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>

        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
