import React, { Component } from "react";
import Likes from "../components/like";
import Table from "./table";
import { Link } from "react-router-dom";
class MoviesTable extends React.Component {
  render() {
    const { movies } = this.props;

    const columns = [
      {
        path: "title",
        label: "Title",
        content: (movie) => (
          <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        ),
      },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rate" },
      {
        key: "like",
        content: (movie) => (
          <Likes liked={movie.liked} onClick={() => this.props.onLike(movie)} />
        ),
      },
      {
        key: "delete",
        content: (movie) => (
          <button
            onClick={() => this.props.onDelete(movie)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        ),
      },
    ];

    return (
      <Table
        columns={columns}
        data={movies}
        sortColumn={this.props.sortColumn}
        onSort={this.props.onSort}
      />
    );
  }
}

export default MoviesTable;
