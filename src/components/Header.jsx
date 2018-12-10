import React, { Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
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
						<NavbarBrand> 
							<Link to='/' className="Header-icon" ><FontAwesomeIcon icon={faUserAstronaut} size="lg"/></Link>
						</NavbarBrand>
						<NavbarToggler onCLick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className='ml-auto' navbar>
								<NavItem>
									<Link to='/About' className="Header-link"><NavLink> About </NavLink></Link>
								</NavItem>
								<NavItem>
									<Link to='/Portfolio' className="Header-link"><NavLink> Portfolio </NavLink></Link>
								</NavItem>
								<NavItem>
									<Link to='/Contact' className="Header-link"><NavLink> Contact </NavLink></Link>
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