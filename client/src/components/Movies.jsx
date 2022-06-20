import React from 'react';
import { useSelector } from 'react-redux';
import { moviesSelector } from '../features/moviesSlice';
import Movie from './Movie.jsx';

export default function Movies() {
	const { films: movies, query } = useSelector(moviesSelector);

	const filteredMovies = movies.filter(movies =>
		movies.title.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<div>
			{filteredMovies.map(movie => (
				<Movie key={movie.id} movie={movie} />
			))}
		</div>
	);
}
