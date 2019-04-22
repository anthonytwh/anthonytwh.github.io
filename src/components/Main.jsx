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
					<h1 className="Main-title">Title</h1>
						<p className="Main-subtitle">Subtitle</p>
		    </div>
		)
	}
}

export default Main;