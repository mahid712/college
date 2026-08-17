// src/components/ScholarshipNavbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gandhiPdf from '../assets/pdf/mgm-ghandi.pdf';
import '../scss/Navbar.scss';

const ScholarshipNavbar = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-title">MGM Udupi</span>
        </div>
      
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/academics">Academics</Link>
          <Link to="/research">Research & Quality</Link>
          <Link to="/campus">Campus Life</Link>
          
          <div className="dropdown">
            <span className="dropbtn">About MGM</span>
            <div className="dropdown-content">
              <Link to="/vision">Vision & Mission</Link>
              <Link to="/principal">Principal</Link>
              <Link to="/management">Management</Link>
              <Link to="/history">History</Link>
              <Link to="/gallery">Image Gallery</Link>
              <Link to="/scholarships">Scholarships</Link>
              <a href={gandhiPdf} target="_blank" rel="noopener noreferrer">
                Gandhian Study Centre
              </a>
              <Link to="/rules">Rules</Link>
            </div>
          </div>

          <a href="#contact">Contact Us</a>
          <a href="#login" className="login-link">Login</a>
        </nav>

        {/* This triggers the parent function passed via props */}
        <button className="btn-apply" onClick={onOpenModal}>APPLY SCHOLARSHIP</button>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default ScholarshipNavbar;