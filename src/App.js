import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/index';
import Show from './pages/Show';

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
	render() {
		return (
			<BrowserRouter>
				<Route exact path="/" component={(props) => <IndexPage {...props} notes={this.state.notes} />} />
				<Route
					exact
					path="/notes/:id"
					component={(props) => <Show {...props} note={this.state.notes[props.match.params.id]} />}
				/>
			</BrowserRouter>
		);
	}
}

export default App;
