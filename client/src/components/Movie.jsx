import React, { Component, Fragment } from 'react';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // BINDERS
    this.statusClickProxy = this.statusClickProxy.bind(this);
  }

  statusClickProxy() {
    this.props.statusClick(this.props.movieObj);
    // this.props.movieObj.status ='Watched'
  }

  render() {

    return (
      <Fragment>
        <div>
          <li>{this.props.movieObj.title}</li>
          <button onClick={this.statusClickProxy}>{this.props.movieObj.status}</button>
        </div>
      </Fragment>
    );
  }
}