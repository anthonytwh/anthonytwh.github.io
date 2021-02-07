import React, { Component} from 'react';
import { Card, Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';
import Responsive from 'react-responsive-decorator';

import '../assets/styles.css';


class ContactCard extends Component {

    constructor (props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { 
            popoverOpen: false,
            isMobile: false 
        };
    }

    componentDidMount() {
        this.props.media({ minWidth: 1440 }, () => {
            this.setState({
                isMobile: false
            });
        });

        this.props.media({ maxWidth: 1440 }, () => {
            this.setState({ 
                isMobile: true
            });
        });
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render () {
        const { isMobile } = this.state;
        
        return (
            <div>
                {isMobile ?
                // Mobile //
                    <Card className="Contact-mobile">
                        <Form className="Contact-form" method="POST" action="https://formspree.io/contact@anthonyt.ca">
                            <Row form>
                                <FormGroup>
                                    <Input className="Contact-honey" type="text" name="_gotcha" id="pre-text" placeholder="Text"/>
                                </FormGroup>
                                <Col>
                                    <FormGroup>
                                        <Input className="Contact-input-mobile" type="name" name="name" id="contactName" placeholder="Name" />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Input className="Contact-input-mobile" type="email" name="email" id="contactEmail" placeholder="Email" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col>
                                    <FormGroup>
                                        <Input className="Contact-input-mobile" type="subject" name="subject" id="contactSubject" placeholder="Subject" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col>
                                    <FormGroup>
                                        <Input className="Contact-input-mobile" type="textarea" name="message" id="contactMessage" placeholder="Message" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col>
                                <br></br>
                                    <Button className="Contact-button-mobile" type="submit"> Send </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card>:
                    // Not Mobile //
                        <Card className="Contact">
                        <Form className="Contact-form" method="POST" action="https://formspree.io/contact@anthonyt.ca">
                            <Row form>
                                <FormGroup>
                                    <Input className="Contact-honey" type="text" name="_gotcha" id="pre-text" placeholder="Text"/>
                                </FormGroup>
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
                                    <Button className="Contact-button" type="submit"> Send </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                }
            </div>
            )
    }
}

export default Responsive(ContactCard);