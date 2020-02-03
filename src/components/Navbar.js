import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="Navbar">
				<div>
					<h1>
						<Link to="/" className="Link">
							Pouch Notes
						</Link>
					</h1>
				</div>
				<h1 className="version">Version 0.4</h1>
				<div className="Navbar-buttons">
					<Link to="/new" className="btn Link">
						New Note
					</Link>
				</div>
			</nav>
		);
	}
}
