import React from 'react';
import '../scss/Hero.scss';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>A Legacy of Excellence<br />Since 1949.</h1>
          <p className="hero-quote">From virtue springs knowledge - Bhagavadgeetha.</p>
          <div className="badge-naac">
            Accredited by NAAC with 'A+' Grade
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;