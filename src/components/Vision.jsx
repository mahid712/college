import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Vision.scss';

export default function Vision() {
  return (
    <div className="vision-page-wrapper">
      {/* Navbar and Footer are rendered globally in App.jsx */}
      <main className="vision-page-main">
        <section className="page-header-banner">
          <div className="container">
            <h1>Vision & Mission</h1>
            <p>Mahatma Gandhi Memorial College</p>
            <div className="breadcrumb">
                                        <Link to="/">Home</Link> <span>/ Message from Principal</span>
                                    </div>
          </div>
        </section>

        <section className="vision-content-section container">
          {/* Introduction / Founder's Quote */}
          <div className="vision-intro-card">
            <p className="founder-vision-text">
              The vision of our founder <strong>Dr. T.M.A. Pai</strong> was &ldquo;to take education to the doorsteps of the people in and around Udupi.&rdquo; The lamp lit by him has lit hundreds of lamps. The college believes in words of the Mahatma after whom the college is named—&ldquo;The end of all knowledge must be building up of character&rdquo;. With the changing times the Vision &amp; Mission of the college has been affirmed as follows:
            </p>
          </div>

          {/* Vision Section */}
          <div className="content-card vision-block">
            <h2>Vision</h2>
            <p className="block-intro">A student of Mahatma Gandhi Memorial College will be an individual:</p>
            <ul className="content-list">
              <li>Endowed with the spirit of enquiry</li>
              <li>Eager to acquire knowledge and skills</li>
              <li>Competent to be employed in his/her field</li>
              <li>Possessing qualities of leadership, responsible to family, society and nation</li>
              <li>Capable of appreciating aesthetics and understanding our cultural heritage and rational and humane in attitude</li>
            </ul>
          </div>

          {/* Mission Section */}
          <div className="content-card mission-block">
            <h2>Mission</h2>
            <p className="block-intro">The Mahatma Gandhi Memorial College strives:</p>
            <ul className="content-list">
              <li>To provide students with quality education using innovative and humane methods of teaching and learning</li>
              <li>To develop in them competence for employment as well as entrepreneurship, to promote their power of thinking and creative ability</li>
              <li>To organize activities that will contribute to the understanding of their responsibilities to the family, the society and the nation</li>
              <li>To promote national integration through cordial relationship between and among stake holders</li>
            </ul>
          </div>

          {/* Objectives Section */}
          <div className="content-card objectives-block">
            <h2>Objectives</h2>
            <ul className="objectives-list">
              <li>
                <i className="fa-solid fa-check-circle"></i>
                <span>Character building</span>
              </li>
              <li>
                <i className="fa-solid fa-check-circle"></i>
                <span>Excellence in teaching-learning</span>
              </li>
              <li>
                <i className="fa-solid fa-check-circle"></i>
                <span>Building competence for employability/entrepreneurship</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}