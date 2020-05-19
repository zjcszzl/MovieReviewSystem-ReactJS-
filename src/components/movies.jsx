import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Likes from "../components/like";
class Movies extends React.Component {
  state = {
    movies: getMovies(),
  };

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

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p> There are no movies in the database. </p>;
    return (
      <div>
        <h3>
          {" "}
          Shwoing {count}
          movies in the database{" "}
        </h3>{" "}
        <table className="table">
          <thead>
            <tr>
              <th> Title </th>
              <th> Genere </th>
              <th> Stock </th>
              <th> Rate </th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>{" "}
          <tbody>
            {" "}
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td> {movie.title} </td> <td> {movie.genre.name} </td>{" "}
                <td> {movie.numberInStock} </td>{" "}
                <td> {movie.dailyRentalRate} </td>{" "}
                <td>
                  <Likes
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete{" "}
                  </button>{" "}
                </td>{" "}
              </tr>
            ))}{" "}
          </tbody>{" "}
        </table>{" "}
      </div>
    );
  }
}

export default Movies;
