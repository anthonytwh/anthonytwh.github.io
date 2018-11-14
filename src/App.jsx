import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from 'reactstrap';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Content from './components/Content.jsx'
import Portfolio from './components/Portfolio.jsx'
import './assets/styles.css';

class App extends Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<div className="Title">
					<div className="Header">
						<Header/>
					</div>
						<br></br>
					<div className="Main">	
						<Main />
						<br></br>
						<Button className="test-button" color="danger"> Danger! </Button>
						<br></br>
						<br></br>
					</div>
					<div className="About">
						<br></br>
						<About />
						<br></br>
					</div>
					<div className="Content">
						<br></br>
						<Content />
						<br></br>
					</div>
					<div className="Portfolio">
						<br></br>
						<Portfolio />
						<br></br>
					</div>
					<div className="Footer">
						<Footer />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
