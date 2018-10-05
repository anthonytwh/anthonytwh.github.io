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

					
					<div className="About-header">
						<br></br>
						<div className="About-animate">
							<span> <p> Engineering </p> </span>
							<span> <p> Product Design </p> </span>
							<span> <p> Finance & Investing </p>  </span>
							<span> <p> Food & Coffee </p> </span>
							<span> <p> Travelling </p> </span>
						</div>
					</div>

					<div className="About-body-left">
						<br></br>
						<br></br>
						<p> Anthony is an Engineering Management Graduate with a </p>
						<p> passion for product design, software development, and </p>
						<p> finance. He loves to collaborate on developing new ideas </p>
						<p> to create user-oriented products and solutions with the </p>
						<p> latest technologies. With a background in both engineering </p>
						<p> and business disciplines, he is always seeking new </p>
						<p> challenges and opportunities to grow and develop his </p>
						<p> skill set.</p>
					</div>

					<div className="About-body-right">
						<br></br>
						<br></br>
						<img src={photo} width="300" height="240"/>
					</div>
				</Container>
	    </div>
			)
	}

}

export default About;
