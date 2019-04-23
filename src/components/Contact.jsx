import React, { Component} from 'react';
import { Card, Col, Row, Button, Form, FormGroup, Input, Label, Toast, ToastBody, ToastHeader } from 'reactstrap';

import '../assets/styles.css';


class Contact extends Component {

	constructor (props){
		super(props);
	}

	render () {
		return (
			<div>
				<Card className="Contact">
					<Label className="Contact-label"> Get in Touch </Label>
					<Form className="Contact-form">
						<Row form>
							<Col>
								<FormGroup>
									<Input className="Contact-input" type="name" name="name" id="contactName" placeholder="Name" />
								</FormGroup>
							</Col>
							<Col>
								<FormGroup>
									<Input className="Contact-input" type="email" name="email" id="contactEmail" placeholder="Email" />
								</FormGroup>
							</Col>
						</Row>
						<Row form>
							<Col>
								<FormGroup>
									<Input className="Contact-input" type="subject" name="subject" id="contactSubject" placeholder="Subject" />
								</FormGroup>
							</Col>
						</Row>
						<Row form>
							<Col>
								<FormGroup>
									<Input className="Contact-input" type="textarea" name="message" id="contactMessage" placeholder="Message" />
								</FormGroup>
							</Col>
						</Row>
						<Row form>
							<Col>
								<Button className="Contact-button"> Send </Button>
							</Col>
						</Row>
					</Form>
				</Card>
			</div>
			)
	}
}

export default Contact;