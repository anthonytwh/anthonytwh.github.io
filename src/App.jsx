import React from 'react';
import './assets/styles.css';
import SpamFilter from './components/SpamFilter';

function App() {
  const handleGitHubClick = (e) => {
    e.preventDefault();
    
    // Track the GitHub link click with Google Tag Manager
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Outbound Link',
        event_label: 'GitHub Profile',
        value: 1
      });
    }
    
    // Also track with legacy Google Analytics if available
    if (typeof window !== 'undefined' && window.ga) {
      window.ga('send', 'event', {
        eventCategory: 'Outbound Link',
        eventAction: 'click',
        eventLabel: 'GitHub Profile',
        eventValue: 1
      });
    }
    
    // Navigate to GitHub
    window.location.href = 'https://github.com/anthonytwh';
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Anthony Tam</h1>
        <p>Did you come here from LinkedIn? If so, you're in the right place.</p>
        <p>Github: <a href="https://github.com/anthonytwh" onClick={handleGitHubClick}>anthonytwh</a></p>
        <p>Contact me: <SpamFilter emailAddress="contact@anthonyt.ca" /></p>
      </div>
    </div>
  );
}

export default App;