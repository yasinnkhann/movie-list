import React from 'react';
import { useDispatch } from 'react-redux';
import { handleClickOnTitle, handleMovieStatus } from '../features/moviesSlice';

export default function Movie({ movie }) {
	const dispatch = useDispatch();

	return (
		<div>
			<h1
				onClick={() => dispatch(handleClickOnTitle(movie))}
				style={{ display: 'inline-block' }}
			>
				{movie.title}
			</h1>
			<button
				onClick={() => {
					dispatch(
						handleMovieStatus({
							id: movie.id,
							status:
								movie.status === 'Not Watched' ? 'Watched' : 'Not Watched',
						})
					);
				}}
				style={{ display: 'inline-block', verticalAlign: 'super' }}
			>
				{movie.status}
			</button>
		</div>
	);
}
