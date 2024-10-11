import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // Import the logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* Add logo with a link to the home page */}
        <Link to="/">
          <img src={logo} alt="NewsPortal Logo" className="logo" />
        </Link>
        <h1>NewsPortal</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/general">General</Link></li>
        <li><Link to="/category/business">Business</Link></li>
        <li><Link to="/category/sports">Sports</Link></li>
        <li><Link to="/category/technology">Technology</Link></li>
        <li><Link to="/category/entertainment">Entertainment</Link></li>
        <li><Link to="/category/science">Science</Link></li>
        <li><Link to="/category/health">Health</Link></li>
        <li><Link to="/epaper">ePaper</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/subscribe">Subscribe</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;