import React, { Fragment } from 'react';
import Movie from './Movie.jsx';

export default function Movies({
	movies,
	statusClick,
	openPanel,
	searchQuery,
}) {
	const filteredMovies = movies.filter(movie =>
		movie.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<Fragment>
			<br />
			<br />
			{filteredMovies.length === 0 ? (
				<span>No Movies Found!</span>
			) : (
				<ul>
					{filteredMovies.map(movie => (
						<Movie
							key={movie.title.toString()}
							movieObj={movie}
							statusClick={statusClick}
							openPanel={openPanel}
						/>
					))}
				</ul>
			)}
		</Fragment>
	);
}
