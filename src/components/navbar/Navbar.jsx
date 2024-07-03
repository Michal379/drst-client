import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoimage from '../../images/logoimage.png';
import './Navbar.css'; // Ensure you create this CSS file and include the styles below

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoimage} alt="Logo" style={{ width: '200px' }} />
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        {!isMobileMenuOpen ? (
          <div>&#9776;</div> // Hamburger icon (three lines)
        ) : (
          <div>&#10005;</div> // 'X' icon for close
        )}
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={toggleMobileMenu}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/who-we-are" className="nav-link" onClick={toggleMobileMenu}>Who We Are</Link>
        </li>
        <li className="nav-item">
          <Link to="/what-we-do" className="nav-link" onClick={toggleMobileMenu}>What We Do</Link>
        </li>
        <li className="nav-item">
          <Link to="/our-projects" className="nav-link" onClick={toggleMobileMenu}>Our Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/our-partners" className="nav-link" onClick={toggleMobileMenu}>Our Partners</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" className="nav-link" onClick={toggleMobileMenu}>Contact Us</Link>
        </li>
      </ul>

      <Link to="/contact-us" className="donate-button" onClick={toggleMobileMenu}>DONATE NOW</Link>
    </nav>
  );
};

export default Navbar;
