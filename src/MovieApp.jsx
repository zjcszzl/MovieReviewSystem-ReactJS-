import React, { Component } from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/Movies/customers";
import MovieForm from "./components/Movies/movieForm";
import NotFound from "./components/Movies/notFound";
import Rentals from "./components/Movies/rentals";
import Movies from "./components/movies";
import MovieNav from "./components/moviesNav";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/Movies/registerForm";

class MovieApp extends Component {
  render() {
    return (
      <div>
        <MovieNav />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default MovieApp;
