import React, { Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';

import '../assets/styles.css';


class Main extends Component {

	constructor (props){
		super(props);
	}

	render () {
		return (
		    <div className="Main-jumbo">
					<h1 className="Main-title">Anthony Tam</h1>
						<p className="Main-subtitle">Hello and welcome to my website! </p>
		    </div>
		)
	}
}

export default Main;