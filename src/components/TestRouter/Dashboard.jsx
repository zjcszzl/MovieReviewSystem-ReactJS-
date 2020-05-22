import React, { Component } from "react";
import { Link } from "react-router-dom";
class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <ul>
          <li>
            <Link to="/admin/posts">Posts</Link>
          </li>
          <li>
            <Link to="/admin/users">Users</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Dashboard;
