import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Responsive from 'react-responsive-decorator';

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Content from './components/Content.jsx'
import Portfolio from './components/Portfolio.jsx'

import './assets/styles.css';

class App extends Component {

    constructor (props){
        super(props);
        this.state = {
            isMobile: false
        };
    }
    
    componentDidMount() {
        this.props.media({ minWidth: 768 }, () => {
            this.setState({
                isMobile: false
            });
        });

        this.props.media({ maxWidth: 768 }, () => {
            this.setState({ 
                isMobile: true
            });
        });
    }

    render() {
        const { isMobile } = this.state;

        return (
            <Router>
                {isMobile ? 
                    // Mobile //
                    <div className="Global">
                        <div className="BG-1">
                            <div className="Main"><Main/></div>
                            <div className="About"><About/></div>
                        </div>

                        <div className="BG-2">
                            <div className="Portfolio"><Portfolio/></div>
                        </div>
                        <div className="Footer"><Footer /></div>
                    </div>: 
                        // Not Mobile //
                        <div className="Global">
                            <div className="BG-1">
                                <div className="Header"><Header/></div>
                                <div className="Main"><Main/></div>
                                <div className="About"><About/></div>
                            </div>

                            <div className="BG-2">
                                <div className="Portfolio"><Portfolio/></div>
                            </div>
                            <div className="Footer"><Footer /></div>
                        </div>
                }
            </Router>
        );
    }
}

export default Responsive(App);