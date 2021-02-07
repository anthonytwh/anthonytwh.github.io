import React, { Component, createRef } from 'react';
import { Card, Container, Row } from 'reactstrap';
import Responsive from 'react-responsive-decorator';

import ContactCard from '../components/ContactCard.jsx'
import '../assets/styles.css';


class Portfolio extends Component {

    constructor (props){
        super(props);
        this.clickref = createRef();
        this.state = {
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

    render () {
        const { isMobile } = this.state;

        return (
            <div>
                {isMobile ?
                // Mobile //
                    <Row className="Contact-row-mobile">
                        <Container className="Portfolio-mobile" id="contact" ref={this.clickref}>
                            <Card className="Contact-badge-mobile" id='ContactMe'> <h1> Contact </h1> </Card>
                                <ContactCard/>
                        </Container>
                    </Row>:
                // Not Mobile //
                    <Row className="Contact-row">
                        <Container className="Portfolio" id="contact" ref={this.clickref}>
                            <Card className="Contact-badge" id='ContactMe'> <h1> Contact </h1> </Card>
                                <ContactCard/>
                        </Container>
                    </Row>
                }
            </div>
            )
    }
}

export default Responsive(Portfolio);