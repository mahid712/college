// src/components/ScholarshipNavbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import gandhiPdf from '../assets/pdf/mgm-ghandi.pdf';
import '../scss/Navbar.scss';
import ThemeToggle from './ThemeToggle';

const ScholarshipNavbar = ({ onOpenModal, isDarkMode, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="brand-title">MGM Udupi</Link>
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

          <Link to="/contact">Contact Us</Link>
          <a href="https://mgm-mapas.vercel.app/" className="login-link" target="_blank" rel="noopener noreferrer">Login</a>
        </nav>

        <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />

        {/* This triggers the parent function passed via props */}
        <button className="btn-apply" onClick={onOpenModal}>APPLY SCHOLARSHIP</button>

        <button
          type="button"
          className="hamburger"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default ScholarshipNavbar;