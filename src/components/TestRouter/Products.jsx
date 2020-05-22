import React, { Component } from "react";
import { Link } from "react-router-dom";

class Products extends React.Component {
  state = {
    product: [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" },
    ],
  };

  handleAddress = (id) => {
    return "/products/" + id;
  };

  render() {
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {this.state.product.map((p) => (
            <li>
              <Link to={this.handleAddress(p.id)}>{p.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
