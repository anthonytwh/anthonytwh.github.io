import React, { Component, createRef } from 'react';
import { Card, Container } from 'reactstrap';
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
                    <Container className="Portfolio-mobile" id="contact" ref={this.clickref}>
                        <Card className="Contact-badge-mobile" id='ContactMe'> <h1> Contact </h1> </Card>
                            <ContactCard/>
                    </Container>:
                // Not Mobile //
                        <Container className="Portfolio" id="contact" ref={this.clickref}>
                            <Card className="Contact-badge" id='ContactMe'> <h1> Contact </h1> </Card>
                                <ContactCard/>
                        </Container>
                }
            </div>
            )
    }
}

export default Responsive(Portfolio);