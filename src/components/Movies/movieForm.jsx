import React from "react";
import Joi from "joi-browser";
import Form from "../form";
import { getMovie, saveMovie } from "../../services/fakeMovieService";
import { getGenres } from "../../services/fakeGenreService";
import Input from "../input";
import Select from "../select";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };
  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
    const movieId = this.props.match.params.id;
    //check if the movie is already exits
    if (movieId === "new") return;
    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");
    this.setState({ data: this.mapToViewModel(movie) });
  }
  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }
  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="title"
            value={this.state.data.title}
            label="Title"
            onChange={this.handleChange}
            error={this.state.errors.title}
          />
          <Select
            name="genreId"
            value={this.state.data.genreId}
            label="Genre"
            options={this.state.genres}
            onChange={this.handleChange}
            error={this.state.errors.genres}
          />
          <Input
            type="number"
            name="numberInStock"
            value={this.state.data.numberInStock}
            label="Number In Stock"
            onChange={this.handleChange}
            error={this.state.errors.numberInStock}
          />
          <Input
            type="text"
            name="dailyRentalRate"
            value={this.state.data.dailyRentalRate}
            label="Rate"
            onChange={this.handleChange}
            error={this.state.errors.dailyRentalRate}
          />
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
