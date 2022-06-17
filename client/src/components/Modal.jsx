import React from 'react';
import { useDispatch } from 'react-redux';
import { handleCloseModal } from '../features/moviesSlice';

export default function Modal({ movie }) {
	const dispatch = useDispatch();
	return (
		<div className='overlay'>
			<div className='content'>
				<div className='info'>
					<h1>Title: {movie.title}</h1>
					<p>Status: {movie.status}</p>
					<p>Run Time: {movie.runTime}</p>
					<p>Meta Score: {movie.metaScore}</p>
					<p>IMDB Rating: {movie.imdbRating}</p>
				</div>
				<button onClick={() => dispatch(handleCloseModal())}>Close</button>
			</div>
		</div>
	);
}
