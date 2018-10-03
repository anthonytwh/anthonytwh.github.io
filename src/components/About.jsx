import React, { Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';

import '../assets/styles.css';


class About extends Component {

	constructor (props){
		super(props);
	}

	render () {
		return (
	    <div>
				<Container fluid>
					<h1 className="Mid-title">About</h1>
					<p className="Mid-sub">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
				</Container>
	    </div>
			)
	}

}

export default About;
