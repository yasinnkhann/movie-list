import React, { Component, Fragment } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: '' };
    // BINDERS
    this.handleChange = this.handleChange.bind(this);
    this.submitSearchProxy = this.submitSearchProxy.bind(this);
  }

  handleChange(e) {
    this.setState({ searchQuery: e.target.value })
  }

  submitSearchProxy() {
    this.props.submitSearch(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  }

  render() {

    return (
      <Fragment>
        <input
          type='text'
          placeholder="Search..."
          name="searchQuery"
          value={this.state.searchQuery}
          onChange={this.handleChange}
        />
        <button onClick={this.submitSearchProxy}>
          Search!
        </button>
      </Fragment>
    );
  }
}