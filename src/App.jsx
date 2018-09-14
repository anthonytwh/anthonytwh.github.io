import React, { Component } from 'react';
import { Button } from 'reactstrap';

import Header from './components/Header.jsx'
import logo from './logo.svg';
import './assets/styles.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<p></p>
			<Button color="danger">Danger!</Button>
		</div>
		);
	}
}

export default App;
