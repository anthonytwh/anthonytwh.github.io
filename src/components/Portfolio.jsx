import React, { Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';

import '../assets/styles.css';


class Portfolio extends Component {

	constructor (props){
		super(props);
	}

	render () {
		return (
		    <div>
				<Container fluid>
					<h1 className="Portfolio-title">Portfolio</h1>
					<p className="Portfolio-header">aoiejrgoaijeroigajeorijgaoirejgoaijerg.</p>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<p className="Portfolio-body">going to fill this space</p>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<p className="Portfolio-body">with lots of space!</p>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
				</Container>
		    </div>
			)
	}

}

export default Portfolio;
