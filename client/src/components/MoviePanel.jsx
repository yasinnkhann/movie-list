import React, { Component, Fragment } from 'react';

export default class MoviePanel extends Component {
	constructor(props) {
		super(props);
		// BINDERS
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	componentDidMount() {
		window.addEventListener('keyup', this.handleKeyUp, false);
	}

	componentWillUnmount() {
		window.removeEventListener('keyup', this.handleKeyUp, false);
	}

	handleKeyUp(e) {
		const keys = {
			27: () => {
				e.preventDefault();
				this.props.closePanel();
			},
		};

		if (keys[e.keyCode]) {
			keys[e.keyCode]();
		}
	}

	render() {
		return (
			<div id='Modal'>
				<div className='overlay'>
					<div className='content'>
						<h2>Title: {this.props.movie.title}</h2>
						<p>Status: {!this.props.movie.status ? 'To Watch' : 'Watched'}</p>
						<p>Popularity: {this.props.movie.popularity}</p>
						<br />
						<p>Release Date: {this.props.movie.release_date}</p>
						<button onClick={this.props.closePanel}>Close</button>
					</div>
				</div>
			</div>
		);
	}
}
