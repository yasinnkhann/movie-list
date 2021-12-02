import React, { Component, Fragment } from 'react';
import axios from 'axios';
import AddMovies from './AddMovies.jsx';
import SortMovies from './SortMovies.jsx';
import SearchBar from './SearchBar.jsx';
import Movies from './Movies.jsx';
import movies from '../movies.js';
import MoviePanel from './MoviePanel.jsx';
import API_KEY from '../config.js';
import { instance } from '../axiosInstance.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      filteredMovies: movies,
      isNoMovieFound: false,
      addedMovies: [],
      watchedMovies: [],
      toWatchMovies: [],
      isWatchedMoviesClicked: false,
      isToWatchMoviesClicked: false,
      selectedMovie: {},
      isMoviePanelOpen: false,
     };
    // BINDERS
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.handleAddBtn = this.handleAddBtn.bind(this);
    this.handleStatusClick = this.handleStatusClick.bind(this);
    this.handleWatchedMoviesClick = this.handleWatchedMoviesClick.bind(this);
    this.handleToWatchMoviesClick = this.handleToWatchMoviesClick.bind(this);
    this.handleOpenPanel = this.handleOpenPanel.bind(this);
    this.handleClosePanel = this.handleClosePanel.bind(this);
  }

  async componentDidMount() {
    try {
      // https://api.themoviedb.org/3/movie/550?api_key=stuff
      // const res = await axios.get('https://api.themoviedb.org/3/movie/popular', { params: { api_key: API_KEY } });
      // // OR USE axios.create instance
      const res = await instance.get('movie/popular');
      console.log(res.data.results);
    } catch(err) {
      console.error(err);
    }
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
    const stringifiedMovie = JSON.stringify(movie);

    if (!stringifiedAddedMovies.includes(stringifiedMovie)) {
      this.setState({ addedMovies: [...this.state.addedMovies, ...movie] });
    }
  }

  handleStatusClick(movieObj) {
    const moviesCopy = [...this.state.movies];

    const movieIdx = this.state.movies.findIndex(movie => (
      movie === movieObj
    ));

    if (moviesCopy[movieIdx].status === 'To Watch') {
      moviesCopy[movieIdx].status = 'Watched';
    } else {
      moviesCopy[movieIdx].status = 'To Watch';
    }

    this.setState({ movies: moviesCopy });

    const moviesWatched = this.state.movies.filter(movieObj => (
      movieObj.status === 'Watched'
    ));

    this.setState({ watchedMovies: moviesWatched });


    const moviesToWatch = this.state.movies.filter(movieObj => (
      movieObj.status === 'To Watch'
    ));

    this.setState({ toWatchMovies: moviesToWatch });
  }

  handleWatchedMoviesClick() {
    const moviesWatched = this.state.movies.filter(movieObj => (
      movieObj.status === 'Watched'
    ));

    this.setState({ watchedMovies: moviesWatched });

    if (this.state.isWatchedMoviesClicked === true) {
      this.setState({ isWatchedMoviesClicked: false });
    } else {
      this.setState({ isWatchedMoviesClicked: true });
    }
  }

  handleToWatchMoviesClick() {
    const moviesToWatch = this.state.movies.filter(movieObj => (
      movieObj.status === 'To Watch'
    ));

    this.setState({ toWatchMovies: moviesToWatch });

    if (this.state.isToWatchMoviesClicked === true) {
      this.setState({ isToWatchMoviesClicked: false });
    } else {
      this.setState({ isToWatchMoviesClicked: true });
    }
  }

  handleOpenPanel(movie) {
    this.setState({
      selectedMovie: movie,
      isMoviePanelOpen: true,
    });
  }

  handleClosePanel() {
    this.setState({ isMoviePanelOpen: false });
  }

  render() {

    return (
      <Fragment>
        <AddMovies
          addedMoviesList={this.state.addedMovies}
          addBtn={this.handleAddBtn}
        />
        <SortMovies
          watchedMovies={this.state.watchedMovies}
          watchedMoviesClick={this.handleWatchedMoviesClick}
          isWatchedMoviesClicked={this.state.isWatchedMoviesClicked}
          toWatchMovies={this.state.toWatchMovies}
          toWatchMoviesClick={this.handleToWatchMoviesClick}
          isToWatchMoviesClicked={this.state.isToWatchMoviesClicked}
          openPanel={this.handleOpenPanel}
        />
        <br/>
        <br/>
        <SearchBar submitSearch={this.handleSubmitSearch} />
        <Movies
          movies={this.state.filteredMovies}
          isNoMovieFound={this.state.isNoMovieFound}
          statusClick={this.handleStatusClick}
          openPanel={this.handleOpenPanel}
        />
        {this.state.isMoviePanelOpen && (
          <MoviePanel
            movie={this.state.selectedMovie}
            closePanel={this.handleClosePanel}
          />
        )}
      </Fragment>
    );
  }
}