import React, { Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, DropdownToggle, DropdownMenu, UncontrolledDropdown, DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

import '../assets/styles.css';


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
						<NavbarBrand className="Header-icon-col"> 
								<Link to='/' tag='top' className="Header-icon" ><FontAwesomeIcon icon={faUserAstronaut} size="lg"/></Link>
						</NavbarBrand>
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