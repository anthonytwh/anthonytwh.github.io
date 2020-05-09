import React, { Component, createRef } from 'react';
import { Card, Container } from 'reactstrap';

import Contact from '../components/Contact.jsx'
import '../assets/styles.css';


class Portfolio extends Component {

	constructor (props){
		super(props);
		this.clickref = createRef();
	}

	render () {
		return (
		    <div>
				<Container className="Portfolio" id="contact" ref={this.clickref}>
			    	<Card className="Contact-badge" id='ContactMe'> Contact Me </Card>
			    		<Contact/>
				</Container>
		    </div>
			)
	}
}

export default Portfolio;