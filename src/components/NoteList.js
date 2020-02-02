import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteList.css';

export default class NoteList extends Component {
	componentDidMount() {}

	renderNotes() {
		const notes = Object.values(this.props.notes);
		console.log(notes);
		return notes.map((n) => (
			<div key={n._id} className="LinkDiv">
				<h2>
					<Link to={`/notes/${n._id}`} className="Links">
						<span className="NoteLinkText">{n.title}</span>
					</Link>
					{/* <a href={`/notes/${n._id}`}>{n.title}</a> */}
				</h2>
			</div>
		));
	}

	render() {
		return <div>{this.renderNotes()}</div>;
	}
}
