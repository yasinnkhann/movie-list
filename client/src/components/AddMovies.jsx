import React, { Component, Fragment, useContext } from 'react';
import AppContext from '../AppContext.js';


export default class AddMovies extends Component {
  constructor(props) {
    super(props);
    this.state = { addMovieQuery: '' };
    // BINDERS
    this.handleChange = this.handleChange.bind(this);
    // this.addBtnProxy = this.addBtnProxy.bind(this);
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // addBtnProxy() {
  //   addBtn(this.state.addMovieQuery);
  //   this.setState({ addMovieQuery: '' });
  // }
  render() {
    // const { addBtn, addedMoviesList, openPanel } = useContext(AppContext);

    // const mappedAddedMovies = addedMoviesList.map(movie => (
    //   <li
    //     key={movie.title.toString()}
    //     onClick={() => openPanel(movie)}
    //   >
    //       {movie.title}
    //     </li>
    // ));
    return (
      <Fragment>
        <AppContext.Consumer>
          {(value) => (
            <>
              <input
                type='text'
                name='addMovieQuery'
                value={this.state.addMovieQuery}
                placeholder='Add movie title here'
                onChange={this.handleChange}
              />
              <button onClick={() => value.addBtn(this.state.addMovieQuery)}>Add!</button>
              <br />
              <ul>
                {value.addedMoviesList.map(movie => (
                  <li
                    key={movie.title.toString()}
                    onClick={() => value.openPanel(movie)}
                  >
                    {movie.title}
                  </li>
                ))}
              </ul>
            </>
          )}
        </AppContext.Consumer>
      </Fragment>
    );
  }
}
