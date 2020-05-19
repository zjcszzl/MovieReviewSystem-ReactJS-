import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Counter from "./components/counter";

class App extends Component {
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

  //Constructor
  constructor(props) {
    super(props);
    console.log("App constructor");
    //this.state = this.props.something
  }

  //Compnent did mount
  componentDidMount() {
    // ajax call
    //this.setState({})
    console.log("App - Mounted");
  }

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

  handleDecrement = (counter) => {
    const new_counters = [...this.state.counters];
    const index = new_counters.indexOf(counter);
    new_counters[index].value--;
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
    console.log("App rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.reset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
//<Movies />
