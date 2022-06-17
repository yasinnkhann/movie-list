import React from 'react';
import { useSelector } from 'react-redux';
import { selectMovies } from '../features/moviesSlice';
import Movie from './Movie.jsx';

export default function Movies() {
	const movies = useSelector(selectMovies);
	return (
		<div>
			{movies.map(movie => (
				<Movie key={movie.title} movie={movie} />
			))}
		</div>
	);
}
