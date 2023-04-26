import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="top-header">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <nav className="top-menu">
          <ul>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <nav className="social-menu">
          <ul>
            <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </nav>
      </div>
      <nav className="main-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/writing">Writing</Link>
            <ul className="sub-menu">
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/articles">Articles</Link></li>
              <li><Link to="/essays">Essays</Link></li>
            </ul>
          </li>
          <li><Link to="/newsletter">Newsletter</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button>Go</button>
      </div>
    </header>
  );
}

export default Header;


