import React, { Component, Fragment } from 'react';

export default class MoviePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // BINDERS
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
  }

  handleKeyUp(e) {
    const keys = {
      27: () => {
        e.preventDefault();
        this.props.closePanel();
        window.removeEventListener('keyup', this.handleKeyUp, false);
      },
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
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