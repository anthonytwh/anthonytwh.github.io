import React, { Component} from 'react';
import { Button, Col, Card, Container, Row, UncontrolledCollapse, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

import '../assets/styles.css';

class Content extends Component {

	constructor (props){
		super(props);
	}

	render () {
		return (
		    <div>
				<Container fluid>
					<h1 className="Content-title"> Personal interests: </h1>
					<p className="Content-header"> Section in Progress! </p>
					<Row>
						<Col>

							<p className="Content-subheader"> Reading List: </p>
								<p className="Content-content">
								<Row>
									<Button id="pop-principles" className="Content-nobutton" active color="none"><img className="Content-bookimg" src="https://images-na.ssl-images-amazon.com/images/I/41cEbWztZYL._SX331_BO1,204,203,200_.jpg" alt="Planet Money by NPR" width="90" height="125"/></Button>
									<Button id="pop-algorithms" className="Content-nobutton" active color="none"><img className="Content-bookimg" src="https://images-na.ssl-images-amazon.com/images/I/41dPThoPwEL._SX331_BO1,204,203,200_.jpg" alt="Planet Money by NPR" width="90" height="125"/></Button>
									<Button id="pop-gdp" className="Content-nobutton" active color="none"><img className="Content-bookimg" src="https://images-na.ssl-images-amazon.com/images/I/41sf%2BYuyYGL.jpg" alt="Planet Money by NPR" width="90" height="125"/></Button>
								</Row>
								</p>
								<UncontrolledPopover trigger="hover" placement="top" target="pop-principles">
									<PopoverHeader>Principles: Life and Work</PopoverHeader>
									<PopoverBody>Ray Dalio</PopoverBody>
								</UncontrolledPopover>
								<UncontrolledPopover trigger="hover" placement="top" target="pop-algorithms">
									<PopoverHeader>Algorithms to Live By: The Computer Science to Human Decisions</PopoverHeader>
									<PopoverBody>Brian Christrian, Tom Griffiths</PopoverBody>
								</UncontrolledPopover>
								<UncontrolledPopover trigger="hover" placement="top" target="pop-gdp">
									<PopoverHeader>GDP: A Brief but Affectionate History</PopoverHeader>
									<PopoverBody>Diane Coyle</PopoverBody>
								</UncontrolledPopover>

							<p className="Content-subheader"> Favourite Books: </p>
								<p className="Content-content"> 
									<Row>
										<a href="https://www.npr.org/podcasts/510289/planet-money/"><img className="Content-bookimg" src="https://images-na.ssl-images-amazon.com/images/I/41TE9jNriUL._SX329_BO1,204,203,200_.jpg" alt="Planet Money by NPR" width="90" height="125"/></a> 
										<a href="https://www.npr.org/podcasts/510289/planet-money/"><img className="Content-bookimg" src="https://images-na.ssl-images-amazon.com/images/I/511LZBXbRpL._SX329_BO1,204,203,200_.jpg" alt="Planet Money by NPR" width="90" height="125"/></a>
										<a href="https://www.npr.org/podcasts/510289/planet-money/"><img className="Content-bookimg" src="https://images-na.ssl-images-amazon.com/images/I/41IMsG2QaEL._SX319_BO1,204,203,200_.jpg" alt="Planet Money by NPR" width="90" height="125"/></a>
									</Row>
								</p>
						</Col>
						<Col>
							<p className="Content-subheader"> My Podcasts: </p>
								<p className="Content-content"> 
								<Row>
									<a href="https://www.npr.org/podcasts/510289/planet-money/"><img className="Content-podcastimg" src="https://media.npr.org/assets/img/2018/08/02/npr_planetmoney_podcasttile_sq-7b7fab0b52fd72826936c3dbe51cff94889797a0-s700-c85.jpg" alt="Planet Money by NPR" width="100" height="100"/></a>
									<a href="https://www.npr.org/podcasts/510325/the-indicator-from-planet-money"><img className="Content-podcastimg" src="https://media.npr.org/assets/img/2018/08/03/npr_theindicatorpm_podcasttile_sq-2b1d594a6a7d6c70618924796b4ffd778e9d33a8.jpg?s=1400" alt="The Indicator from Planet Money" width="100" height="100"/></a>
									<a href="https://www.npr.org/podcasts/510313/how-i-built-this"><img className="Content-podcastimg" src="https://media.npr.org/assets/img/2018/08/03/npr_hibt_podcasttile_sq-98320b282169a8cea04a406530e6e7b957665b3f-s400-c85.jpg" alt="How I Built This with Guy Raz" width="100" height="100"/></a>
									<a href="https://hbr.org/2018/01/podcast-ideacast"><img className="Content-podcastimg" src="https://hbr.org/resources/images/ideacast/1400-hbr-ideacast-lg-3.jpg" alt="HBR Ideacast, Harvard Business Review" width="100" height="100"/></a>
								</Row>
								</p>
							<p className="Content-subheader"> Hobbies/Activities: </p>
								<p className="Content-content"> • Rock Climbing </p>
								<p className="Content-content"> • Coffee Shops </p>
						</Col>
					</Row>
				</Container>
		    </div>
		)
	}
}

export default Content;