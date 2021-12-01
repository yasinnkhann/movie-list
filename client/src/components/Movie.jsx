import React, { Component, Fragment } from 'react';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
      <Fragment>
        <li>{this.props.movieObj.title}</li>
      </Fragment>
    );
  }
}