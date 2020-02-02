import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="Navbar">
				<h1>
					<Link to="/">Pouch Notes</Link>
				</h1>
				<div className="Navbar-buttons">
					<Link to="/new" className="btn">
						New Note
					</Link>
				</div>
			</nav>
		);
	}
}
