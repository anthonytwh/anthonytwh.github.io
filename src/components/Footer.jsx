import React, { Component} from 'react';
import { Card, CardFooter, CardBody, CardTitle, CardText, Jumbotron, Row, Col } from 'reactstrap';

import '../assets/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram, faMedium} from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {

	constructor (props){
		super(props);
	}

	render() {
		return (
			<div className="Footer-div">
				<Row> 
					<Col>
						<h1 className="Footer-head"> Connect with me! </h1>
						<br></br>
						<p className="Footer-body"> hello@anthonyt[.]ca </p>
					</Col>
					<Col>
						<br></br>
						<br></br>
					</Col>
					<Col>
						<br></br>
						<br></br>
						<p>
							<Row>
								<Col xs={{ size: 'auto', offset: 4 }}>
									<a className="Footer-icons" href="https://github.com/anthonytwh">
										<FontAwesomeIcon icon={faGithub} size="lg" /></a></Col>
								<Col xs={{ size: 'auto', offset: 0 }}>
									<a className="Footer-icons" href="https://www.linkedin.com/in/anthony-tam/">
										<FontAwesomeIcon icon={faLinkedin} size="lg" /></a></Col>
								<Col xs={{ size: 'auto', offset: 0 }}>
									<a className="Footer-icons" href="https://www.instagram.com/anthonyytam/">
										<FontAwesomeIcon icon={faInstagram} size="lg" /></a></Col>
								<Col xs={{ size: 'auto', offset: 0 }}>
									<a className="Footer-icons" href="https://medium.com/@AnthonyTam">
										<FontAwesomeIcon icon={faMedium} size="lg" /></a></Col>
							</Row>
						</p>
					</Col>
				</Row>
				<br></br>
				<div className="Footer-foot"> 
					(c) anthonyt.ca 
				</div>
			</div>	
			)
	}
}

export default Footer;