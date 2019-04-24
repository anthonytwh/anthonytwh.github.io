import React, { Component} from 'react';
import { Card, Row, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';

import '../assets/styles.css';
import photo from '../assets/profilephoto.jpg';


class About extends Component {

	constructor (props){
		super(props);
	}

	render () {
		return (
		    <div>
				<Row className="About-title-row">
					<h1 className="About-title">About Me</h1>
				</Row>
				<Row>
					<Col>
						<Toast className="About-toast">
							<ToastHeader className="About-animate">
								<span> <p> Product Design & Software Development </p> </span>
								<span> <p> Application Security & Cyber Security </p>  </span>
								<span> <p> Global Finance & Investing </p> </span>
								<span> <p> Food + Travel </p> </span>
							</ToastHeader>
							<ToastBody className="About-body-left">
									<p className="About-body-paragraph"> 
									Anthony is an Engineering & Management Graduate with a passion for product design and software development. 
									He loves to collaborate with others to bring new ideas to light creating, user-oriented and well designed products and solutions. 
									With an engineering and management background, he is always seeking new opportunities in the tech and finance sectors to grow and develop with rising organizations and talent. 
									Feel free to reach out and connect with me! 
									</p>
							</ToastBody>
						</Toast>
					</Col>

					<Col>
						<div className="About-body-right">
							<img src={photo} width="320" height="256" className="About-body-photo" />
						</div>
					</Col>
				</Row>
		    </div>
	    )
	}
}

export default About;