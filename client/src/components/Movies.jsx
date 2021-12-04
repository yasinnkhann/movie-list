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

    const { appState, statusClick,  openPanel } = this.context;

    const mappedMovies = appState.filteredMovies.map(movie => (
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
        {appState.isNoMovieFound && <span>No Movies Found!</span>}
        <ul>
          {mappedMovies}
        </ul>
      </Fragment>
    );
  }
}