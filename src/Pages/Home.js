import React, { Component } from "react";
import { connect } from "react-redux";
import ".././App.scss";
import MovieList from "./MovieList";
import ModalTrailer from "./ModalTrailer";
import { fetchMovies } from "../Redux/Actions/MovieAction";

class Home extends Component {
  render() {
    return (
      <>
        <ModalTrailer />
        <MovieList movieList={this.props.movieList} />
      </>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.MovieReducer.movies,
  };
};

export default connect(mapStateToProps)(Home);
