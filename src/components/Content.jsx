import React, { Component} from 'react';
import { Button, Col, Card, Jumbotron, Container, ListGroup, ListGroupItem, Row, UncontrolledCollapse } from 'reactstrap';

import '../assets/styles.css';

class Content extends Component {

	constructor (props){
		super(props);
	}

	render () {
		return (
		    <div>
				<Container fluid>
					<h1 className="Content-title"> Section in Progress ! </h1>
					<p className="Content-header"> Some of my personal interests: </p>
					<Row>
						<Col>
							<p className="Content-subheader"> Reading List: </p>
								<p className="Content-content"> • Principles by Ray Dalio </p>
								<p className="Content-content"> • Creativity Inc. </p>
								<p className="Content-content"> • Algorithms to Live By  </p>
								<p className="Content-content"> • GDP  </p>
							<p className="Content-subheader"> Book Recommendations: </p>
								<p className="Content-content"> • Flash Boys </p>
								<p className="Content-content"> • Everybody Lies </p>
						</Col>
						<Col>
							<p className="Content-subheader"> My Podcasts: </p>
								<p className="Content-content"> 
									<a href="https://www.npr.org/podcasts/510289/planet-money/"><img className="Content-podcastimg" src="https://media.npr.org/assets/img/2018/08/02/npr_planetmoney_podcasttile_sq-7b7fab0b52fd72826936c3dbe51cff94889797a0-s700-c85.jpg" alt="Planet Money by NPR" width="100" height="100"/></a>
									<a href="https://www.npr.org/podcasts/510325/the-indicator-from-planet-money"><img className="Content-podcastimg" src="https://media.npr.org/assets/img/2018/08/03/npr_theindicatorpm_podcasttile_sq-2b1d594a6a7d6c70618924796b4ffd778e9d33a8.jpg?s=1400" alt="The Indicator from Planet Money" width="100" height="100"/></a>
									<a href="https://www.npr.org/podcasts/510313/how-i-built-this"><img className="Content-podcastimg" src="https://media.npr.org/assets/img/2018/08/03/npr_hibt_podcasttile_sq-98320b282169a8cea04a406530e6e7b957665b3f-s400-c85.jpg" alt="How I Built This with Guy Raz" width="100" height="100"/></a>
									<a href="https://hbr.org/2018/01/podcast-ideacast"><img className="Content-podcastimg" src="https://hbr.org/resources/images/ideacast/1400-hbr-ideacast-lg-3.jpg" alt="HBR Ideacast, Harvard Business Review" width="100" height="100"/></a>
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