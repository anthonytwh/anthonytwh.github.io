import React from 'react';
import './assets/styles.css';
import SpamFilter from './components/SpamFilter';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Anthony Tam</h1>
        <p>Did you come here from LinkedIn? If so, you're in the right place.</p>
        <p>Github: <a href="https://github.com/anthonytwh">anthonytwh</a></p>
        <p>Contact me: <SpamFilter emailAddress="contact@anthonyt.ca" /></p>
      </div>
    </div>
  );
}

export default App;