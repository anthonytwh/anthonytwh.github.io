import React, { Component} from 'react';
import { Jumbotron, Card, Row, Col } from 'reactstrap';

import '../assets/styles.css';
import Resume from '../assets/Anthony_Resume.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faEnvelope, faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Main extends Component {

	constructor (props){
		super(props);
	}

	render () {
		return (
		    <div>
		    	<Jumbotron className="Main-jumbo">
		    		<Row className="Main-heading">
		    			<Col>
							<h1 className="Main-title"> Anthony Tam </h1>
							<p className="Main-subtitle"> Software Developer, Cyber Security, Product Design </p>
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
							<a href= {Resume} target = "_blank">
							<FontAwesomeIcon className="Main-icons" icon={faFileAlt} size="3x" /></a></Col>
						<Col>
							<a href="mailto:contact@anthonyt.ca">
							<FontAwesomeIcon className="Main-icons" icon={faEnvelope} size="3x" /></a></Col>
					</Row>
				</Jumbotron>
				<Card className="Main-arrow">
					<Row>
						<Col>
							<p> Yoyoyoyoyo! </p>
						</Col>
					</Row>
					<Row>
						<Col>
							<FontAwesomeIcon className="Main-arrow-icon" icon={faAngleDoubleDown} size="3x" />
						</Col>
					</Row>

				</Card>
		    </div>
		)
	}
}

export default Main;