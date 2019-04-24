import React, { Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../assets/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'



class Header extends Component {

	constructor (props){
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = { isOpen: false };
	}

	toggle() {
		this.setState({ isOpen: !this.state.isOpen });
	}

	render() {
		return(
			<Router>
				<div>
					<Navbar className="Header-header" light expand="md"> 
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink to='/About' tag='about' href='/About' className="Header-link"> About </NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/Portfolio' tag='portfolio' href='/Portfolio' className="Header-link"> Portfolio </NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/Contact' tag='contact' href='/Contact' className="Header-link"> Contact </NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
				</div>
			</Router>
		)
	}
}

export default Header;