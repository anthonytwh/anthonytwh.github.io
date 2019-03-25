import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Content from './components/Content.jsx'
import Portfolio from './components/Portfolio.jsx'

import Routes from './routes/Routes.jsx'
import './assets/styles.css';

class App extends Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<div className="Title">
					<div className="Header"><Header/></div>
					<div className="Main"><Main /></div>
					<div className="About"><About /></div>
					<div className="Content"><Content /></div>
					<div className="Portfolio"><Portfolio /></div>
					<div className="Footer"><Footer /></div>
				</div>
			</Router>
		);
	}
}

export default App;