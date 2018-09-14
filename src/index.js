import React from 'react';
import ReactDOM from 'react-dom';

import './assets/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
