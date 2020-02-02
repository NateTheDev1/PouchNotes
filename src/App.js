import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/index';
import Show from './pages/Show';
import Navbar from './components/Navbar';
import New from './pages/New';

class App extends Component {
	state = {
		notes: {
			1: {
				_id: 1,
				title: 'Hello',
				body: 'This is the body of the note.',
				updatedAt: new Date()
			},
			2: {
				_id: 2,
				title: 'Hello from note 2',
				body: 'This is the body of the note. number 2',
				updatedAt: new Date()
			}
		}
	};

	handleSave = (note) => {
		const ids = Object.keys(this.state.notes);
		const id = Math.max(...ids) + 1;

		note['_id'] = id;

		const { notes } = this.state;

		this.setState({
			notes: {
				...notes,
				[id]: note
			}
		});

		return id;
	};

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<div className="App-content">
						<Route
							exact
							path="/"
							component={(props) => <IndexPage {...props} notes={this.state.notes} />}
						/>
						<Route
							exact
							path="/notes/:id"
							component={(props) => <Show {...props} note={this.state.notes[props.match.params.id]} />}
						/>
						<Route exact path="/new" component={(props) => <New {...props} onSave={this.handleSave} />} />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
