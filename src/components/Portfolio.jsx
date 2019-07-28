import React, { Component, createRef } from 'react';
import { Button, UncontrolledCollapse, Card, Container, Row, Col } from 'reactstrap';

import Contact from '../components/Contact.jsx'
import '../assets/styles.css';


class Portfolio extends Component {

	constructor (props){
		super(props);
		this.clickref = createRef();
	}

	render () {
		return (
		    <div>
				<Container className="Portfolio" id="portfolio" ref={this.clickref}>
					<Row>
						<h1 className="Portfolio-title">Portfolio</h1>
					</Row>
			    	<Button className="Portfolio-badge" id="Employment"> Employment </Button>
			    	<UncontrolledCollapse toggler="#Employment">
						<Card className="Portfolio-card">
							<Row className="Portfolio-row">
								<Col>
									<p className="Portfolio-header"> Darktrace </p>
									<Row>
										<Col><p className="Portfolio-body" style={{ textIndent: "2.5%" }}> Cyber Threat Analyst </p></Col>
										<Col><p className="Portfolio-body" style={{ textIndent: "2.5%", textAlign: "right" }}> Toronto/Remote, 2018 - Present</p></Col>
									</Row>
									<p className="Portfolio-body" style={{ textIndent: "5%" }} > • Canadian lead analyst and subject matter expert, supporting regional strategic accounts in pre/post sale cycles.</p>
									<p className="Portfolio-body" style={{ textIndent: "5%" }} > • Developed and maintained the Darktrace Python wrapper/library for the Darktrace REST API.</p>
									<p className="Portfolio-body" style={{ textIndent: "5%" }} > • Created new threat models to extend product capabilties and improved alerting accuracy of various stock models using Gitlab CI/CD.</p>
									<p className="Portfolio-body" style={{ textIndent: "5%" }} > • Researched and investigated active threats on client networks, compiling threat intelligence reports for global customers.</p>
									<p className="Portfolio-body" style={{ textIndent: "5%" }} > • Contributed over 50 IOC's to the internal Darktrace threat intelligence feed from threat research activities.</p>
								</Col>
							</Row>
							<Row className="Portfolio-row">
								<Col>
									<Row>
										<Col><p className="Portfolio-body" style={{ textIndent: "2.5%" }}> Cyber Security Engineer </p></Col>
										<Col><p className="Portfolio-body" style={{ textIndent: "2.5%", textAlign: "right" }}> Toronto, 2017 - 2018 </p></Col>
									</Row>
									<p className="Portfolio-body" style={{ textIndent: "5%" }}>  • Managed enterprise integrations of Darktrace products for pre/post sale clients across virtual, cloud, ICS and SaaS environments.</p>
									<p className="Portfolio-body" style={{ textIndent: "5%" }}>  • Developed an SSH management tool to improve workflow and operational security for internal technology teams.</p>
									<p className="Portfolio-body" style={{ textIndent: "5%" }}>  • Traveled weekly to lead onsite technical integrations with the customer IT/security teams, managers and executives.</p>
									<p className="Portfolio-body" style={{ textIndent: "5%" }}>  • Created technical training documentation for virtual and cloud deployments for internal training and the Darktrace Customer Portal.</p>
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

			    	<Button className="Portfolio-badge" id='Education'> Education </Button>
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

			    	<Button className="Contact-badge" id='ContactMe'> Contact </Button>
			    	<UncontrolledCollapse toggler='#ContactMe'>
			    		<Contact/>
			    	</UncontrolledCollapse>
				</Container>
		    </div>
			)
	}
}

export default Portfolio;