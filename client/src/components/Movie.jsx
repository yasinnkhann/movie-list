import React from 'react';
import { useDispatch } from 'react-redux';
import { handleClickOnTitle } from '../features/moviesSlice';

export default function Movie({ movie }) {
	const dispatch = useDispatch();
	return (
		<div>
			<h1 onClick={() => dispatch(handleClickOnTitle(movie))}>{movie.title}</h1>
		</div>
	);
}
