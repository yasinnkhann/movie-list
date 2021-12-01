import React, { Component, Fragment } from 'react';
import Movie from './Movie.jsx';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    const mappedMovies = this.props.movies.map(movie => (
      <Movie
      key={movie.title.toString()}
      movieObj={movie}
      />
    ))
    return (
      <Fragment>
        <br />
        <br />
        {this.props.isNoMovieFound && <span>No Movies Found!</span>}
        <ul>
          {mappedMovies}
        </ul>
      </Fragment>
    );
  }
}