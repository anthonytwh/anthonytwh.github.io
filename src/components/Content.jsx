import React, { Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';

import '../assets/styles.css';

class Content extends Component {

	constructor (props){
		super(props);
	}

	render () {
		return (
		    <div>
					<Container fluid>
						<h1 className="Content-title">Content</h1>
						<p className="Content-header">Some more random content</p>
					</Container>
		    </div>
			)
	}

}

export default Content;