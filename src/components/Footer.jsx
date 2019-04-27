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
				<div className="Footer">
					<Row> 
						<Col>
							<br></br>
							<h1 className="Footer-head"> Connect with me! </h1>
							<br></br>			
						</Col>
						<Col></Col>
						<Col>
							<br></br>
							<p><Row>
									<Col xs={{ size: 'auto', offset: 4 }}>
										<a href="https://github.com/anthonytwh">
											<FontAwesomeIcon className="Footer-icons" icon={faGithub} size="lg" /></a></Col>
									<Col xs={{ size: 'auto', offset: 0 }}>
										<a href="https://www.linkedin.com/in/anthony-tam/">
											<FontAwesomeIcon className="Footer-icons" icon={faLinkedin} size="lg" /></a></Col>
									<Col xs={{ size: 'auto', offset: 0 }}>
										<a href="https://www.instagram.com/anthonyytam/">
											<FontAwesomeIcon className="Footer-icons" icon={faInstagram} size="lg" /></a></Col>
									<Col xs={{ size: 'auto', offset: 0 }}>
										<a href="https://medium.com/@AnthonyTam">
											<FontAwesomeIcon className="Footer-icons" icon={faMedium} size="lg" /></a></Col>
								</Row></p>
						</Col>
					</Row>
				</div>
				<div className="Footer-foot"> 
					© 2017-2019, Anthonyt.ca
				</div>
			</div>	
			)
	}
}

export default Footer;