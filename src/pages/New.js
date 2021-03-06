import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './New.css';

export default class New extends Component {
	state = {
		note: {
			title: '',
			body: '',
			createdAt: undefined,
			updatedAt: undefined
		},
		loading: false
	};

	updateValue = (e) => {
		const { note } = this.state;

		this.setState({
			note: { ...note, [e.target.name]: e.target.value }
		});
	};

	handleSave = async (e) => {
		this.setState({ loading: true });
		const id = this.props.onSave(this.state.note);
		setTimeout(() => {
			window.location.href = '/';
		}, 0);
		// this.props.history.replace(`/notes/${id}`);
		// this.props.history.push(`/`);
	};

	render() {
		const { note } = this.state;
		if (this.state.loading) {
			return (
				<div>
					<h2>Loading...</h2>
				</div>
			);
		} else {
			return (
				<div className="Note-Form">
					<h1>New Note</h1>
					<form onSubmit={this.handleSave}>
						<div className="form-title">
							<input
								type="text"
								name="title"
								value={note.title}
								onChange={this.updateValue}
								placeholder="Title"
							/>
						</div>
						<div>
							<textarea
								name="body"
								value={note.body}
								onChange={this.updateValue}
								className="note-body"
								placeholder="Body"
							/>
						</div>
						<div>
							<button className="btn Save">Save</button>
							<Link to="/" className="cancel">
								Cancel
							</Link>
						</div>
					</form>
				</div>
			);
		}
	}
}
