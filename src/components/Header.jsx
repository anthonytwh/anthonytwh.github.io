import React, { Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import '../assets/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {

	constructor (props){
		super(props);
		// this.toggle = this.toggle.bind(this);
		// this.state = { isOpen: false };
	}

	// toggle() {
	// 	this.setState({ isOpen: !this.state.isOpen });
	// }

	// componentDidUpdate() {
	// 	let hash = this.state.location.hash.replace('#', '');
	// 	if (hash) {
	// 		let node = React.findDOMNode(this.refs[hash]);
	// 		if (node) {
	// 			node.scrollIntoView();
	// 		}
	// 	}
	// }

	click = (link) => {
		window.location = link;
	}

	render() {
		// function handleScroll(e) {
		// 	e.preventDefault();
		// 	const main = this.props.ref();
		// 	window.scrollTo({
		// 		top: main.offsetTop,
		// 		left: 0,
		// 		behavior: "instant"
		// 	});
		// };

		return(
			<Router>
				<div>
					<Navbar className="Header-header" light expand="md"> 
							<Nav className="ml-auto" navbar>
								<NavItem>
									<Link to='/#about' className="Header-link" onClick={() => this.click('/#about')}><NavLink> About </NavLink></Link>
								</NavItem>
								<NavItem>
									<Link to='/#portfolio' className="Header-link" onClick={() => this.click('/#portfolio')}><NavLink> Portfolio </NavLink></Link>
								</NavItem>
								<NavItem>
									<Link to='/#contact' className="Header-link" onClick={() => this.click('/#contact')}><NavLink> Contact </NavLink></Link>
								</NavItem>
							</Nav>
					</Navbar>
				</div>
			</Router>
		)
	}
}

export default Header;