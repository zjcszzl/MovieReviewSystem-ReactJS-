import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "../components/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../components/listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import NavBar from "./navbar";
import { Route } from "react-router-dom";

class Movies extends React.Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: "",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];

    this.setState({ movies: getMovies(), genres: genres });
  }

  handDelete = (movie) => {
    console.log(movie);
    const new_movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({
      movies: new_movies,
    });
  };

  handleLike = (movie) => {
    const new_movies = [...this.state.movies];
    const index = new_movies.indexOf(movie);
    new_movies[index].liked = !new_movies[index].liked;
    this.setState({ movies: new_movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p> There are no movies in the database. </p>;

    const filteredMovies =
      this.state.selectedGenre && this.state.selectedGenre._id
        ? this.state.movies.filter(
            (m) => m.genre._id === this.state.selectedGenre._id
          )
        : this.state.movies;

    const sortedMovies = _.orderBy(
      filteredMovies,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );

    const movies = paginate(
      //this.state.movies,
      //filteredMovies,
      sortedMovies,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {filteredMovies.length} movies in the database</p>
          <MoviesTable
            movies={movies}
            sortColumn={this.state.sortColumn}
            onLike={this.handleLike}
            onDelete={this.handDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={filteredMovies.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
