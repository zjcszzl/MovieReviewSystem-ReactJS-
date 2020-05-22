import React, { Component } from "react";
import { Link } from "react-router-dom";
const Bar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Products">Products</Link>
      </li>
      <li>
        <Link to="/Posts">Posts</Link>
      </li>
      <li>
        <Link to="/Dashboard">Admin</Link>
      </li>
    </ul>
  );
};

export default Bar;
