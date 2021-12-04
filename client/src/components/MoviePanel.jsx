import React, { Component, Fragment } from 'react';
import AppContext from '../AppContext.js';

export default class MoviePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = AppContext;

  render() {

    const { appState, closePanel } = this.context;

    return (
    <div id="Modal">
      <div className="overlay">
        <div className="content">
          <h2>Title: {appState.selectedMovie.title}</h2>
          <span>Status: {appState.selectedMovie.status}</span>
          <br />
          <span>Runtime: {appState.selectedMovie.runTime}</span>
          <br />
          <span>Metascore: {appState.selectedMovie.metaScore}</span>
          <br />
          <span>IMDB Rating: {appState.selectedMovie.imdbRating}</span>
          <br />
          <button onClick={closePanel}>Close</button>
        </div>
      </div>
    </div>
    );
  }
}