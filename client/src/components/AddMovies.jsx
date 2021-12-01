import React, { Component, Fragment } from 'react';

export default class AddMovies extends Component {
  constructor(props) {
    super(props);
    this.state = { addMovieQuery: '' };
    // BINDERS
    this.handleChange = this.handleChange.bind(this);
    this.addBtnProxy = this.addBtnProxy.bind(this);
  }

  handleChange(e) {
    this.setState({ addMovieQuery: e.target.value });
  }

  addBtnProxy() {
    this.props.addBtn(this.state.addMovieQuery);
    this.setState({ addMovieQuery: '' });
  }
  render() {
    const mappedAddedMovies = this.props?.addedMoviesList?.map(movie => (
      <li key={movie.title.toString()}>{movie?.title}</li>
    ));
    return (
      <Fragment>
        <input
          type='text'
          placeholder='Add movie title here'
          onChange={this.handleChange}
        />
        <button onClick={this.addBtnProxy}>Add!</button>
        <br />
        <ul>
          {/* <li>Monk</li>
          <li>Pepe</li> */}
          {mappedAddedMovies}
        </ul>
      </Fragment>
    );
  }
}