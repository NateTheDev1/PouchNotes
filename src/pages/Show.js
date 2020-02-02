import React, { Component } from 'react';

export default class Show extends Component {
	render() {
		const { note } = this.props;

		return (
			<div>
				<h1>{note.title}</h1>
				<div>{note.body}</div>
			</div>
		);
	}
}
