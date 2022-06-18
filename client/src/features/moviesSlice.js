import { createSlice } from '@reduxjs/toolkit';
import { movies as movieData } from '../movies';
import { instance } from '../axiosInstance';

export const MoviesSlice = createSlice({
	name: 'movies',
	initialState: {
		isLoading: false,
		error: null,
		films: [],
		filteredFilms: [],
		currentFilm: null,
	},
	reducers: {
		getMovies: state => {
			state.films = movieData;
		},
		fetchingMovies: state => {
			state.isLoading = true;
		},
		fetchMoviesSuccess: (state, action) => {
			state.isLoading = false;
			state.films = action.payload;
			state.filteredFilms = action.payload;
			state.error = null;
		},
		fetchMoviesFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		handleSearch: (state, action) => {
			state.filteredFilms = state.films.filter(film =>
				film.title.toLowerCase().includes(action.payload.toLowerCase())
			);
		},
		handleClickOnTitle: (state, action) => {
			state.currentFilm = action.payload;
		},
		handleCloseModal: state => {
			state.currentFilm = null;
		},
		handleMovieStatus: (state, action) => {
			const filmsCopy = [...state.films];
			filmsCopy.map(film =>
				film.id === action.payload.id
					? (film.status = action.payload.status)
					: film
			);
			state.films = filmsCopy;
			state.filteredFilms = filmsCopy;
		},
	},
});

export const {
	getMovies,
	fetchingMovies,
	fetchMoviesSuccess,
	fetchMoviesFailure,
	handleSearch,
	handleClickOnTitle,
	handleCloseModal,
	handleMovieStatus,
} = MoviesSlice.actions;

export const fetchMovies = () => async dispatch => {
	dispatch(fetchingMovies());
	try {
		const {
			data: { results },
		} = await instance.get('/movie/popular');
		results.map(film => (film.status = 'Not Watched'));

		dispatch(fetchMoviesSuccess(results));
	} catch (error) {
		dispatch(fetchMoviesFailure(error));
	}
};

export const moviesSelector = state => state.movies;
export const currentFilmSelector = state => state.movies.currentFilm;
export default MoviesSlice.reducer;
