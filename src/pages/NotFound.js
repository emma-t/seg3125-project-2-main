import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      // Redirect to the home page after the countdown reaches 0
      window.location.href = "/";
    }
  }, [countdown]);

  return (
    <div className="faq" style={{ textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>
        WHOOPS no one's donated this URL yet. Let's go back to the home page and look again!
      </p>
      <p>Redirecting to home page in {countdown} seconds...</p>
      <a
        href="/"
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        Go Back to Home
      </a>
    </div>
  );
}

export default NotFound;
