import React, { Component } from "react"; //imrc short

// cc
// props is read only and get from the other, state is local
class Counter extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    //decide whether we should update from the server
  }

  componentWillUnmount() {
    //when delete a counter, the whole App would be rerendered, call this before remove the counter
    //do some cleaning process
    console.log("unmounted");
  }

  render() {
    console.log("Counter rendered");
    return (
      <div className="row">
        <div className="col-2">
          <span style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  renderTages() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

//<img src={this.state.imageUrl}></img>
/*
        <div>
          {this.state.tags.length === 0 && "Please create a new tag!"}
          {this.renderTages()}
        </div>


        imageUrl: "https://picsum.photos/200",
*/
