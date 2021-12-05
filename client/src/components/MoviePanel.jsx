import React, { Fragment } from 'react';

export default function MoviePanel({ movie, closePanel }) {

    return (
    <div id="Modal">
      <div className="overlay">
        <div className="content">
          <h2>Title: {movie.title}</h2>
          <span>Status: {movie.status}</span>
          <br />
          <span>Runtime: {movie.runTime}</span>
          <br />
          <span>Metascore: {movie.metaScore}</span>
          <br />
          <span>IMDB Rating: {movie.imdbRating}</span>
          <br />
          <button onClick={closePanel}>Close</button>
        </div>
      </div>
    </div>
    )
  }