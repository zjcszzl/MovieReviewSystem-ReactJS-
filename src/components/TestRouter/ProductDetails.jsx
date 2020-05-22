import React, { Component } from "react";

class ProductDetails extends React.Component {
  handleSave = () => {
    this.props.history.push("/products");
    //replace and push, push store the history, replace would not let them go back again
  };
  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
