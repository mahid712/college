import React from 'react';
import '../scss/Quicklinks.scss';

const QuickLinks = ({ openModal }) => {
  return (
    <>
      {/* Why Choose MGM Section */}
      <section className="info-section">
        <div className="container">
          <h2>Why Choose MGM?</h2>
          <p className="section-subtitle">A tradition of excellence, innovation, and holistic development.</p>
          
          <div className="cards-grid">
            <div className="feature-card">
              <div className="card-icon">🎓</div>
              <h3>Academic Excellence</h3>
              <p>Recognized for high ranks, quality research, and an A+ NAAC Grade. Our faculty are devoted to scholarly achievement.</p>
              <a href="#academics" className="card-link">Explore Academics →</a>
            </div>

            <div className="feature-card">
              <div className="card-icon">🏛️</div>
              <h3>Campus & Culture</h3>
              <p>Discover extensive facilities, including the Library, Museum, and vibrant cultural centers like the Yakshagana Kendra.</p>
              <a href="#campus" className="card-link">View Facilities →</a>
            </div>

            <div className="feature-card">
              <div className="card-icon">💼</div>
              <h3>Career Focused</h3>
              <p>We prepare students for tomorrow's careers with dedicated placement cells, practical skills training, and industry linkages.</p>
              <a href="#placements" className="card-link">Check Placements →</a>
            </div>
          </div>
        </div>
      </section>

      {/* What's Happening Section */}
      <section className="info-section alt-bg">
        <div className="container">
          <h2>What's Happening @ MGM</h2>
          <p className="section-subtitle">Stay up-to-date with our latest events and important announcements.</p>
          
          <div className="cards-grid">
            {/* Admission Open Card triggers the modal */}
            <div className="feature-card clickable-card" onClick={openModal} style={{ cursor: 'pointer' }}>
              <div className="card-icon">📢</div>
              <h3>Admission Open</h3>
              <p>Click here to check eligibility and proceed to the portal.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon">📚</div>
              <h3>Our Academics</h3>
              <p>Explore a wide range of courses in Arts, Science, and Commerce.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon">🖼️</div>
              <h3>View Campus Life</h3>
              <p>See our facilities, events, and student activities in the image gallery.</p>
            </div>
          </div>

          <div className="center-btn-container">
            <a href="#announcements" className="btn-dark-pill">View All Announcements</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuickLinks;
