import React, { Component, Fragment } from 'react';

export default class MoviePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // BINDERS
  }

  render() {

    return (
    <div id="Modal">
      <div className="overlay">
        <div className="content">
          <h2>Title: {this.props.movie.title}</h2>
          <span>Status: {this.props.movie.status}</span>
          <br />
          <span>Runtime: {this.props.movie.runTime}</span>
          <br />
          <span>Metascore: {this.props.movie.metaScore}</span>
          <br />
          <span>IMDB Rating: {this.props.movie.imdbRating}</span>
          <br />
          <button onClick={this.props.closePanel}>Close</button>
        </div>
      </div>
    </div>
    );
  }
}