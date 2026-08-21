// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../scss/Navbar.scss';
import gandhiPdf from '../assets/pdf/mgm-ghandi.pdf';
import AdmissionModal from './AdmissionModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('openAdmissionModal', handleOpenModal);
    return () => {
      window.removeEventListener('openAdmissionModal', handleOpenModal);
    };
  }, []);

  return (
    <>
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

          <button className="btn-apply" onClick={() => setIsModalOpen(true)}>APPLY NOW</button>

          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <AdmissionModal 
        isOpen={isModalOpen} 
        closeModal={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;