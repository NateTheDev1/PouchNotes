import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class New extends Component {
	state = {
		note: {
			title: '',
			body: '',
			createdAt: undefined,
			updatedAt: undefined
		}
	};

	updateValue = (e) => {
		const { note } = this.state;

		this.setState({
			note: { ...note, [e.target.name]: e.target.value }
		});
	};

	handleSave = async (e) => {
		e.preventDefault();

		const id = await this.props.onSave(this.state.note);
		this.props.history.replace(`/notes/${id}`);
	};

	render() {
		const { note } = this.state;

		return (
			<div className="Note-Form">
				<h1>New Note</h1>
				<form onSubmit={this.handleSave}>
					<div className="Note-Form-title">
						<label>Title</label>
						<input type="text" name="title" value={note.title} onChange={this.updateValue} />
					</div>
					<div>
						<textarea name="body" value={note.body} onChange={this.updateValue} />
					</div>
					<div>
						<button className="btn">Save</button>
						<Link to="/">Cancel</Link>
					</div>
				</form>
			</div>
		);
	}
}
