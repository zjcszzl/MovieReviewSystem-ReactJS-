import * as React from "react";
import { Component } from "react";
import NavBar from "../navbar";
import { Route } from "react-router-dom";
import Products from "./Products";
import Posts from "./Posts";
import Dashboard from "./Dashboard";
import Home from "./Home";
class SelfRouter extends React.Component {
  render() {
    return (
      <div className="content">
        <Route path="/products" components={Products}>
          Products
        </Route>
        <Route path="/posts" components={Posts}>
          Posts
        </Route>
        <Route path="/admin" components={Dashboard}>
          Dashboard
        </Route>
        <Route path="/" components={Home}>
          Home
        </Route>
      </div>
    );
  }
}

export default SelfRouter;
