import React, { Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';

import '../assets/styles.css';
import photo from '../assets/profilephoto.jpg';


class About extends Component {

	constructor (props){
		super(props);
	}

	render () {
		return (
		    <div>
				<Container fluid>
					<h1 className="About-title">About Me</h1>
					<div className="About-animate">
						<span> <p> Product Design & Development </p> </span>
						<span> <p> Application Security & Privacy </p>  </span>
						<span> <p> Global Finance & Investing </p> </span>
						<span> <p> Food + Travel </p> </span>
					</div>
					<div className="About-body-left">
						<br></br><br></br>
						<p className="About-body-paragraph"> 
						Anthony is an Engineering & Management Graduate with a 		<br></br>
						passion for product design and software development. He 	<br></br>
						loves to collaborate with others to bring new ideas to 		<br></br>
						light creating, user-oriented and well designed products	<br></br>
						and solutions. With an engineering and management 			<br></br>
						background, he is always seeking new opportunities in 		<br></br>
						the tech and finance sectors to grow and develop with 		<br></br>
						rising organizations and talent. Feel free to connect 		<br></br>
						with me below! </p>
					</div>
					<div className="About-body-right">
						<br></br><img src={photo} width="320" height="256" className="About-body-photo" />
					</div>
				</Container>
		    </div>
	    )
	}
}

export default About;