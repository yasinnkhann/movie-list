import React, { Component, Fragment } from 'react';
import AppContext from '../AppContext.js';

export default class MoviePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = AppContext;

  render() {

    const { movie, closePanel } = this.context;

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
    );
  }
}