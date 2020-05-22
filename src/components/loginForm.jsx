import React, { Component } from "react";
import Input from "../components/input";
import Joi from "joi-browser";
import Form from "../components/form";

class LoginForm extends Form {
  /*
  username = React.createRef();

  componentDidMount() {
    this.username.current.focus();
  }
    */
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="username"
            value={this.state.data.username}
            label="Username"
            onChange={this.handleChange}
            error={this.state.errors.username}
          />
          <Input
            type="password"
            name="password"
            value={this.state.data.password}
            label="Password"
            onChange={this.handleChange}
            error={this.state.errors.password}
          />
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
