import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { handleCloseModal } from '../features/moviesSlice';

export default function Modal({ movie }) {
	const dispatch = useDispatch();
	const contentRef = useRef(null);

	useEffect(() => {
		const close = e => {
			if (e.keyCode === 27) {
				dispatch(handleCloseModal());
			}
		};
		window.addEventListener('keydown', close);
		return () => window.removeEventListener('keydown', close);
	}, []);

	const handleClickOutside = e => {
		if (contentRef.current.contains(e.target)) {
			return;
		}
		dispatch(handleCloseModal());
	};

	return (
		<div className='overlay' onClick={handleClickOutside}>
			<div className='content' ref={contentRef}>
				<div className='info'>
					<h1>Title: {movie.title}</h1>
					<div>
						<img
							src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
							alt={movie.title}
							style={{ width: '100%', height: '20rem' }}
						/>
					</div>
				</div>
				<button onClick={() => dispatch(handleCloseModal())}>Close</button>
			</div>
		</div>
	);
}
