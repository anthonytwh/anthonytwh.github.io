import React, { Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../assets/styles.css';


class Portfolio extends Component {

	constructor (props){
		super(props);
	}

	render () {
		return (
		    <div>
				<Container className="Portfolio">
					<Row >
						<Col>
						<h1 className="Portfolio-title"> Employment </h1>
						</Col>
					</Row>
					<Row className="Portfolio-row">
						<Col>
							<p className="Portfolio-header"> Darktrace </p>
							<p className="Portfolio-body" style={{ textIndent: "2.5%" }}> Cyber Security Analyst </p>
							<p className="Portfolio-body" style={{ textIndent: "5%" }} > • Supported the Canadian Darktrace offices as the lead cyber security analyst and regional subject matter expert for pre/post sales cycle. </p>
							<p className="Portfolio-body" style={{ textIndent: "5%" }} > • Developed and maintained the Darktrace Python library, improving custom integrations for enhanced analysis and reporting. </p>
							<p className="Portfolio-body" style={{ textIndent: "5%" }} > • Researched active and potential threats on client networks, developing threat intelligence reports for contract customers. </p>
							<p className="Portfolio-body" style={{ textIndent: "5%" }} > • Improved detection of various threat models by reducing false positives and increasing alert accuracy. </p>
						</Col>
					</Row>
					<Row className="Portfolio-row">
						<Col>
							<p className="Portfolio-body" style={{ textIndent: "2.5%" }}> Cyber Security Engineer </p>
							<p className="Portfolio-body" style={{ textIndent: "5%" }}>  • Managed enterprise integrations of Darktrace products for pre/post sale clients of all infrastructure sizes and technologies. </p>
							<p className="Portfolio-body" style={{ textIndent: "5%" }}>  • Developed an internal SSH management tool to improve workflow and operational security for global technology teams. </p>
							<p className="Portfolio-body" style={{ textIndent: "5%" }}>  • Create technical documentation for internal training and for the Client Customer Portal. </p>
						</Col>
					</Row>
					<Row className="Portfolio-row">
						<Col>
							<p className="Portfolio-header"> Zebra Technologies </p>
							<p className="Portfolio-body" style={{ textIndent: "2.5%" }}> Category Management Analyst (Co-op) </p>
							<p className="Portfolio-body" style={{ textIndent: "5%" }}> • Led RFP/RFQ project with electrical and semiconductor suppliers to create cost-savings in tail-spend.</p>
							<p className="Portfolio-body" style={{ textIndent: "5%" }}> • Developed internal Excel/VBA dashboard for internal Category Management team to improve financial and operational risk analysis and report quality. </p>
						</Col>
					</Row>
					<br></br>
					<br></br>
					<br></br>
					<Row className="Portfolio-row">
						<Col>
							<h1 className="Portfolio-title"> Education </h1>
						</Col>
					</Row>
					<Row className="Portfolio-row">
						<Col>
							<p className="Portfolio-header"> McMaster University</p>
							<p className="Portfolio-body" style={{ textIndent: "2.5%" }}> B.Eng.Mgt - Mechanical Engineering & Management </p>
							<p className="Portfolio-body" style={{ textIndent: "5%" }}> • Received McMaster Engineering Student Mobility Award for International Experience in 2015. </p>
							<p className="Portfolio-body" style={{ textIndent: "5%" }}> • Engineering Capstone: Mechanial Tracking for Arthoscopic Surgery </p>
						</Col>
					</Row>
					<Row className="Portfolio-row">
						<Col>
							<p className="Portfolio-header"> Nanyang Technological University </p>
							<p className="Portfolio-body" style={{ textIndent: "2.5%" }}> Study Abroad (B.Eng.Mgt)</p>
							<p className="Portfolio-body" style={{ textIndent: "5%" }}> • I studied a bit, traveled some places, and learned a whole lot about myself and other cultures. </p>
							<p className="Portfolio-body" style={{ textIndent: "5%" }}> • 3rd place @ Ideas Inc Hackathon: Joy Bike Share </p>

						</Col>
					</Row>
				</Container>
		    </div>
			)
	}
}

export default Portfolio;