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
								<span> <p> Product Design & Software Development </p></span>
								<span> <p> Application Security & Security Research </p></span>
								<span> <p> Global Finance & Investing </p></span>
								<span> <p> Food + Travel </p></span>
							</ToastHeader>
							<ToastBody className="About-body-left">
									<p className="About-body-paragraph"> 
									Anthony graduated from the Engineering & Management program at McMaster University. 
									He is currently a Cyber Security/Threat Analyst at Darktrace, an AI cyber security company, based in the Toronto office. 
									His primary role is to support the Canadian offices in pre sales, post sales and threat intelligence as the regional Subject Matter Expert. 
									He has also developed internal tools and customer-facing software for improving custom integrations of the Darktrace product, and is always working on solutions to provide improvements in this product space. 
									<br></br><br></br>
									Anthony is always looking for new and exciting opportunities to learn more about product/software development. Feel free to reach out and connect!
									</p>
							</ToastBody>
						</Toast>
					</Col>

					<Col>
						<div className="About-body-right">
							<img src={photo} width="320" height="256" className="About-body-photo" alt="Anthony Tam" />
						</div>
					</Col>
				</Row>
		    </div>
	    )
	}
}

export default About;