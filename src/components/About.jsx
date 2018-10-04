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
					<br></br>
					<br></br>
					<h1 className="About-title">About Me</h1>

					<br></br>
					<p className="About-header">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>

					<br></br>
					<div className="About-body-left">
						<p> Things about me, blah blah blah. </p>
					</div>

					<div className="About-body-right">
						<p> Things about me, blah blah blah. </p>
					</div>

					<br></br>
					<br></br>
				</Container>
	    </div>
			)
	}

}

export default About;
