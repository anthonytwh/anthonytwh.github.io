import React, { Component } from 'react';
import { Row, Col, Toast, ToastBody, ToastHeader, Card, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import Responsive from 'react-responsive-decorator';
import classnames from 'classnames';

import '../assets/styles.css';

class About extends Component {

    constructor(props) {
        super(props);
    
        this.toggleTab = this.toggleTab.bind(this);
        this.state = {
          activeTab: '1',
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
    
      toggleTab(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({ activeTab: tab });
        }
      }

    render () {
        const { isMobile } = this.state;

        return (
            <div>
                {isMobile ?
                    // Mobile //
                    <div>
                        <Row className="About-title-row" id="about" ref={this.about}>
                            <Card className="About-title-mobile"> <h1>$whoami</h1> </Card>
                        </Row>
                        <Row className="About-content-upper-row-mobile">
                            <Toast className="About-toast-mobile">
                                <ToastHeader className="About-animate-mobile">
                                    <span> <p> Software Development </p></span>
                                    <span> <p> Data Science </p></span>
                                    <span> <p> Cyber Security</p></span>
                                    <span> <p> Product Design </p></span>
                                </ToastHeader>
                                <ToastBody className="About-body">
                                        Anthony is a Lead Security Developer at Darktrace, a high-growth cyber security company using artificial intelligence (AI) and machine learning (ML) to detect and respond to anomalous threats and real-time attacks.
                                        <br></br><br></br>
                                        He leads the threat model development team in North America, working in research and development to expand threat detection capabilities in the network, cloud, and SaaS platforms. He also supports consultancy efforts and technical sales operations as a subjet matter expert. 
                                        <br></br><br></br>
                                        Anthony is always happy to connect about new or exciting opportunities, or anything tech!
                                </ToastBody>
                            </Toast>
                        </Row>
                        <Row className="About-content-lower-row-mobile">
                            <Col className="Portfolio-Center-Col-Mobile">
                                <Row>
                                    <Nav className="Portfolio-BadgeNav-mobile">
                                        <NavItem className="Portfolio-badge-mobile" id="Employment">
                                            <NavLink
                                                className={classnames({ active: this.state.activeTab === '1' })}
                                                onClick={() => { this.toggleTab('1'); }}>
                                                    <p> Experience </p> </NavLink>
                                        </NavItem>
                                        <NavItem className="Portfolio-badge-mobile" id='Education'>
                                            <NavLink
                                                    className={classnames({ active: this.state.activeTab === '2' })}
                                                    onClick={() => { this.toggleTab('2'); }}>
                                                        <p> Education </p>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </Row>
                                <Row>
                                    <TabContent activeTab={this.state.activeTab}>
                                        <TabPane tabId="1">
                                            { this.state.activeTab == 1 ? 
                                                <Card className="Portfolio-card-mobile">
                                                    <Row className="Portfolio-row">
                                                        <Col>
                                                            <p className="Portfolio-header-mobile"> Darktrace </p>
                                                            <Row>
                                                                <Col><p className="Portfolio-body-mobile" style={{ textAlign: "left", color: "lightgrey" }}> Lead Model Developer </p></Col>
                                                                <Col><p className="Portfolio-body-mobile" style={{ textAlign: "right", color: "lightgrey" }}> Toronto/Remote, 2019 - present </p></Col>
                                                            </Row>
                                                            <p className="Portfolio-body-mobile" style={{ textIndent: "5%" }} > • Research and develop models to detect adversarial attacks in enterprise networks, cloud, and saas environments.</p>
                                                            <p className="Portfolio-body-mobile" style={{ textIndent: "5%" }} > • Develop and maintain analytical tools and infrastructure (full-stack) for data analysis/research and development.</p>
                                                            <p className="Portfolio-body-mobile" style={{ textIndent: "5%" }} > • Maintainer of the Darktrace Python library, a closed-source library for integration with Darktrace REST API.</p>
                                                            <p className="Portfolio-body-mobile" style={{ textIndent: "5%" }} > • Work closely with product development teams to resolve issues, provide feedback and general feature improvements.</p>
                                                        </Col>
                                                    </Row>
                                                    <Row className="Portfolio-row">
                                                        <Col>
                                                            <Row>
                                                                <Col><p className="Portfolio-body-mobile" style={{ textAlign: "left", color: "lightgrey" }}> Cyber Threat Analyst </p></Col>
                                                                <Col><p className="Portfolio-body-mobile" style={{ textAlign: "right", color: "lightgrey" }}> Toronto, 2018 - 2019</p></Col>
                                                            </Row>
                                                            <p className="Portfolio-body-mobile" style={{ textIndent: "5%" }} > • Lead analyst in Canada, supporting strategic accounts and pre/post-sale engagements as a subject matter Expert.</p>
                                                            <p className="Portfolio-body-mobile" style={{ textIndent: "5%" }} > • Investigated active threats and live compromises in customer environments, compiling highly-detailed threat reports for executives and technical clients.</p>
                                                            <p className="Portfolio-body-mobile" style={{ textIndent: "5%" }} > • Contributed hundreds of IOC's to the internal threat intel repository through research and post-morten investigations.</p>
                                                            <p className="Portfolio-body-mobile" style={{ textIndent: "5%" }} > • Presented at customer events, providing knowledge and expertise of the Darktrace product to clients.</p>
                                                        </Col>
                                                    </Row>
                                                    <Row className="Portfolio-row">
                                                        <Col>
                                                            <Row>
                                                                <Col><p className="Portfolio-body-mobile" style={{ textAlign: "left", color: "lightgrey" }}> Cyber Security Engineer </p></Col>
                                                                <Col><p className="Portfolio-body-mobile" style={{ textAlign: "right", color: "lightgrey" }}> Toronto, 2017 - 2018 </p></Col>
                                                            </Row>
                                                            <p className="Portfolio-body-mobile" style={{ textIndent: "5%" }}>  • Managed Darktrace enterprise integrations for customers in network, virtual and cloud environments.</p>
                                                            <p className="Portfolio-body-mobile" style={{ textIndent: "5%" }}>  • Traveled weekly to lead onsite technical integrations with the customer security teams, managers and executives.</p>
                                                            <p className="Portfolio-body-mobile" style={{ textIndent: "5%" }}>  • Contributed to over 30% growth of the Canadian customer base from proof-of-value customer trials in one year.</p>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                            : null }
                                        </TabPane>
                                        <TabPane tabId="2">
                                            { this.state.activeTab == 2 ? 
                                                
                                            <Card className="Portfolio-card-mobile">
                                                <Row className="Portfolio-row">
                                                    <Col>
                                                        <p className="Portfolio-header-mobile"> McMaster University</p>
                                                        <Row>
                                                            <Col><p className="Portfolio-body-mobile" style={{ textAlign: "left", color: "lightgrey" }}> Bachelor of Engineering & Management </p></Col>
                                                            <Col><p className="Portfolio-body-mobile" style={{ textAlign: "right", color: "lightgrey" }}> Hamilton ON, 2012 - 2017 </p></Col>
                                                        </Row>	
                                                        <p className="Portfolio-body-mobile" style={{ textIndent: "1em" }}> • Engineering and business management minor with a specilization in robotics and design. </p>												
                                                    </Col>
                                                </Row>
                                                <Row className="Portfolio-row">
                                                    <Col>
                                                        <p className="Portfolio-header-mobile"> Nanyang Technological University </p>
                                                        <Row>
                                                            <Col><p className="Portfolio-body-mobile" style={{ textAlign: "left", color: "lightgrey" }}> International Exchange Program </p></Col>
                                                            <Col><p className="Portfolio-body-mobile" style={{ textAlign: "right", color: "lightgrey" }}> Singapore SG, 2014 - 2015 </p></Col>
                                                        </Row>
                                                        <p className="Portfolio-body-mobile" style={{ textIndent: "1em" }}> • Mostly traveled, sometimes studied, and had an awesome time. </p>
                                                    </Col>
                                                </Row>
                                            </Card>
                                            : null }
                                        </TabPane>
                                    </TabContent>
                                </Row>
                            </Col>
                        </Row>
                    </div>:
                        // Not Mobile //
                        <div>
                            <Row className="About-title-row" id="about" ref={this.about}>
                                <Card className="About-title"> <h1>$whoami</h1> </Card>
                            </Row>
                            <Row className="About-content-row">
                                <Col xs="5">
                                    <Toast className="About-toast">
                                        <ToastHeader className="About-animate">
                                            <span> <p> Software Development </p></span>
                                            <span> <p> Data Science </p></span>
                                            <span> <p> Cyber Security</p></span>
                                            <span> <p> Product Design </p></span>
                                        </ToastHeader>
                                        <ToastBody className="About-body">
                                                Anthony is a Lead Security Developer at Darktrace, a high-growth cyber security company using artificial intelligence (AI) and machine learning (ML) to detect and respond to anomalous threats and real-time attacks.
                                                <br></br><br></br>
                                                He leads the threat model development team in North America, working in research and development to expand threat detection capabilities in the network, cloud, and SaaS platforms. He also supports consultancy efforts and technical sales operations as a subjet matter expert. 
                                                <br></br><br></br>
                                                Anthony is always happy to connect about new or exciting opportunities, or anything tech!
                                        </ToastBody>
                                    </Toast>
                                </Col>
                                <Col xs="auto">
                                    <Row>
                                        <Nav className="Portfolio-BadgeNav">
                                            <NavItem className="Portfolio-badge" id="Employment">
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '1' })}
                                                    onClick={() => { this.toggleTab('1'); }}>
                                                        <p> Experience </p> </NavLink>
                                            </NavItem>
                                            <NavItem className="Portfolio-badge" id='Education'>
                                                <NavLink
                                                        className={classnames({ active: this.state.activeTab === '2' })}
                                                        onClick={() => { this.toggleTab('2'); }}>
                                                            <p> Education </p>
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Row>
                                    <Row>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="1">
                                                { this.state.activeTab == 1 ? 
                                                    <Card className="Portfolio-card">
                                                        <Row className="Portfolio-row">
                                                            <Col>
                                                                <p className="Portfolio-header"> Darktrace </p>
                                                                <Row>
                                                                    <Col><p className="Portfolio-body" style={{ textAlign: "left", color: "lightgrey" }}> Lead Model Developer </p></Col>
                                                                    <Col><p className="Portfolio-body" style={{ textAlign: "right", color: "lightgrey" }}> Toronto/Remote, 2019 - present </p></Col>
                                                                </Row>
                                                                <p className="Portfolio-body" style={{ textIndent: "5%" }} > • Research and develop models to detect adversarial attacks in enterprise networks, cloud, and saas environments.</p>
                                                                <p className="Portfolio-body" style={{ textIndent: "5%" }} > • Develop and maintain analytical tools and infrastructure (full-stack) for data analysis/research and development.</p>
                                                                <p className="Portfolio-body" style={{ textIndent: "5%" }} > • Maintainer of the Darktrace Python library, a closed-source library for integration with Darktrace REST API.</p>
                                                                <p className="Portfolio-body" style={{ textIndent: "5%" }} > • Work closely with product development teams to resolve issues, provide feedback and general feature improvements.</p>
                                                            </Col>
                                                        </Row>
                                                        <Row className="Portfolio-row">
                                                            <Col>
                                                                <Row>
                                                                    <Col><p className="Portfolio-body" style={{ textAlign: "left", color: "lightgrey" }}> Cyber Threat Analyst </p></Col>
                                                                    <Col><p className="Portfolio-body" style={{ textAlign: "right", color: "lightgrey" }}> Toronto, 2018 - 2019</p></Col>
                                                                </Row>
                                                                <p className="Portfolio-body" style={{ textIndent: "5%" }} > • Lead analyst in Canada, supporting strategic accounts and pre/post-sale engagements as a subject matter Expert.</p>
                                                                <p className="Portfolio-body" style={{ textIndent: "5%" }} > • Investigated active threats and live compromises in customer environments, compiling highly-detailed threat reports for executives and technical clients.</p>
                                                                <p className="Portfolio-body" style={{ textIndent: "5%" }} > • Contributed hundreds of IOC's to the internal threat intel repository through research and post-morten investigations.</p>
                                                                <p className="Portfolio-body" style={{ textIndent: "5%" }} > • Presented at customer events, providing knowledge and expertise of the Darktrace product to clients.</p>
                                                            </Col>
                                                        </Row>
                                                        <Row className="Portfolio-row">
                                                            <Col>
                                                                <Row>
                                                                    <Col><p className="Portfolio-body" style={{ textAlign: "left", color: "lightgrey" }}> Cyber Security Engineer </p></Col>
                                                                    <Col><p className="Portfolio-body" style={{ textAlign: "right", color: "lightgrey" }}> Toronto, 2017 - 2018 </p></Col>
                                                                </Row>
                                                                <p className="Portfolio-body" style={{ textIndent: "5%" }}>  • Managed Darktrace enterprise integrations for customers in network, virtual and cloud environments.</p>
                                                                <p className="Portfolio-body" style={{ textIndent: "5%" }}>  • Traveled weekly to lead onsite technical integrations with the customer security teams, managers and executives.</p>
                                                                <p className="Portfolio-body" style={{ textIndent: "5%" }}>  • Contributed to over 30% growth of the Canadian customer base from proof-of-value customer trials in one year.</p>
                                                            </Col>
                                                        </Row>
                                                    </Card>
                                                : null }
                                            </TabPane>
                                            <TabPane tabId="2">
                                                { this.state.activeTab == 2 ? 
                                                    
                                                <Card className="Portfolio-card">
                                                    <Row className="Portfolio-row">
                                                        <Col>
                                                            <p className="Portfolio-header"> McMaster University</p>
                                                            <Row>
                                                                <Col><p className="Portfolio-body" style={{ textAlign: "left", color: "lightgrey" }}> Bachelor of Engineering & Management </p></Col>
                                                                <Col><p className="Portfolio-body" style={{ textAlign: "right", color: "lightgrey" }}> Hamilton ON, 2012 - 2017 </p></Col>
                                                            </Row>	
                                                            <p className="Portfolio-body" style={{ textIndent: "1em" }}> • Engineering and business management minor with a specilization in robotics and design. </p>												
                                                        </Col>
                                                    </Row>
                                                    <Row className="Portfolio-row">
                                                        <Col>
                                                            <p className="Portfolio-header"> Nanyang Technological University </p>
                                                            <Row>
                                                                <Col><p className="Portfolio-body" style={{ textAlign: "left", color: "lightgrey" }}> International Exchange Program </p></Col>
                                                                <Col><p className="Portfolio-body" style={{ textAlign: "right", color: "lightgrey" }}> Singapore SG, 2014 - 2015 </p></Col>
                                                            </Row>
                                                            <p className="Portfolio-body" style={{ textIndent: "1em" }}> • Mostly traveled, sometimes studied, and had an awesome time. </p>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                                
                                                : null }
                                            </TabPane>
                                        </TabContent>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                }
            </div>
        )
    }
}

export default Responsive(About);