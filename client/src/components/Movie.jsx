import React, { Component, Fragment } from 'react';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // BINDERS
    this.statusClickProxy = this.statusClickProxy.bind(this);
    this.openPanelProxy = this.openPanelProxy.bind(this);
  }

  statusClickProxy() {
    this.props.statusClick(this.props.movieObj);
  }

  openPanelProxy() {
    this.props.openPanel(this.props.movieObj);
  }

  render() {

    return (
      <Fragment>
        <div>
          <li onClick={this.openPanelProxy}>{this.props.movieObj.title}</li>
          <button onClick={this.statusClickProxy}>{this.props.movieObj.status}</button>
        </div>
      </Fragment>
    );
  }
}