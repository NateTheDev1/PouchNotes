import React, { Component } from 'react';
import NoteList from '../components/NoteList';

export default class IndexPage extends Component {
	render() {
		const notes = Object.values(this.props.notes);
		return (
			<div>
				<h1>Notes</h1>
				<NoteList notes={this.props.notes} />
			</div>
		);
	}
}
