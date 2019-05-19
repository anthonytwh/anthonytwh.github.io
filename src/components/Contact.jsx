import React, { Component} from 'react';
import { Container, Card, Col, Row, Button, Form, FormGroup, Input, Popover, PopoverBody } from 'reactstrap';

import '../assets/styles.css';


class Contact extends Component {

	constructor (props){
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { popoverOpen: false };
	}

	toggle() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	}

	render () {
		return (
			<div>
				<Card className="Contact">
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
							<br></br>
								<Button className="Contact-button" id="temp_popover" type="button"> Send </Button>
								<Popover className="Contact-popover" placement="bottom" isOpen={this.state.popoverOpen} target="temp_popover" toggle={this.toggle}>
									<PopoverBody>** Contact Form still in progress! ** </PopoverBody>
								</Popover>
							</Col>
						</Row>
					</Form>
				</Card>
			</div>
			)
	}
}

export default Contact;