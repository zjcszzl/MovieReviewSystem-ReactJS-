import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../components/input";
class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    //const {error}  destruct
    const options = {
      abortEarly: false,
    };
    const result = Joi.validate(this.state.data, this.schema, options);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //call the server and redirect
    //console.log("Submitted");
    // document.getElementById('username').value
    //const username = this.username.current.value;
    const errors = this.validate();
    //console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }
}

export default Form;
