import * as React from "react";
import Joi from "joi-browser";
import Form from "../form";
import Input from "../input";
class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
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
          <Input
            type="text"
            name="name"
            value={this.state.data.name}
            label="Name"
            onChange={this.handleChange}
            error={this.state.errors.name}
          />

          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
