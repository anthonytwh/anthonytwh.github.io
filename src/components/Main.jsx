import React, { Component, createRef } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';

import '../assets/styles.css';
import Resume from '../resources/Anthony_Resume.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

class Main extends Component {

	constructor (props){
		super(props);
		this.about = createRef();
		this.state = { currOpacity: 1 };
	}

	componentDidMount () { 
		window.onscroll =()=>{ 
			if (window.scrollY < 750){
				this.setState({currOpacity: 1})
			}
			if (750 <= window.scrollY){
				const newOpacity = (200 - ((Math.ceil(window.scrollY/ 25)*25) - 750))/200;
				this.setState({currOpacity: newOpacity})
			}
		};
		console.log("did this log?")
		// this.clickAbout.scrollIntoView();
	}

	render () {
		const opacity = Math.min(this.state.currOpacity, 1);
		return (
		    <div className="Main">
		    	<Jumbotron className="Main-jumbo">
		    		<Row className="Main-heading">
		    			<Col>
							<h1 className="Main-title"> Anthony Tam </h1>
							<p className="Main-subtitle"> Data Science, Cyber Security, Software Development </p>
						</Col>
					</Row>
					<Row className="Main-body">
						<Col>
							<a href="https://www.linkedin.com/in/anthony-tam/">
							<FontAwesomeIcon className="Main-icons" icon={faLinkedin} size="3x"/></a></Col>
						<Col>
							<a href="https://github.com/anthonytwh">
							<FontAwesomeIcon className="Main-icons" icon={faGithub} size="3x" /></a></Col>
						<Col>
							<a href= {Resume}>
							<FontAwesomeIcon className="Main-icons" icon={faFileAlt} size="3x" /></a></Col>
						<Col>
							<a href="mailto:contact@anthonyt.ca">
							<FontAwesomeIcon className="Main-icons" icon={faEnvelope} size="3x" /></a></Col>
					</Row>
				</Jumbotron>
		    	<span className="Main-arrow" style={{ opacity }}>
					<FontAwesomeIcon className="Main-arrow-icon" icon={faAngleDoubleDown} size="3x" />
				</span>
		    </div>
		)
	}
}

export default Main;