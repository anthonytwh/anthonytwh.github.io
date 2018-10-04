import React, { Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
			<div>
				<Navbar className="Header-header" light expand="md"> 
					<NavbarBrand href='/'> <a className="Header-icon"><FontAwesomeIcon icon={faUserAstronaut} size="lg"/></a> </NavbarBrand>
					<NavbarToggler onCLick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className='ml-auto' navbar>
							<NavItem>
								<NavLink href='/About'> About </NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='/Portfolio'> Portfolio </NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='/Contact'> Contact </NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
			)
	}
}

export default Header;