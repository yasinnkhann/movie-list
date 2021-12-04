import React, { Component, Fragment } from 'react';
import Movie from './Movie.jsx';
import AppContext from '../AppContext.js';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = AppContext;

  render() {

    const { movies, statusClick,  openPanel, isNoMovieFound } = this.context;

    const mappedMovies = movies.map(movie => (
      <Movie
        key={movie.title.toString()}
        movieObj={movie}
        statusClick={statusClick}
        openPanel={openPanel}
      />
    ))
    return (
      <Fragment>
        <br />
        <br />
        {isNoMovieFound && <span>No Movies Found!</span>}
        <ul>
          {mappedMovies}
        </ul>
      </Fragment>
    );
  }
}