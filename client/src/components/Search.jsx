import React from 'react';
import { useDispatch } from 'react-redux';
import { handleSearch } from '../features/moviesSlice';

export default function Search() {
	const dispatch = useDispatch();
	return (
		<div>
			<input
				type='text'
				placeholder='Search...'
				onChange={e => dispatch(handleSearch(e.target.value))}
			/>
		</div>
	);
}
