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
					<h1 className="Main-title"> Anthony Tam </h1>
						<p className="Main-subtitle"> Cyber Security and Software Development </p>
		    </div>
		)
	}
}

export default Main;