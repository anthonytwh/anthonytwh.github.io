import React, { Component} from 'react';
import { Card, CardFooter, CardBody, CardTitle, CardText, Jumbotron, Row, Col } from 'reactstrap';

import '../assets/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram, faMedium} from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {

	constructor (props){
		super(props);
	}

	render() {
		return (
			<div className="Footer-div">
				<Card>
					<CardBody className="Footer-body">
						<Row> 
							<Col>
								<CardTitle>Connect With Me!</CardTitle>
								<CardText><p> See my social media on the right</p></CardText>
							</Col>
							<Col>
								<CardTitle></CardTitle>
							</Col>
							<Col>
								<CardTitle className="Footer-blank">Peeka-Boo!</CardTitle>
								<CardText>
									<Row>
										<Col xs={{ size: 'auto', offset: 4 }}><FontAwesomeIcon icon={faGithub} size="lg" /></Col>
										<Col xs={{ size: 'auto', offset: 0 }}><FontAwesomeIcon icon={faLinkedin} size="lg" /></Col>
										<Col xs={{ size: 'auto', offset: 0 }}><FontAwesomeIcon icon={faInstagram} size="lg" /></Col>
										<Col xs={{ size: 'auto', offset: 0 }}><FontAwesomeIcon icon={faMedium} size="lg" /></Col>
									</Row>
								</CardText>
							</Col>
						</Row>
					</CardBody>
					<CardFooter className="Footer-foot"> (C) anthonyt.ca </CardFooter>
				</Card>
			</div>
			)
	}
}

export default Footer;