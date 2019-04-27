import React, { Component} from 'react';
import { Card, Row, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';

import '../assets/styles.css';
import photo from '../assets/profilephoto.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'


class About extends Component {

	constructor (props){
		super(props);
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
		}
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