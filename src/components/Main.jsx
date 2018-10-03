import React, { Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';

import '../assets/styles.css';


class Main extends Component {

	constructor (props){
		super(props);
	}

	render () {
		return (
	    <div className="Main-jumbo">
				<h1 className="display-3">Hello!</h1>
					<p className="lead">Welcome to my website! </p>
					<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
	    </div>
			)
	}

}

export default Main;
