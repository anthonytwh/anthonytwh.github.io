import React, { Component, createRef } from 'react';
import { Row, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';

import '../assets/styles.css';
import photo from '../assets/profilephoto.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'


class About extends Component {

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
		// console.log("scrollY", window.scrollY, (200 - ((Math.ceil(window.scrollY/ 25)*25) - 750))/200)
		// console.log("opacity:", opacity)
		return (
		    <div>
		    	<span className="Main-arrow" style={{ opacity }}>
					<FontAwesomeIcon className="Main-arrow-icon" icon={faAngleDoubleDown} size="3x" />
				</span>
				<Row className="About-title-row">
					<h1 className="About-title" id="about" ref={this.about}>About Me</h1>
				</Row>
				<Row>
					<Col>
						<Toast className="About-toast">
							<ToastHeader className="About-animate">
								<span> <p> Product Design and Software Development </p></span>
								<span> <p> Cyber Security and analytics</p></span>
								<span> <p> Finance and Investing </p></span>
								<span> <p> Food + Travel </p></span>
							</ToastHeader>
							<ToastBody className="About-body-left">
									<p className="About-body-paragraph"> 
									Anthony is currently a Cyber Security Threat Analyst and Developer at Darktrace, an AI/ML cyber security company, based in Toronto. 
									<br></br><br></br>
									His primary role is to support the Canadian offices in pre sales, post sales and threat intelligence as the lead analyst, and North 
									American operations as the lead model developer.
									He has also worked on multiple internal tools and customer-facing software for improving integrations and custom use-cases of the Darktrace 
									product for strategic accounts. He is always working on solutions to provide improvements in this product space.
									<br></br><br></br>
									Anthony is always open to learning about new and exciting opportunities in the tech and fintech fields. Please feel free to reach out and connect! 
									</p>
							</ToastBody>
						</Toast>
					</Col>

					<Col>
						<div className="About-body-right">
							<br></br><br></br>
							<img src={photo} width="320" height="256" className="About-body-photo" alt="Anthony Tam" />
						</div>
					</Col>
				</Row>
		    </div>
	    )
	}
}

export default About;