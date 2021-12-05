import React, { Fragment } from 'react';

export default function({ watchedMoviesClick, toWatchMoviesClick, watchedMovies, openPanel,  toWatchMovies, isWatchedMoviesClicked, isToWatchMoviesClicked }) {

  const watchedMoviesClickProxy = () => {
    watchedMoviesClick();
  };

  const toWatchMoviesClickProxy = () => {
    toWatchMoviesClick();
  };

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
          <button onClick={watchedMoviesClickProxy}>Watched Movies</button>
          {isWatchedMoviesClicked && (
            <ul>
              {mappedWatchedMovies}
            </ul>
          )}
        </div>
        <div>
          <button onClick={toWatchMoviesClickProxy}>To Watch Movies</button>
          {isToWatchMoviesClicked && (
            <ul>
              {mappedToWatchMovies}
            </ul>
          )}
        </div>
      </Fragment>
    );
  }