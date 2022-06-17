import { createSlice } from '@reduxjs/toolkit';
import { movies as movieData } from '../movies';

export const MoviesSlice = createSlice({
	name: 'movies',
	initialState: { films: movieData, currentFilm: null },
	reducers: {
		getMovies: state => {
			state.films = movieData;
		},
		handleSearch: (state, action) => {
			state.films = movieData.filter(film =>
				film.title.toLowerCase().includes(action.payload.toLowerCase())
			);
		},
		handleClickOnTitle: (state, action) => {
			state.currentFilm = action.payload;
		},
		handleCloseModal: state => {
			state.currentFilm = null;
		},
	},
});

export const { getMovies, handleSearch, handleClickOnTitle, handleCloseModal } =
	MoviesSlice.actions;
export const selectMovies = state => state.movies.films;
export const selectCurrentFilm = state => state.movies.currentFilm;
export default MoviesSlice.reducer;
