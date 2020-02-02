import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="Navbar">
				<h1>
					<Link to="/" className="Link">
						Pouch Notes
					</Link>
				</h1>
				<div className="Navbar-buttons">
					<Link to="/new" className="btn Link">
						New Note
					</Link>
				</div>
			</nav>
		);
	}
}
