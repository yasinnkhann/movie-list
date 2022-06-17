import React from 'react';
import axios from 'axios';
import API_KEY from '../config.js';
import { instance } from '../axiosInstance.js';
import Movies from './Movies.jsx';
import Search from './Search.jsx';
import Modal from './Modal.jsx';
import { useSelector } from 'react-redux';
import { selectCurrentFilm } from '../features/moviesSlice.js';

export default function App() {
	const currentFilm = useSelector(selectCurrentFilm);
	return (
		<div>
			<Search />
			<Movies />
			{currentFilm && <Modal movie={currentFilm} />}
		</div>
	);
}
