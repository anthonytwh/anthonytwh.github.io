import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
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

	componentWillMount(){
		console.log('componentWillMount');
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	// componentDidUpdate(click) {
	// 	console.log("componentDidUpdate");
	// 	let hash = click.location.hash.replace('#', '');
	// 	console.log("cDU Hash: ", hash)
	// 	if (hash) {
	// 		let node = React.findDOMNode(this.refs[hash]);
	// 		if (node) {
	// 			node.scrollIntoView();
	// 		}
	// 	}
	// }

	componentWillUpdate() {
		console.log("componentWillUpdate");
	}

	click = (link) => {
		window.location = link;
		console.log("Link: ", link);
		let clickhash = link.replace('/#', '');
		console.log("ClickHash: ", clickhash);
		console.log("Clicked: ", link);

		if (clickhash) {
			console.log("Yo.");
		}

		// if (clickhash) {
		// 	let node = React.findDOMNode(this.refs[clickhash]);
		// 	console.log("Node: ", node);
		// 	// if (node) {
		// 	// 	node.scrollIntoView();
		// 	// }
		// }
	}

	scrollToMyRef = () => window.scrollTo(0, this.clickref)	


		// var spa_local = window.location
		// var click_hash = window.location.hash
		// window.scrollTo({
		// 	top: hash,
		// 	behavior: 'smooth',
		// });

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
									<NavLink><Link className="Header-link" onClick={() => this.click('/#about')}> About </Link></NavLink>
								</NavItem>
								<NavItem>
									<NavLink><Link to='/#contact' className="Header-link" onClick={() => this.click('/#contact')}> Contact </Link></NavLink>
								</NavItem>
							</Nav>
					</Navbar>
				</div>
			</Router>
		)
	}
}

export default Header;