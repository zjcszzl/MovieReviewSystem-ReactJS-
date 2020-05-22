import React, { Component } from "react";
import queryString from "query-string";

class Posts extends React.Component {
  render() {
    return (
      <div>
        <h1>Posts</h1> year:{this.props.match.params.year} , Month:
        {this.props.match.params.month}
      </div>
    );
  }
}

export default Posts;
