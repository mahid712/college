import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Sports.scss';

// Dynamically import sports slider images from src/assets/sports/
// Supports sp1.jpg, sp2.jpg, SP1.JPG, sp1.png, etc.
const sportsAssets = import.meta.glob('../assets/sports/sp*.*', {
  eager: true,
  import: 'default',
  query: '?url',
});

// Extract image URLs to support seamless infinite loop animation
const sliderImages = Object.values(sportsAssets);

// Sports page content structured as objects for a clean, data-driven architecture
const sportsData = {
  introduction: [
    "MGM College has a long history of encouraging young people to develop their personality by involving themselves in a variety of co-curricular activities. The field on which a great deal of attention was focused by the management was the sports field. Traditions have been so well established that the atmosphere of discipline, decorum, and dignity has been continuing without interruption during the last twenty years."
  ],
  generalRules: [
    "Captains for the various games will be nominated by the Physical Director of the College.",
    "Players will be selected from those who are regular in practice and intramural games.",
    "Proper uniform is mandatory for all games and sports.",
    "Playgrounds are open on all working days between 4:00 p.m. and 6:00 p.m.",
    "Students must return all sports materials safely to the person who issued them.",
    "No student is permitted to play in an outside team without the Principal's permission.",
    "In all matters of discrepancy and discipline, the Principal's decision will be final."
  ],
  facilities: [
    "The Department of Physical Education is well-equipped with a 400m track, football, basketball, and volleyball courts, and a cricket pitch. A remarkable addition is the full-fledged Indoor Sports Complex, which includes 3 badminton courts, 2 gyms, table tennis, and chess boards."
  ],
  achievements: [
    "The chronicle of the college is rich with outstanding achievements. From Mr. M.G.S. Shetty winning silver at the Asian Games to national champions in Javelin throw and \"Sprint Queens,\" MGM has held its banner high in the world of sports."
  ]
};

export default function Sports() {
  return (
    <div className="page-wrapper sports-page">
      <main>
        {/* Hero Section */}
        <section className="inner-hero">
          <div className="hero-content">
            <h1>Department of Sports</h1>
            <p className="red-text">Developing personality through discipline and athletics.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/campus_life">Campus & Culture</Link> / Sports
            </div>
          </div>
        </section>

        {/* Moving Image Section */}
        <div className="slider-wrapper">
          <div className="slider">
            {sliderImages.length > 0 ? (
              // Duplicate array to achieve seamless infinite marquee loop
              [...sliderImages, ...sliderImages].map((src, index) => (
                <img 
                  key={index} 
                  src={src} 
                  alt={`MGM Sports ${index + 1}`} 
                  loading="lazy" 
                />
              ))
            ) : (
              <p className="no-images" style={{ textAlign: 'center', width: '100%', padding: '20px' }}>
                Loading sports images...
              </p>
            )}
          </div>
        </div>

        {/* Content Section */}
        <section className="container content-section">
          <div className="sports-content-block">

            <h2>Introduction</h2>
            {sportsData.introduction.map((para, index) => (
              <p key={index}>{para}</p>
            ))}

            <h2>General Rules Regarding Sports Activities</h2>
            <ul className="rules-list">
              {sportsData.generalRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>

            <h2>Department Facilities</h2>
            {sportsData.facilities.map((para, index) => (
              <p key={index}>{para}</p>
            ))}

            <h2>Achievements</h2>
            {sportsData.achievements.map((para, index) => (
              <p key={index}>{para}</p>
            ))}

          </div>
        </section>
      </main>
    </div>
  );
}