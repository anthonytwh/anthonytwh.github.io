import React, { Component } from 'react';
import { Button } from 'reactstrap';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import logo from './logo.svg';
import './assets/styles.css';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// library.add(faGithub, faLinkedin, faInstagram, faEnvelope)



class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
					<header className="App-header-old">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<p></p>
				<Button color="danger">Danger!</Button>

				<Footer />
			</div>
		);
	}
}

export default App;
