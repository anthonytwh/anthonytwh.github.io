import React, { Component} from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText, 
	Nav, NavItem, Row, Col } from 'reactstrap';

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
			<div>
				<Card className="App-footer">
					<CardBody className="App-footer-body">
						<Row> 
							<Col>
								<CardTitle><CardHeader>Connect With Me!</CardHeader></CardTitle>
								<CardText><p> Loren ipsum </p></CardText>

							</Col>

							<Col>
								<CardHeader><u>Social Media</u></CardHeader>
								<CardText>
										<Nav Vertical>
											<Col><p align="right">
												<NavItem>
													<p><FontAwesomeIcon icon={faGithub} size="lg"/></p>
												</NavItem>

												<NavItem>
													<p><FontAwesomeIcon icon={faLinkedin} size="lg" /></p>
												</NavItem>

												<NavItem>
													<p><FontAwesomeIcon icon={faInstagram} size="lg" /></p>
												</NavItem>

												<NavItem>
													<p><FontAwesomeIcon icon={faMedium} size="lg" /> </p>
												</NavItem></p>
											</Col>

											<Col><p align="left">
												<NavItem>
													<p><a href="#"> Github </a></p>
												</NavItem>

												<NavItem>
													<p><a href="#">  Linkedin </a></p>
												</NavItem>

												<NavItem>
													<p><a href="#">  Instagram </a></p>
												</NavItem>

												<NavItem>
													<p><a href="#">  Medium </a></p>
												</NavItem></p>
											</Col>
										</Nav>
								</CardText>
							</Col>

							<Col>
								<CardHeader><u>Contact</u></CardHeader>
								<p>email</p>
								<p>city</p>
								<p>website</p>
							</Col>

						</Row>
					</CardBody>
					<CardFooter className="App-footer-foot"> Anthony Tam: anthonyt.ca </CardFooter>
				</Card>
			</div>
			)
	}
}

export default Footer;