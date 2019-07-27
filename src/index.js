import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( 
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root'));

registerServiceWorker(); 