import React, { Component, Fragment } from 'react';

export default class SortMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // BINDERS
    this.watchedMoviesClickProxy = this.watchedMoviesClickProxy.bind(this);
    this.toWatchMoviesClickProxy = this.toWatchMoviesClickProxy.bind(this);
  }

  watchedMoviesClickProxy() {
    this.props.watchedMoviesClick();
  }

  toWatchMoviesClickProxy() {
    this.props.toWatchMoviesClick();
  }

  render() {
    const mappedWatchedMovies = this.props.watchedMovies.map(movie => (
      <li
        key={movie.title.toString()}
        onClick={() => this.props.openPanel(movie)}
        >
          {movie.title}
      </li>
    ));

    const mappedToWatchMovies = this.props.toWatchMovies.map(movie => (
      <li
        key={movie.title.toString()}
        onClick={() => this.props.openPanel(movie)}
        >
          {movie.title}
      </li>
    ));

    return (
      <Fragment>
        <div>
          <button onClick={this.watchedMoviesClickProxy}>Watched Movies</button>
          {this.props.isWatchedMoviesClicked && (
            <ul>
              {mappedWatchedMovies}
            </ul>
          )}
        </div>
        <div>
          <button onClick={this.toWatchMoviesClickProxy}>To Watch Movies</button>
          {this.props.isToWatchMoviesClicked && (
            <ul>
              {mappedToWatchMovies}
            </ul>
          )}
        </div>
      </Fragment>
    );
  }
}