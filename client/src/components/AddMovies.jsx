import React, { Component, Fragment, useContext } from 'react';
import AppContext from '../AppContext.js';


export default class AddMovies extends Component {
  constructor(props) {
    super(props);
    this.state = { addMovieQuery: '' };
    // BINDERS
    this.handleChange = this.handleChange.bind(this);
    this.handleAddBtn = this.handleAddBtn.bind(this);
  }

  static contextType = AppContext;


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.context);
  }

  handleAddBtn() {
    this.context.addBtn(this.state.addMovieQuery);
    this.setState({ addMovieQuery: '' });
  }
  render() {
    const { addedMoviesList, openPanel } = this.context;

    const mappedAddedMovies = addedMoviesList.map(movie => (
      <li
        key={movie.title.toString()}
        onClick={() => openPanel(movie)}
      >
          {movie.title}
        </li>
    ));
    return (
      <Fragment>
        <input
          type='text'
          name='addMovieQuery'
          value={this.state.addMovieQuery}
          placeholder='Add movie title here'
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddBtn}>Add!</button>
        <br />
        <ul>
          {mappedAddedMovies}
        </ul>
      </Fragment>
    );
  }
}
