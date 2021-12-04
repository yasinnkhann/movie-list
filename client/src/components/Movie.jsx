import React, { Component, Fragment } from 'react';
import AppContext from '../AppContext.js';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // BINDERS
    this.statusClickProxy = this.statusClickProxy.bind(this);
    this.openPanelProxy = this.openPanelProxy.bind(this);
  }

  static contextType = AppContext;

  statusClickProxy() {
    this.context.statusClick(this.props.movieObj);
  }

  openPanelProxy() {
    this.context.openPanel(this.props.movieObj);
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