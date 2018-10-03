import React, { Component } from 'react';
import { Button } from 'reactstrap';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Main from './components/Main.jsx'
import './assets/styles.css';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// library.add(faGithub, faLinkedin, faInstagram, faEnvelope)



class App extends Component {
	render() {
		return (
			<div>
				<div className="App">
					<Header/>
					<Main />
					<Button className="test-button" color="danger">Danger!</Button>
				</div>
				<div>
				</div>
				<div className="Footer">
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
