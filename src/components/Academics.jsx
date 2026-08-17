// src/components/Academics.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/Academics.scss';

function Academics() {
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedStream, setSelectedStream] = useState('All Streams');

  const courses = [
    {
      level: 'UG',
      title: 'B.A. (Arts Programs)',
      category: 'Arts',
      description: 'A multi-disciplinary program offering options like Economics, History, Political Science, English Optional, Kannada Optional, and Journalism.',
      streams: ['ECONOMICS, HISTORY, POLITICAL SCIENCE', 'ENGLISH OPTIONAL, KANNADA OPTIONAL, JOURNALISM']
    },
    {
      level: 'UG',
      title: 'B.Sc. (Life Sciences)',
      category: 'Science',
      description: 'Core subjects include Botany, Zoology, and Chemistry combinations for a foundation in biological and chemical sciences.',
      streams: ['BOTANY, ZOOLOGY, CHEMISTRY']
    },
    {
      level: 'UG',
      title: 'B.Sc. (Physical & Maths Sciences)',
      category: 'Science',
      description: 'Core subjects include Mathematics, Physics, and Statistics combinations for quantitative and analytical study.',
      streams: ['MATHEMATICS, PHYSICS, STATISTICS']
    },
    {
      level: 'UG',
      title: 'B.Sc. (Computer Science)',
      category: 'Computer Science',
      description: 'A rigorous program covering software development, data structures, and algorithms as a core specialization.',
      streams: ['COMPUTER SCIENCE, MATHEMATICS', 'STATISTICS, COMPUTER SCIENCE', 'PHYSICS, COMPUTER SCIENCE']
    },
    {
      level: 'UG',
      title: 'B.C.A. (Bachelor of Computer Applications)',
      category: 'Computer Science',
      description: 'A professional program focused entirely on computer applications, software design, and database management.',
      streams: ['COMPUTER APPLICATION', 'LANG(HINDI,ENGLISH,SANSKRIT)']
    },
    {
      level: 'UG',
      title: 'B.Com. (General & Vocational)',
      category: 'Commerce',
      description: 'A foundational course in commerce, with options for vocational training for specialized career paths.',
      streams: ['GENERAL & VOCATIONAL']
    },
    {
      level: 'PG',
      title: 'M.Sc. Computer Science',
      category: 'Computer Science',
      description: 'Advanced study in theoretical computer science, software engineering, and research methodologies.',
      streams: ['COMPUTER APPLICATION']
    },
    {
      level: 'PG',
      title: 'MCA (Master of Computer Applications)',
      category: 'Computer Science',
      description: 'A professional master\'s degree focusing on software engineering, web technologies, and advanced computing systems.',
      streams: ['COMPUTER APPLICATIONS']
    },
    {
      level: 'PG',
      title: 'M.Com (Master of Commerce)',
      category: 'Commerce',
      description: 'Advanced studies in commerce, focusing on financial systems, accounting, and strategic business management.',
      streams: ['COMMERCE & FINANCE']
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
    const matchesStream = selectedStream === 'All Streams' || course.category === selectedStream;
    return matchesLevel && matchesStream;
  });

  const handleOpenModal = () => {
    window.dispatchEvent(new CustomEvent('openAdmissionModal'));
  };

  return (
    <div className="academics-page">
      {/* Hero Banner Section */}
      <section className="academics-hero">
        <div className="container">
          <h1 className="hero-title">Our Academic Programs</h1>
          <p className="hero-subtitle">Explore a diverse range of undergraduate, postgraduate, and research opportunities.</p>
          <div className="breadcrumb-trail">
            <Link to="/">Home</Link> / <span>Academics</span>
          </div>
        </div>
      </section>

      {/* Course Finder Section */}
      <section className="program-finder-section">
        <h2 className="section-heading">Find Your Course of Study</h2>
        <div className="filter-group">
          <select 
            value={selectedLevel} 
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="All Levels">All Levels</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>
          <select 
            value={selectedStream} 
            onChange={(e) => setSelectedStream(e.target.value)}
          >
            <option value="All Streams">All Streams</option>
            <option value="Arts">Arts</option>
            <option value="Science">Science</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
          </select>
        </div>
      </section>

      {/* Course Cards Grid */}
      <section className="course-grid-container">
        <div className="courses-grid">
          {filteredCourses.map((course, index) => (
            <div className="program-card" key={index}>
              <span className="badge-tag">{course.level}</span>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.description}</p>
              <div className="streams-divider"></div>
              <div className="streams-wrapper">
                <h4>Degree Streams/Options:</h4>
                <ul>
                  {course.streams.map((stream, idx) => (
                    <li key={idx}>{stream}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Guidances Section */}
      <section className="guidance-block-section">
        <div className="guidance-inner">
          <h3 className="guidance-title">Other Guidances for Regular Degree Students</h3>
          <ul className="guidance-list">
            <li>Career guidance to lead the students towards employment opportunities.</li>
            <li>Training programs to prepare the final year students to face the competitive exams.</li>
            <li>Free English speaking course, Basic Computer Course, Event Management Course to B.A. students.</li>
            <li>B.Com. vocational course that gives an edge in one's career.</li>
          </ul>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="syllabus-section">
        <h3>Syllabus for the academic year</h3>
        <Link></Link>
        <button className="maroon-btn">Syllabus</button>
      </section>

      {/* Ready to Start Your Journey Section */}
      <section className="journey-cta-section">
        <h3>Ready to Start Your Journey?in mgm</h3>
        <p>View admission deadlines and apply online for the upcoming academic year.</p>
        <div className="cta-actions">
          <button className="maroon-btn">Admission Details</button>
          <button className="maroon-btn" onClick={handleOpenModal}>ADMISSIONS PORTAL</button>
        </div>
      </section>
    </div>
  );
}

export default Academics;