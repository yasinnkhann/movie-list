import React from 'react';
import { useSelector } from 'react-redux';
import { moviesSelector } from '../features/moviesSlice';
import Movie from './Movie.jsx';

export default function Movies() {
	const { filteredFilms: movies } = useSelector(moviesSelector);
	return (
		<div>
			{movies.map(movie => (
				<Movie key={movie.id} movie={movie} />
			))}
		</div>
	);
}
