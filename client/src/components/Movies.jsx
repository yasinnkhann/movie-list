import React, { Fragment } from 'react';
import Movie from './Movie.jsx';

export default function Movies({ movies, statusClick, openPanel, isNoMovieFound }) {

    const mappedMovies = movies.map(movie => (
      <Movie
        key={movie.title.toString()}
        movieObj={movie}
        statusClick={statusClick}
        openPanel={openPanel}
      />
    ));
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