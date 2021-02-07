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
            isMobile: false,
            isTablet: false
        };
    }
    
    componentDidMount() {
        this.props.media({ minWidth: 768 }, () => {
            this.setState({
                isTablet: false
            });
            console.log("Render for desktop.");
        });

        this.props.media({ maxWidth: 768 }, () => {
            this.setState({ 
                isTablet: true
            });
            console.log("Render for tablet.");
        });

        this.props.media({ minWidth: 320 }, () => {
            this.setState({
                isMobile: false
            });
            console.log("Render too small for mobile.");
        });

        this.props.media({ maxWidth: 767 }, () => {
            this.setState({ 
                isMobile: true
            });
            console.log("Render for mobile.");
        });
    }

    // componentDidUpdate() {
    //     this.props.media({ minWidth: 768 }, () => {
    //         this.setState({
    //             isTablet: false
    //         });
    //     });

    //     this.props.media({ maxWidth: 768 }, () => {
    //         this.setState({ 
    //             isTablet: true
    //         });
    //     });

    //     this.props.media({ minWidth: 320 }, () => {
    //         this.setState({
    //             isMobile: false
    //         });
    //     });

    //     this.props.media({ maxWidth: 767 }, () => {
    //         this.setState({ 
    //             isMobile: true
    //         });
    //     });
    // }

    render() {
        const { isMobile } = this.state;
        const { isTablet } = this.state;

        return (
            <Router>
                {isMobile ? 
                    // Mobile //
                    <div className="Global-mobile">
                        <div className="BG-1">
                            <div className="Main"><Main/></div>
                            <div className="About"><About/></div>
                        </div>

                        <div className="BG-2">
                            <div className="Portfolio"><Portfolio/></div>
                        </div>
                        <div className="Footer-mobile"><Footer /></div>
                    </div>: isTablet ?
                        // Tablet //
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
                            // Not Mobile or Tablet //
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