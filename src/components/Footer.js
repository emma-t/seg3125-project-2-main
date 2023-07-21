// Footer.js

import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div>
        <p>Phone: (613) 613-6133</p>
        <p>Email: contact@revivemart.com</p>
      </div>
      <p>© {new Date().getFullYear()} ReviveMart. All rights reserved.</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#4AD66D',
  padding: '10px',
  textAlign: 'center',
};

export default Footer;
