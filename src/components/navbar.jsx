import React, { Component } from "react";

//stateless functional component

const NavBar = (props) => {
  console.log("Navbar rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Number of Non-Empty Counters{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
