import React, { Component, Fragment } from 'react';
import SearchBar from './SearchBar.jsx';
import Movies from './Movies.jsx';
import movies from '../movies.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      filteredMovies: movies,
      isNoMovieFound: false,
     };
    // BINDERS
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  handleSubmitSearch(query) {
    const moviesFiltered = this.state.movies.filter(movie => (
      movie.title.toLowerCase().includes(query.toLowerCase())
    ));
    this.setState({ filteredMovies: moviesFiltered });

    if (moviesFiltered.length === 0) {
      this.setState({ isNoMovieFound: true });
    } else {
      this.setState({ isNoMovieFound: false });
    }
  }

  render() {

    return (
      <Fragment>
        <SearchBar submitSearch={this.handleSubmitSearch} />
        <Movies
          movies={this.state.filteredMovies}
          isNoMovieFound={this.state.isNoMovieFound}
        />
      </Fragment>
    );
  }
}