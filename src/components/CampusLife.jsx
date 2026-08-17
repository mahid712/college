import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../scss/CampusLife.scss';

export default function CampusLife() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="campus-life-page">
      <main>
        {/* Inner Hero Section */}
        <section className="inner-hero campus-hero">
          <div className="hero-content">
            <h1>Campus Life & Culture</h1>
            <p className="red-text">
              Discover the vibrant community, student clubs, facilities, and unique cultural heritage of MGM.
            </p>
            <div className="breadcrumb">
              <a href="/">Home</a> / Campus Life
            </div>
          </div>
        </section>

        {/* Campus Features Grid Section */}
        <section className="campus-features">
          <div className="container">
            <h2 className="section-title">Explore Our Vibrant Campus</h2>
            <p className="section-subtitle">
              A place where academic rigor meets a rich cultural and student experience.
            </p>

            <div className="pillars-grid campus-features-grid">
              <div className="pillar-card">
                <i className="pillar-icon fas fa-book-open"></i>
                <h3>Library & Resources</h3>
                <p>Access one of the largest academic libraries in the region, featuring over 1.5 lakh volumes, e-journals, and modern study spaces.</p>
                <a href="/library" className="learn-more">View Library Details &rarr;</a>
              </div>
              
              <div className="pillar-card">
                <i className="pillar-icon fas fa-theater-masks"></i>
                <h3>Yakshagana</h3>
                <p>Home to the famous Yakshagana Kendra and numerous performing arts clubs that celebrate coastal Karnataka’s rich heritage.</p>
                <a href="/yakshagana" className="learn-more">Explore Yakshagana &rarr;</a>
              </div>
              
              <div className="pillar-card">
                <i className="pillar-icon fas fa-futbol"></i>
                <h3>Sports & Fitness</h3>
                <p>Modern indoor sports complex, large playfields, and a fully equipped gymnasium promoting student health and competitive spirit.</p>
                <a href="/sports" className="learn-more">See Sports Facilities &rarr;</a>
              </div>
              
              <div className="pillar-card">
                <i className="pillar-icon fas fa-users"></i>
                <h3>Student Clubs & Activities</h3>
                <p>Join NCC, NSS, and over 20 active student clubs dedicated to debate, nature, science, and social outreach.</p>
                <a href="/club" className="learn-more">Join a Club &rarr;</a>
              </div>
              
              <div className="pillar-card">
                <i className="pillar-icon fas fa-flask"></i>
                <h3>Science Museum</h3>
                <p>Visit the Regional Science Museum, an invaluable resource for practical learning and scientific exploration for all students.</p>
                <a href="/museum" className="learn-more">Plan Your Visit &rarr;</a>
              </div>
              
              <div className="pillar-card">
                <i className="pillar-icon fas fa-utensils"></i>
                <h3>Hostel & Mess</h3>
                <p>Safe, comfortable hostel accommodations available for male and female students, with high-quality and hygienic dining facilities.</p>
                <a href="/canteen" className="learn-more">Check Availability &rarr;</a>
              </div>

              <div className="pillar-card">
                <i className="pillar-icon fas fa-medal"></i>
                <h3>NCC & NSS</h3>
                <p>Fostering discipline, leadership, and social service through active cadet training and community development camps.</p>
                <a href="/ncc" className="learn-more">Check Availability &rarr;</a>
              </div>

              <div className="pillar-card">
                <i className="pillar-icon fas fa-graduation-cap"></i>
                <h3>Alumni</h3>
                <p>Connecting a vast global network of former students to mentor current batches and support institutional growth.</p>
                <a href="/alumni" className="learn-more">Check Availability &rarr;</a>
              </div>

              <div className="pillar-card">
                <i className="pillar-icon fas fa-university"></i>
                <h3>Campus Cells</h3>
                <p>Dedicated student and faculty cells ensuring guidance, grievance redressal, and holistic skill enhancement.</p>
                <a href="/cells" className="learn-more">Check Availability &rarr;</a>
              </div>

              <div className="pillar-card">
                <i className="pillar-icon fas fa-building"></i>
                <h3>Campus Facilities</h3>
                <p>Modern infrastructure, well-equipped labs, libraries, and common spaces designed to facilitate seamless learning.</p>
                <a href="/facility" className="learn-more">Check Availability &rarr;</a>
              </div>

              <div className="pillar-card">
                <i className="pillar-icon fas fa-tree"></i>
                <h3>Garden</h3>
                <p>Serene, lush green botanical environments providing students with peaceful spaces to relax and study outdoors.</p>
                <a href="/garden" className="learn-more">Check Availability &rarr;</a>
              </div>

              <div className="pillar-card">
                <i className="pillar-icon fas fa-landmark"></i>
                <h3>Campus Block</h3>
                <p>State-of-the-art academic blocks featuring modern classrooms, well-equipped labs, and collaborative seminar halls.</p>
                <a href="/campus_block" className="learn-more">Check Availability &rarr;</a>
              </div>

              <div className="pillar-card">
                <i className="pillar-icon fas fa-theater-masks"></i>
                <h3>Culture Center</h3>
                <p>Vibrant hubs dedicated to the performing arts, traditional heritage, and cultural events, including our renowned Yakshagana Kendra.</p>
                <a href="/culture_center" className="learn-more">Check Availability &rarr;</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}