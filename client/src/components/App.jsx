import React, { Component, Fragment } from 'react';
import AddMovies from './AddMovies.jsx';
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
      addedMovies: [],
     };
    // BINDERS
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.handleAddBtn = this.handleAddBtn.bind(this);
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

  handleAddBtn(addBtnQuery) {
    const movie = this.state.movies.filter(movie => (
      movie.title.toLowerCase() === addBtnQuery.toLowerCase()
    ));

    const stringifiedAddedMovies = JSON.stringify(this.state.addedMovies);
    const stringifiedMovie = JSON.stringify(movie)

    if (!stringifiedAddedMovies.includes(stringifiedMovie)) {
      this.setState({ addedMovies: [...this.state.addedMovies, ...movie] });
    }
  }

  render() {

    return (
      <Fragment>
        <AddMovies
          addedMoviesList={this.state.addedMovies}
          addBtn={this.handleAddBtn}
        />
        <br/>
        <br/>
        <SearchBar submitSearch={this.handleSubmitSearch} />
        <Movies
          movies={this.state.filteredMovies}
          isNoMovieFound={this.state.isNoMovieFound}
        />
      </Fragment>
    );
  }
}