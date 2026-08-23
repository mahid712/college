import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Contact.scss';

export default function Contact() {
  return (
    <div className="contact-page-wrapper">
      {/* Navbar and Footer are rendered globally in App.jsx */}
      <main className="contact-page-main">
        
        {/* Header Banner */}
        <section className="page-header-banner contact-hero">
          <div className="container">
            <h1>Get In Touch</h1>
            <p>We are here to help answer your questions about admissions, programs, and campus life.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> <span>/ Contact Us</span>
            </div>
          </div>
        </section>

        {/* Campus Information & Map Section */}
        <section className="contact-details-section container">
          <div className="contact-grid">
            
            {/* Contact Info Cards */}
            <div className="contact-info-card">
              <h2>Campus Information</h2>
              
              <div className="info-block">
                <i className="fa-solid fa-location-dot info-icon"></i>
                <div className="info-content">
                  <h3>Address</h3>
                  <p>Mahatma Gandhi Memorial College, Kunjibettu, Udupi - 576102, Karnataka, India.</p>
                </div>
              </div>

              <div className="info-block">
                <i className="fa-solid fa-phone info-icon"></i>
                <div className="info-content">
                  <h3>Phone Numbers</h3>
                  <p>Office: +91 820 2520330</p>
                  <p>Admissions: +91 820 2520331</p>
                </div>
              </div>

              <div className="info-block">
                <i className="fa-solid fa-envelope info-icon"></i>
                <div className="info-content">
                  <h3>Email</h3>
                  <p><a href="mailto:principal@mgmudupi.ac.in">principal@mgmudupi.ac.in</a></p>
                  <p><a href="mailto:info@mgmudupi.ac.in">info@mgmudupi.ac.in</a></p>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="contact-map-card">
              <h2>Find Us on the Map</h2>
              <div className="map-responsive-wrapper">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4776.76583047141!2d74.76380627586083!3d13.345921206559515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb5bfb1466e7%3A0xf0d4b8e58c838485!2sMahathma%20Gandhi%20Memorial%20(MGM)%20College!5e1!3m2!1sen!2sin!4v1765867540967!5m2!1sen!2sin"
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MGM College Location Map"
                ></iframe>
              </div>
            </div>

          </div>
        </section>
        
        {/* Feedback & Grievance Portal Section */}
        <section className="contact-form-section container">
          <div className="portal-header-wrapper">
            <h2 className="section-title">Feedback & Grievance Portal</h2>
            <p className="portal-description">
              Access stakeholder feedback reports, submit suggestions, or lodge grievances securely below.
            </p>
          </div>
          
          <div className="portal-grid">
            <div className="portal-card">
              <h4>Stakeholder Feedback</h4>
              <ul className="portal-links">
                <li><a href="pdf/student-feedback.pdf" target="_blank" rel="noopener noreferrer">STUDENT FEEDBACK &rarr;</a></li>
                <li><a href="pdf/alumni-feedback.pdf" target="_blank" rel="noopener noreferrer">ALUMNI FEEDBACK &rarr;</a></li>
                <li><a href="pdf/staff-feedback.pdf" target="_blank" rel="noopener noreferrer">STAFF FEEDBACK &rarr;</a></li>
                <li><a href="pdf/employers-feedback.pdf" target="_blank" rel="noopener noreferrer">EMPLOYERS FEEDBACK &rarr;</a></li>
                <li><a href="pdf/parents-feedback.pdf" target="_blank" rel="noopener noreferrer">PARENTS FEEDBACK &rarr;</a></li>
              </ul>
            </div>

            <div className="portal-card">
              <h4>Reports & Suggestions</h4>
              <ul className="portal-links">
                <li><a href="pdf/feedback-report.pdf" target="_blank" rel="noopener noreferrer">Feedback Report &rarr;</a></li>
                <li><a href="pdf/declaration-compliance.pdf" target="_blank" rel="noopener noreferrer">Declaration &rarr;</a></li>
                <li><a href="#suggestionBox">E-Suggestion Box &rarr;</a></li>
              </ul>
            </div>

            <div className="portal-card">
              <h4>Grievance Redressal</h4>
              <ul className="portal-links">
                <li><a href="#grievanceForm">Grievances can be lodged here &rarr;</a></li>
                <li><a href="https://www.ugc.ac.in/grievance/" target="_blank" rel="noopener noreferrer">UGC Portal for Grievance Redressal &rarr;</a></li>
              </ul>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}