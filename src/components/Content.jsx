import React, { Component} from 'react';
import { Button, Col, Container, Row, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

import '../assets/styles.css';

class Content extends Component {

	constructor (props){
		super(props);
	}

	render () {
		return (
		    <div>
				<Container fluid>
					<Row>
						<h1 className="Content-title"> Personal interests </h1>
					</Row>
					<br></br>
					<br></br>
					<Row>
						<Col>
							<Row>
								<Col className="Content-column" xs="15">
									<p className="Content-subheader"> Reading List: </p>
										<p className="Content-content">
										<Row>
											<Button id="pop-principles" className="Content-nobutton" active color="none" href="https://www.principles.com/">
												<img className="Content-bookimg" src="https://images-na.ssl-images-amazon.com/images/I/41cEbWztZYL._SX331_BO1,204,203,200_.jpg" alt="Planet Money by NPR" width="90" height="125"/></Button>
											<Button id="pop-algorithms" className="Content-nobutton" active color="none" href="http://algorithmstoliveby.com/">
												<img className="Content-bookimg" src="https://images-na.ssl-images-amazon.com/images/I/41dPThoPwEL._SX331_BO1,204,203,200_.jpg" alt="Planet Money by NPR" width="90" height="125"/></Button>
											<Button id="pop-gdp" className="Content-nobutton" active color="none" href="https://press.princeton.edu/titles/10598.html">
												<img className="Content-bookimg" src="https://images-na.ssl-images-amazon.com/images/I/41sf%2BYuyYGL.jpg" alt="Planet Money by NPR" width="90" height="125"/></Button>
										</Row>
										</p>
										<UncontrolledPopover trigger="hover" placement="top" target="pop-principles">
											<PopoverHeader className="Content-popoverHeader">Principles: Life and Work</PopoverHeader>
											<PopoverBody className="Content-popoverBody">By: Ray Dalio</PopoverBody>
										</UncontrolledPopover>
										<UncontrolledPopover trigger="hover" placement="top" target="pop-algorithms">
											<PopoverHeader className="Content-popoverHeader">Algorithms to Live By: The Computer Science to Human Decisions</PopoverHeader>
											<PopoverBody className="Content-popoverBody">By: Brian Christrian, Tom Griffiths</PopoverBody>
										</UncontrolledPopover>
										<UncontrolledPopover trigger="hover" placement="top" target="pop-gdp">
											<PopoverHeader className="Content-popoverHeader">GDP: A Brief but Affectionate History</PopoverHeader>
											<PopoverBody className="Content-popoverBody">By: Diane Coyle</PopoverBody>
										</UncontrolledPopover>
								</Col>
							</Row>

							<Row>
								<Col className="Content-column" xs="15">
									<p className="Content-subheader"> Book Recommendations: </p>
										<p className="Content-content"> 
											<Row>
												<Button id="pop-flashboys" className="Content-nobutton" active color="none" href="https://en.wikipedia.org/wiki/Flash_Boys">
													<img className="Content-bookimg" src="https://images-na.ssl-images-amazon.com/images/I/41TE9jNriUL._SX329_BO1,204,203,200_.jpg" alt="Planet Money by NPR" width="90" height="125"/></Button> 
												<Button id="pop-everybodylies" className="Content-nobutton" active color="none" href="http://sethsd.com/everybodylies">
													<img className="Content-bookimg" src="https://images-na.ssl-images-amazon.com/images/I/511LZBXbRpL._SX329_BO1,204,203,200_.jpg" alt="Planet Money by NPR" width="90" height="125"/></Button>
												<Button id="pop-creativityinc" className="Content-nobutton" active color="none" href="http://www.creativityincbook.com/">
													<img className="Content-bookimg" src="https://images-na.ssl-images-amazon.com/images/I/41IMsG2QaEL._SX319_BO1,204,203,200_.jpg" alt="Planet Money by NPR" width="90" height="125"/></Button>
											</Row>
										</p>
										<UncontrolledPopover trigger="hover" placement="bottom" target="pop-flashboys">
											<PopoverHeader className="Content-popoverHeader">Flash Boys: A Wall Street Revolt</PopoverHeader>
											<PopoverBody className="Content-popoverBody">By: Michael Lewis</PopoverBody>
										</UncontrolledPopover>
										<UncontrolledPopover trigger="hover" placement="bottom" target="pop-everybodylies">
											<PopoverHeader className="Content-popoverHeader">Everybody Lies: Big Data, New Data, and What the Internet Can Tell Us About Who We Really Are</PopoverHeader>
											<PopoverBody className="Content-popoverBody">By: Seth Stephens-Davidowitz</PopoverBody>
										</UncontrolledPopover>
										<UncontrolledPopover className="Content-popover" trigger="hover" placement="bottom" target="pop-creativityinc">
											<PopoverHeader className="Content-popoverHeader">Creativity Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration</PopoverHeader>
											<PopoverBody className="Content-popoverBody">By: Ed Catmull, with Amy Wallace</PopoverBody>
										</UncontrolledPopover>
								</Col>
							</Row>
						</Col>

						<Col>
							<Row>
								<Col className="Content-column" xs="15">
									<p className="Content-subheader"> Podcasts: </p>
										<p className="Content-content"> 
										<Row>
											<a href="https://www.npr.org/podcasts/510325/the-indicator-from-planet-money"><img className="Content-podcastimg" src="https://media.npr.org/assets/img/2018/08/03/npr_theindicatorpm_podcasttile_sq-2b1d594a6a7d6c70618924796b4ffd778e9d33a8.jpg?s=1400" alt="The Indicator from Planet Money" width="100" height="100"/></a>
											<a href="https://www.npr.org/podcasts/510289/planet-money/"><img className="Content-podcastimg" src="https://media.npr.org/assets/img/2018/08/02/npr_planetmoney_podcasttile_sq-7b7fab0b52fd72826936c3dbe51cff94889797a0-s700-c85.jpg" alt="Planet Money by NPR" width="100" height="100"/></a>
											<a href="https://www.npr.org/podcasts/510313/how-i-built-this"><img className="Content-podcastimg" src="https://media.npr.org/assets/img/2018/08/03/npr_hibt_podcasttile_sq-98320b282169a8cea04a406530e6e7b957665b3f-s400-c85.jpg" alt="How I Built This with Guy Raz" width="100" height="100"/></a>
											<a href="https://softwareengineeringdaily.com/"><img className="Content-podcastimg" src="https://lh3.googleusercontent.com/Z9Jhvo3VntO8q3jqYeKy-RrhKdbkGpMABY25s1SHNA_fDnSRHwRxJ_C3Gbcw=s360-c-e100-rwu-v1" alt="Software Engineering Daily Podcast" width="100" height="100"/></a>
											<a href="https://hbr.org/2018/01/podcast-ideacast"><img className="Content-podcastimg" src="https://hbr.org/resources/images/ideacast/1400-hbr-ideacast-lg-3.jpg" alt="HBR Ideacast, Harvard Business Review" width="100" height="100"/></a>
										</Row>
										</p>
								</Col>
							</Row>

							<Row>
								<Col className="Content-column" xs="15">
									<p className="Content-subheader"> Hobbies: </p>
										<Row><p className="Content-content"> • Rock Climbing (see my climbing blog <a href="https://www.instagram.com/anthonyclimbs/">here!</a>)</p></Row>
										<p className="Content-content"> • Traveling </p>
										<Row><p className="Content-content"> • Coffee </p></Row>
								</Col>
							</Row>

						</Col>
					</Row>
				</Container>
		    </div>
		)
	}
}

export default Content;