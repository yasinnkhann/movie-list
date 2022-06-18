import React, { useEffect } from 'react';
import Movies from './Movies.jsx';
import Search from './Search.jsx';
import Modal from './Modal.jsx';
import WatchedMovies from './WatchedMovies.jsx';
import { useSelector, useDispatch } from 'react-redux';
import {
	fetchMovies,
	moviesSelector,
	currentFilmSelector,
} from '../features/moviesSlice';

export default function App() {
	const dispatch = useDispatch();
	const { isLoading, error } = useSelector(moviesSelector);
	const currentFilm = useSelector(currentFilmSelector);

	useEffect(() => {
		dispatch(fetchMovies());
	}, [dispatch]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		console.error(error);
		return <div>Error: {error.message}</div>;
	}

	return (
		<div>
			<WatchedMovies />
			<Search />
			<Movies />
			{currentFilm && <Modal movie={currentFilm} />}
		</div>
	);
}
