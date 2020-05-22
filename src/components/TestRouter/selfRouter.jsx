import * as React from "react";
import { Component } from "react";
import Bar from "./Bar";
import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./Products";
import Posts from "./Posts";
import Dashboard from "./Dashboard";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import NotFound from "./NotFound";
class SelfRouter extends React.Component {
  //exact  and switch
  render() {
    return (
      <div>
        <Bar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />{" "}
            <Route
              path="/products"
              render={(props) => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts/:year?/:month?" component={Posts} />{" "}
            <Route path="/admin" component={Dashboard} />{" "}
            <Redirect from="/messages" to="/posts" />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />{" "}
            <Redirect to="/not-found" />
          </Switch>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default SelfRouter;
