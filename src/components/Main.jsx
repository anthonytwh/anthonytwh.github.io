import React, { Component, createRef } from 'react';
import { Button, Jumbotron, Row, Col, Modal, ModalBody, ModalFooter} from 'reactstrap';
import Responsive from 'react-responsive-decorator';

import '../assets/styles.css';
import Resume from '../resources/AnthonyTam.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

class Main extends Component {

    // state = {
    //     isMobile: false
    // }

    constructor (props){
        super(props);
        this.about = createRef();
        this.toggleModal = this.toggleModal.bind(this);
        this.state = { 
            currOpacity: 1,
            showModal: false,
            isMobile: false
        };
    }

    componentDidMount () {
        this.props.media({ minWidth: 1200 }, () => {
            this.setState({
                isMobile: false
            });
        });

        this.props.media({ maxWidth: 1200 }, () => {
            this.setState({ 
                isMobile: true
            });
        });

        window.onscroll =()=>{ 
            if (window.scrollY < 750){
                this.setState({currOpacity: 1})
            }
            if (750 <= window.scrollY){
                const newOpacity = (200 - ((Math.ceil(window.scrollY/ 25)*25) - 750))/200;
                this.setState({currOpacity: newOpacity})
            }
        };
        // console.log("did this log?")
        // this.clickAbout.scrollIntoView();
    }

    toggleModal() {
        this.setState({
          showModal: !this.state.showModal
        })
      }

      click = (link) => {
        window.location = link;
        let clickhash = link.replace('/#', '');
        if (clickhash) {
            console.log("Jump to ", clickhash);
        }
    }

    render () {
        const { isMobile } = this.state;
        const opacity = Math.min(this.state.currOpacity, 1);

        return (
            <div>
            {isMobile ? 
                // Mobile //
                <div className="Main">
                    <Jumbotron className="Main-jumbo">
                        <Row className="Main-heading">
                            <Col>
                                <h1 className="Main-title-mobile"> Anthony Tam </h1>
                                <p className="Main-subtitle-mobile"> </p>
                            </Col>
                        </Row>
                        <Row className="Main-body-mobile">
                            <Col>
                                <a href="https://www.linkedin.com/in/anthony-tam/">
                                <FontAwesomeIcon className="Main-icons-mobile" icon={faLinkedin} size="2x"/></a></Col>
                            <Col>
                                <a href="https://github.com/anthonytwh">
                                <FontAwesomeIcon className="Main-icons-mobile" icon={faGithub} size="2x" /></a></Col>
                            <Col>
                                <a href={Resume}>
                                <FontAwesomeIcon className="Main-icons-mobile" icon={faFileAlt} size="2x" /></a></Col>
                                {/* <FontAwesomeIcon onClick={this.toggleModal} className="Main-icons-mobile" icon={faFileAlt} size="2x"/>
                                <Modal className="Main-modal" isOpen={this.state.showModal} toggle={this.toggleModal}>
                                        <ModalBody className="Main-modal-body"> Anthony's resume is currently unavailable. Please reach out below for information.</ModalBody>
                                        <ModalFooter className="Main-modal-footer">
                                            <Button classname="Main-modal-button" style={{ fontSize: "12px", color: "lightgrey" }} onClick={this.toggleModal}>Close</Button>
                                        </ModalFooter>
                                    </Modal></Col> */}
                            <Col>
                                <a href="mailto:contact@anthonyt.ca">
                                <FontAwesomeIcon className="Main-icons-mobile" icon={faEnvelope} size="2x" /></a></Col>
                        </Row>
                        </Jumbotron>
                        <span className="Main-arrow" style={{ opacity }}>
                            <FontAwesomeIcon className="Main-arrow-icon"  onClick={() => this.click('/#about')} icon={faAngleDoubleDown} size="2x" />
                        </span>
                </div>:
                    // Not Mobile //
                    <div className="Main">
                        <Jumbotron className="Main-jumbo">
                        <Row className="Main-heading">
                            <Col>
                                <h1 className="Main-title"> Anthony Tam </h1>
                                <p className="Main-subtitle"> Cyber Security Research, Software Development, Data Science </p>
                            </Col>
                        </Row>
                        <Row className="Main-body">
                            <Col>
                                <a href="https://www.linkedin.com/in/anthony-tam/">
                                <FontAwesomeIcon className="Main-icons" icon={faLinkedin} size="3x"/></a></Col>
                            <Col>
                                <a href="https://github.com/anthonytwh">
                                <FontAwesomeIcon className="Main-icons" icon={faGithub} size="3x" /></a></Col>
                            <Col>
                                <a href={Resume}>
                                <FontAwesomeIcon className="Main-icons-mobile" icon={faFileAlt} size="3x" /></a></Col>
                                {/* <FontAwesomeIcon onClick={this.toggleModal} className="Main-icons" icon={faFileAlt} size="3x"/>
                                <Modal className="Main-modal" isOpen={this.state.showModal} toggle={this.toggleModal}>
                                        <ModalBody className="Main-modal-body"> Anthony's resume is currently unavailable. Please reach out below for information.</ModalBody>
                                        <ModalFooter className="Main-modal-footer">
                                            <Button classname="Main-modal-button" style={{ fontSize: "12px", color: "lightgrey" }} onClick={this.toggleModal}>Close</Button>
                                        </ModalFooter>
                                    </Modal></Col> */}
                            <Col>
                                <a href="mailto:contact@anthonyt.ca">
                                <FontAwesomeIcon className="Main-icons" icon={faEnvelope} size="3x" /></a></Col>
                        </Row>
                        </Jumbotron>
                        <span className="Main-arrow" style={{ opacity }}>
                            <FontAwesomeIcon className="Main-arrow-icon"  onClick={() => this.click('/#about')} icon={faAngleDoubleDown} size="3x" />
                        </span>
                    </div>
            }
            </div>
        )
    }
}

export default Responsive(Main);