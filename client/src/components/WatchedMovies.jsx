import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { moviesSelector } from '../features/moviesSlice';
import Movie from './Movie.jsx';

export default function WatchedMovies() {
	const [showWatched, setShowWatched] = useState(false);
	const [showNotWatched, setShowNotWatched] = useState(false);

	const { filteredFilms: movies } = useSelector(moviesSelector);
	const watchedMovies = movies.filter(movie => movie.status === 'Watched');
	const notWatchedMovies = movies.filter(
		movie => movie.status === 'Not Watched'
	);
	return (
		<div>
			<div>
				<button
					onClick={() => setShowWatched(currShowWatched => !currShowWatched)}
				>
					Show Watched Movies
				</button>
				{showWatched && (
					<>
						{watchedMovies.length === 0 && <div>No watched movies</div>}
						<div>
							{watchedMovies.map(movie => (
								<Movie key={movie.id} movie={movie} />
							))}
						</div>
					</>
				)}
			</div>
			<div>
				<button
					onClick={() =>
						setShowNotWatched(currShowNotWatched => !currShowNotWatched)
					}
				>
					Show Not Watched Movies
				</button>
				{showNotWatched && (
					<div>
						{notWatchedMovies.map(movie => (
							<Movie key={movie.id} movie={movie} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
