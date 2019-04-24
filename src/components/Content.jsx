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
					<h1 className="Content-title"> Section in Progress ! </h1>
					<p className="Content-header"> Please continue below. </p>
				</Container>
		    </div>
		)
	}
}

export default Content;