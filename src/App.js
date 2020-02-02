import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/index';
import Show from './pages/Show';
import Navbar from './components/Navbar';
import New from './pages/New';
import DB from './db';

class App extends Component {
	state = {
		db: new DB('Notes'),
		notes: {},
		loading: true
	};

	async componentDidMount() {
		const notes = await this.state.db.getAllNotes();

		this.setState({
			notes,
			loading: false
		});
	}

	handleSave = async (note) => {
		let { id } = await this.state.db.createNote(note);

		const { notes } = this.state;

		this.setState({
			notes: {
				...notes,
				[id]: note
			}
		});

		return id;
	};

	renderContent() {
		if (this.state.loading) {
			return <h2>Loading...</h2>;
		}
		return (
			<div className="App-content">
				<Route exact path="/" component={(props) => <IndexPage {...props} notes={this.state.notes} />} />
				<Route
					path="/notes/:id"
					component={(props) => <Show {...props} note={this.state.notes[props.match.params.id]} />}
				/>
				<Route exact path="/new" component={(props) => <New {...props} onSave={this.handleSave} />} />
			</div>
		);
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					{this.renderContent()}
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
