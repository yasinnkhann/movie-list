import React, { Component, Fragment } from 'react';
import AppContext from '../AppContext.js';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: '' };
    // BINDERS
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  static contextType = AppContext;

  handleChange(e) {
    this.setState({ searchQuery: e.target.value })
  }

  handleSubmitSearch() {
    this.context.submitSearch(this.state.searchQuery);
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
        <button onClick={this.handleSubmitSearch}>Search!</button>
      </Fragment>
    );
  }
}