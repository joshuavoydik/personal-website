import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {(new Date().getFullYear())} Your Name. All rights reserved.</p>
        <nav className="footer-menu">
          <ul>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
