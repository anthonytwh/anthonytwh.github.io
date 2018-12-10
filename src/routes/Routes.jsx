import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Main from '../components/Main.jsx'
import About from '../components/About.jsx'
import Content from '../components/Content.jsx'
import Portfolio from '../components/Portfolio.jsx'


const PageRoutes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Header}/>
			<Route path="/About" component={About}/>
			<Route path="/Portfolio" component={Portfolio}/>
			<Route path="/Contact"  component={Footer}/>
		</Switch>
	</BrowserRouter>
	);

export default PageRoutes;