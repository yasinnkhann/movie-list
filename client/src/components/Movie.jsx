import React from 'react';
import { useDispatch } from 'react-redux';
import { handleClickOnTitle } from '../features/moviesSlice';

export default function Movie({ movie }) {
	const dispatch = useDispatch();
	return (
		<div onClick={() => dispatch(handleClickOnTitle(movie))}>
			<h1>{movie.title}</h1>
		</div>
	);
}
