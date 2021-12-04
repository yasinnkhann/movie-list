import React, { Component, Fragment } from 'react';
import AppContext from '../AppContext.js';

export default class SortMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = AppContext;

  render() {
    const { watchedMovies, openPanel, toWatchMovies, isWatchedMoviesClicked, isToWatchMoviesClicked, toWatchMoviesClick, watchedMoviesClick } = this.context;
    const mappedWatchedMovies = watchedMovies.map(movie => (
      <li
        key={movie.title.toString()}
        onClick={() => openPanel(movie)}
        >
          {movie.title}
      </li>
    ));

    const mappedToWatchMovies = toWatchMovies.map(movie => (
      <li
        key={movie.title.toString()}
        onClick={() => openPanel(movie)}
        >
          {movie.title}
      </li>
    ));

    return (
      <Fragment>
        <div>
          <button onClick={watchedMoviesClick}>Watched Movies</button>
          {isWatchedMoviesClicked && (
            <ul>
              {mappedWatchedMovies}
            </ul>
          )}
        </div>
        <div>
          <button onClick={toWatchMoviesClick}>To Watch Movies</button>
          {isToWatchMoviesClicked && (
            <ul>
              {mappedToWatchMovies}
            </ul>
          )}
        </div>
      </Fragment>
    );
  }
}