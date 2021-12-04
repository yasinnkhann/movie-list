import React, { Component, Fragment } from 'react';
import AppContext from '../AppContext.js';

export default class SortMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = AppContext;

  render() {
    const { appState, openPanel, toWatchMoviesClick, watchedMoviesClick } = this.context;
    const mappedWatchedMovies = appState.watchedMovies.map(movie => (
      <li
        key={movie.title.toString()}
        onClick={() => openPanel(movie)}
        >
          {movie.title}
      </li>
    ));

    const mappedToWatchMovies = appState.toWatchMovies.map(movie => (
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
          {appState.isWatchedMoviesClicked && (
            <ul>
              {mappedWatchedMovies}
            </ul>
          )}
        </div>
        <div>
          <button onClick={toWatchMoviesClick}>To Watch Movies</button>
          {appState.isToWatchMoviesClicked && (
            <ul>
              {mappedToWatchMovies}
            </ul>
          )}
        </div>
      </Fragment>
    );
  }
}