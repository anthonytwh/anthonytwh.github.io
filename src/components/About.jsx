import React, { Component, createRef } from 'react';
import { Button, Row, Col, Toast, ToastBody, ToastHeader, Card, UncontrolledCollapse} from 'reactstrap';

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
				<Row className="About-title-row" id="about" ref={this.about}>
				</Row>
				<Row xs="4">
					<Col>
						<Toast className="About-toast">
							<ToastHeader className="About-animate">
								<span> <p> Software Development </p></span>
								<span> <p> Cyber Security</p></span>
								<span> <p> Data Science </p></span>
								<span> <p> Product Design </p></span>
							</ToastHeader>
							<ToastBody className="About-body-left">
									<p className="About-body-paragraph"> 
									Anthony is currently a Lead Security Developer at Darktrace, a next-gen cyber security company using artificial intelligence and machine learning to detect and autonomously respond to cyber threats and anomalies in real-time.
									<br></br><br></br>
									He is the lead developer in North America for threat model development, working in research and development to improve and develop new threat detection capabilities in the network, cloud, and SaaS platforms. He also plays key role in supporting technical and sales operations as a Darktrace subjet matter expert. 
									<br></br><br></br>
									Anthony is always open and interested in learning about new and exciting opportunities in the tech industry. Happy to connect with you! 
									</p>
							</ToastBody>
						</Toast>
					</Col>

					<Col xs="6">
						<Row>
							<Button className="Portfolio-badge" id="Employment"> <p> Employment </p> </Button>
							<Button className="Portfolio-badge" id='Education'> <p> Education </p> </Button>
							
						</Row>
						<Row>

						<UncontrolledCollapse toggler="#Employment">
								<Card className="Portfolio-card">
									<Row className="Portfolio-row">
										<Col>
											<p className="Portfolio-header"> Darktrace </p>
											<Row>
												<Col><p className="Portfolio-body" style={{ textIndent: "2.5%"}}> Cyber Threat Analyst </p></Col>
												<Col><p className="Portfolio-body" style={{ textIndent: "2.5%", textAlign: "right" }}> Toronto/Remote, 2018 - Present</p></Col>
											</Row>
											<p className="Portfolio-body" style={{ textIndent: "5%" }} > • Lead Canadian analyst, supporting strategic accounts with technical expertise in pre and post-sale customer cycle.</p>
											<p className="Portfolio-body" style={{ textIndent: "5%" }} > • Developed and maintained the Python Darktrace API library, greatly simplifying the use of the Darktrace REST API.</p>
											<p className="Portfolio-body" style={{ textIndent: "5%" }} > • Model Development Team: Created and refined threat models (network, cloud and SaaS), improving detections and </p>
											<p className="Portfolio-body" style={{ textIndent: "5%" }} >		alert accuracyusing custom analytics with CI/CD and experimental testing tools.</p>
											<p className="Portfolio-body" style={{ textIndent: "5%" }} > • Researched and investigated active threats on client networks, compiling threat intelligence reports for global customers.</p>
											<p className="Portfolio-body" style={{ textIndent: "5%" }} > • Contributed over 50 IOC's to the internal Darktrace threat intelligence feed from threat research activities.</p>
											<p className="Portfolio-body" style={{ textIndent: "5%" }} > • Presented at customer-facing events, providing knowledge and expertise of the Darktrace product to existing clients.</p>
										</Col>
									</Row>
									<Row className="Portfolio-row">
										<Col>
											<Row>
												<Col><p className="Portfolio-body" style={{ textIndent: "2.5%" }}> Cyber Security Engineer </p></Col>
												<Col><p className="Portfolio-body" style={{ textIndent: "2.5%", textAlign: "right" }}> Toronto, 2017 - 2018 </p></Col>
											</Row>
											<p className="Portfolio-body" style={{ textIndent: "5%" }}>  • Managed Darktrace enterprise integrations for customers across virtual, cloud, and ICS/SCADA environments.</p>
											<p className="Portfolio-body" style={{ textIndent: "5%" }}>  • Developed an SSH management tool, improving workflow speed and operational security for internal technology teams.</p>
											<p className="Portfolio-body" style={{ textIndent: "5%" }}>  • Traveled weekly to lead onsite technical integrations with the customer security teams, managers and executives.</p>
											<p className="Portfolio-body" style={{ textIndent: "5%" }}>  • Wrote technical documentation for virtual and cloud deployments for internal and customer training.</p>
											<p className="Portfolio-body" style={{ textIndent: "5%" }}>  • Contributed to over 30% growth of the Canadian customer base from proof-of-value customer trials in one year.</p>
										</Col>
									</Row>
									<Row className="Portfolio-row">
										<Col>
											<p className="Portfolio-header"> Zebra Technologies </p>
											<Row>
												<Col><p className="Portfolio-body" style={{ textIndent: "2.5%" }}> Category Management Analyst (Co-op) </p></Col>
												<Col><p className="Portfolio-body" style={{ textIndent: "2.5%", textAlign: "right" }}> Mississauga, Summer 2016 </p></Col>
											</Row>
											<p className="Portfolio-body" style={{ textIndent: "5%" }}> • Led RFQ/RFP exercise with key vendors to consolidate and reduce cost on tail-spend semiconductor components.</p>
											<p className="Portfolio-body" style={{ textIndent: "5%" }}> • Created a dynamic Excel/VBA dashboard to automate monthly analysis and reports of vendor operational and financial risk.</p>
											<p className="Portfolio-body" style={{ textIndent: "5%" }}> • Provided training to global and regional teams to utilize the newly developed tools to improve the quality of monthly risk reports.</p>
										</Col>
									</Row>
								</Card>
							</UncontrolledCollapse>
							<UncontrolledCollapse toggler='#Education'>
								<Card className="Portfolio-card">
									<Row className="Portfolio-row">
										<Col>
											<p className="Portfolio-header"> McMaster University</p>
											<Row>
												<Col><p className="Portfolio-body" style={{ textIndent: "2.5%" }}> B.Eng.Mgt - Mechanical Engineering & Management </p></Col>
												<Col><p className="Portfolio-body" style={{ textIndent: "2.5%", textAlign: "right" }}> Hamilton, 2012 - 2017 </p></Col>
											</Row>	
											<p className="Portfolio-body" style={{ textIndent: "5%" }}> • Received McMaster Engineering Student Mobility Award for International Experience in 2015. </p>
											<p className="Portfolio-body" style={{ textIndent: "5%" }}> • Engineering Capstone: Mechanial Tracking for Arthoscopic Surgery <a className="Portfolio-href" href='https://github.com/anthonytwh/SurgicalTracking'> >>See Project </a></p>
										</Col>
									</Row>
									<Row className="Portfolio-row">
										<Col>
											<p className="Portfolio-header"> Nanyang Technological University </p>
											<Row>
												<Col><p className="Portfolio-body" style={{ textIndent: "2.5%" }}> Study Abroad (B.Eng.Mgt)</p></Col>
												<Col><p className="Portfolio-body" style={{ textIndent: "2.5%", textAlign: "right" }}> Singapore, 2014 - 2015 </p></Col>
											</Row>
											<p className="Portfolio-body" style={{ textIndent: "5%" }}> • Studied interesting courses, traveled a few places, and learned a whole lot about myself and SouthEast Asian cultures. </p>
											<p className="Portfolio-body" style={{ textIndent: "5%" }}> • 3rd place @ Ideas Inc Hackathon: Joy Bike Share <a className="Portfolio-href" href='https://1drv.ms/f/s!Anq2m7OkYqT4gR-v4qhIIa1B2bbZ'> >>See Project </a></p>
										</Col>
									</Row>
								</Card>
							</UncontrolledCollapse>
						</Row>
					</Col>
				</Row>
		    </div>
	    )
	}
}

export default About;