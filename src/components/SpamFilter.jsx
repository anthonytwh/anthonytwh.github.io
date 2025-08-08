import React, { useState } from 'react';

const SpamFilter = ({ emailAddress }) => {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaResult, setCaptchaResult] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [emailRevealed, setEmailRevealed] = useState(false);

  // Google Analytics tracking functions
  const trackEvent = (action, label = null) => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Google Tag Manager tracking
      window.gtag('event', action, {
        event_category: 'Email Spam Filter',
        event_label: label,
        value: 1
      });
    }
    
    // Also track with legacy Google Analytics if available
    if (typeof window !== 'undefined' && window.ga) {
      window.ga('send', 'event', {
        eventCategory: 'Email Spam Filter',
        eventAction: action,
        eventLabel: label,
        eventValue: 1
      });
    }
  };

  // Generate a simple math CAPTCHA
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        result = num1 + num2;
    }
    
    return { num1, num2, operator, result };
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());

  const handleRevealClick = (e) => {
    e.preventDefault();
    // Track reveal button click
    trackEvent('reveal_clicked', 'email_reveal_initiated');
    setShowCaptcha(true);
    setCaptchaResult(null);
    setCaptchaInput('');
  };

  const handleCaptchaSubmit = (e) => {
    e.preventDefault();
    const userAnswer = parseInt(captchaInput);
    
    if (userAnswer === captcha.result) {
      // Track successful CAPTCHA completion
      trackEvent('captcha_success', `captcha_solved_${captcha.num1}${captcha.operator}${captcha.num2}`);
      setCaptchaResult('success');
      setTimeout(() => {
        setShowCaptcha(false);
        setEmailRevealed(true);
        // Track email revealed
        trackEvent('email_revealed', emailAddress);
      }, 1000);
    } else {
      // Track failed CAPTCHA attempt
      trackEvent('captcha_failed', `attempt_${attempts + 1}`);
      setCaptchaResult('error');
      setAttempts(attempts + 1);
      if (attempts >= 2) {
        // Generate new CAPTCHA after 3 failed attempts
        setCaptcha(generateCaptcha());
        setAttempts(0);
        // Track CAPTCHA reset
        trackEvent('captcha_reset', 'max_attempts_reached');
      }
    }
  };

  const handleCancel = () => {
    // Track CAPTCHA cancellation
    trackEvent('captcha_cancelled', 'user_cancelled');
    setShowCaptcha(false);
    setCaptchaInput('');
    setCaptchaResult(null);
    setAttempts(0);
  };

  const generateNewCaptcha = () => {
    // Track manual CAPTCHA regeneration
    trackEvent('captcha_regenerated', 'user_requested');
    setCaptcha(generateCaptcha());
    setCaptchaInput('');
    setCaptchaResult(null);
    setAttempts(0);
  };

  const handleEmailClick = (e) => {
    // Track email link click
    trackEvent('email_clicked', emailAddress);
    
    // Let the default mailto behavior happen
    // The mailto link will open the user's email client
  };

  return (
    <>
      {!emailRevealed ? (
        <button 
          onClick={handleRevealClick}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: '#0000EE', 
            textDecoration: 'underline',
            cursor: 'pointer',
            font: 'inherit',
            padding: 0,
            margin: 0
          }}
        >
          [click to reveal email - humans only]
        </button>
      ) : (
        <span>
          <a 
            href={`mailto:${emailAddress}`}
            onClick={handleEmailClick}
            style={{ 
              color: '#0000EE', 
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >
            {emailAddress}
          </a>
        </span>
      )}
      
      {showCaptcha && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            maxWidth: '400px',
            width: '90%'
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Spam Protection</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Please solve this simple math problem to reveal the email address:
            </p>
            
            <div style={{ 
              backgroundColor: '#f5f5f5', 
              padding: '1rem', 
              borderRadius: '4px',
              marginBottom: '1rem',
              textAlign: 'center',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}>
              {captcha.num1} {captcha.operator} {captcha.num2} = ?
            </div>
            
            <form onSubmit={handleCaptchaSubmit}>
              <input
                type="number"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                placeholder="Enter your answer"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  fontSize: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  marginBottom: '1rem'
                }}
                autoFocus
              />
              
              {captchaResult === 'error' && (
                <div style={{ color: 'red', marginBottom: '1rem' }}>
                  Incorrect answer. Please try again.
                </div>
              )}
              
              {captchaResult === 'success' && (
                <div style={{ color: 'green', marginBottom: '1rem' }}>
                  Correct! Revealing email address...
                </div>
              )}
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  type="submit"
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#0066cc',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    flex: 1
                  }}
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#666',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    flex: 1
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
            
            <button
              onClick={generateNewCaptcha}
              style={{
                background: 'none',
                border: 'none',
                color: '#0066cc',
                textDecoration: 'underline',
                cursor: 'pointer',
                marginTop: '1rem',
                fontSize: '0.9rem'
              }}
            >
              Generate new problem
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SpamFilter; 