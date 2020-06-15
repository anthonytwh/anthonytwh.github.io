import React, { Component} from 'react';
import { Row, Col } from 'reactstrap';

import '../assets/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram, faMedium} from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {

	constructor (props){
		super(props);
	}

	render() {
		return (
			<div>
				<Col xs="auto" >
					<Row className="Footer" id="contact">
						<Col xs={{ size: 'auto', offset: 4 }}>
							<a href="https://github.com/anthonytwh">
								<FontAwesomeIcon className="Footer-icons" icon={faGithub} size="lg" /></a></Col>
						<Col xs={{ size: 'auto', offset: 0 }}>
							<a href="https://www.linkedin.com/in/anthony-tam/">
								<FontAwesomeIcon className="Footer-icons" icon={faLinkedin} size="lg" /></a></Col>
						<Col xs={{ size: 'auto', offset: 0 }}>
							<a href="https://www.instagram.com/anthonyclimbs/">
								<FontAwesomeIcon className="Footer-icons" icon={faInstagram} size="lg" /></a></Col>
						<Col xs={{ size: 'auto', offset: 0 }}>
							<a href="https://medium.com/@AnthonyTam">
								<FontAwesomeIcon className="Footer-icons" icon={faMedium} size="lg" /></a></Col>
					</Row>
					<Row className="Footer-foot"> 
						© 2017-2020, AnthonyT.ca
					</Row>
				</Col>
			</div>	
			)
	}
}

export default Footer;