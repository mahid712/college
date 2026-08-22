import React from 'react';
import { Link } from 'react-router-dom';
import iiqaPdf from '../assets/pdf/IIQA_declaration.pdf';
import selfStudyPdf from '../assets/pdf/SSR_Declaration.pdf';
import ssrPdf from '../assets/pdf/SSR.pdf';
import naacCertificatePdf from '../assets/pdf/NAAC4.pdf';
import '../scss/NAAC.scss';

function NAAC() {
  const documents = [
    {
      id: 1,
      title: 'IIQA Declaration',
      link: iiqaPdf,
      description: 'Internal Institutional Quality Assurance Declaration'
    },
    {
      id: 2,
      title: 'Self Study Declaration',
      link: selfStudyPdf,
      description: 'SSR Declaration for Accreditation'
    },
    {
      id: 3,
      title: 'SSR 4th Cycle',
      link: ssrPdf,
      description: 'Self Study Report - 4th Cycle of Accreditation'
    },
    {
      id: 4,
      title: "Accredited by NAAC with 'A+' Grade (CGPA 3.36)",
      link: naacCertificatePdf,
      description: 'NAAC Accreditation Certificate - IV Cycle'
    }
  ];

  return (
    <div className="naac-page">
      {/* Hero Section */}
      <section className="naac-hero">
        <div className="hero-content">
          <i className="fas fa-certificate"></i>
          <h1>NAAC & Quality Documentation</h1>
        </div>
        <div className="breadcrumb-trail">
          <Link to="/">Home</Link> / <Link to="/research">Research & Quality</Link> / <span>NAAC Accreditation</span>
        </div>
      </section>

      {/* Main Content */}
      <div className="naac-content-wrapper">
        {/* Overview Section */}
        <section className="naac-overview">
          <div className="overview-content">
            <h2>NAAC Accreditation</h2>
            <p className="accreditation-status">
              <strong>A+ Grade (3.36 CGPA)</strong>
            </p>
            <p className="overview-text">
              MGM College is proud to be accredited by the <strong>National Assessment and Accreditation Council (NAAC)</strong>, 
              validating our commitment to high educational standards and continuous quality improvement. Our accreditation reflects 
              our dedication to excellence in teaching, research, and overall institutional performance.
            </p>
            <div className="key-highlights">
              <div className="highlight-item">
                <i className="fas fa-check-circle"></i>
                <span>IV Cycle of Accreditation</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-star"></i>
                <span>A+ Grade Accreditation</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-award"></i>
                <span>CGPA: 3.36</span>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="documents-section">
          <h2 className="section-heading">Quality Documentation & Reports</h2>
          <p className="section-subtitle">Access all official accreditation documents and quality assurance reports</p>
          
          <div className="documents-grid">
            {documents.map((doc) => (
              <div className="document-card" key={doc.id}>
                <div className="doc-icon">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <h3>{doc.title}</h3>
                <p>{doc.description}</p>
                <a 
                  href={doc.link === '#' ? '#' : doc.link} 
                  target={doc.link !== '#' ? '_blank' : '_self'}
                  rel={doc.link !== '#' ? 'noopener noreferrer' : ''}
                  className="doc-link"
                  onClick={doc.link === '#' ? (e) => e.preventDefault() : null}
                  style={doc.link === '#' ? { pointerEvents: 'none', opacity: 0.6 } : {}}
                >
                  {doc.link !== '#' ? 'Download PDF' : 'Coming Soon'} <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="gallery-section">
          <div className="gallery-content">
            <h3>NAAC Peer Team Visit</h3>
            <p>Click below to view photos from the NAAC Peer Team Visit to our campus</p>
            <Link to="/gallery" className="gallery-link">
              View NAAC Peer Team Visit Photos <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </section>

        {/* Quality Assurance Info */}
        <section className="quality-info-section">
          <div className="info-grid">
            <div className="info-card">
              <i className="fas fa-lightbulb"></i>
              <h4>Quality Commitment</h4>
              <p>Our institutional commitment to quality assurance ensures continuous improvement in all academic and administrative processes.</p>
            </div>
            <div className="info-card">
              <i className="fas fa-users"></i>
              <h4>Stakeholder Focus</h4>
              <p>We prioritize the needs of all stakeholders including students, faculty, staff, and the broader academic community.</p>
            </div>
            <div className="info-card">
              <i className="fas fa-chart-line"></i>
              <h4>Continuous Improvement</h4>
              <p>Through regular assessment and evaluation, we consistently enhance our educational offerings and institutional practices.</p>
            </div>
            <div className="info-card">
              <i className="fas fa-handshake"></i>
              <h4>Transparency & Accountability</h4>
              <p>All accreditation documents and quality reports are publicly available, demonstrating our commitment to transparency.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default NAAC;
no