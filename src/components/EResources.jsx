import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/EResources.scss';

const resources = [
  {
    title: 'Subscription-Based E-Content',
    label: 'INFLIBNET-N List & DELNET',
    description: 'The MGM College library provides access to scholarly digital materials through INFLIBNET-N List and DELNET (Developing Library Network).',
    items: ['Approximately 6,000+ e-journals', 'Over 1,64,300+ e-books'],
    note: 'Inter Library Loan (ILL) services are also available to all users through DELNET.',
  },
  {
    title: 'Open Access Repositories',
    label: 'Research Collections',
    description: 'For extensive research and academic purposes, the library provides access to national repositories and digital learning platforms.',
    items: ['Shodhaganga', 'NDLI (National Digital Library of India)'],
  },
];

function EResources() {
  return (
    <div className="e-resources-page">
      <section className="e-resources-hero">
        <div className="e-resources-hero-content">
          <p className="eyebrow">Library Services</p>
          <h1>Library E-Resources</h1>
          <p className="hero-description">
            Explore digital journals, books, repositories, and research tools available to MGM students and faculty.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / E-Resources
          </div>
        </div>
      </section>

      <main className="e-resources-content">
        <div className="intro-block">
          <span className="section-kicker">Learn beyond the shelves</span>
          <h2>Digital access for deeper research</h2>
          <p>
            The MGM College library is committed to providing comprehensive access to scholarly digital materials for all students and faculty. These subscriptions and repositories support learning, teaching, and academic research.
          </p>
        </div>

        <div className="resource-grid">
          {resources.map((resource) => (
            <article className="resource-panel" key={resource.title}>
              <div className="panel-number">0{resources.indexOf(resource) + 1}</div>
              <p className="panel-label">{resource.label}</p>
              <h2>{resource.title}</h2>
              <p className="panel-description">{resource.description}</p>
              <ul className="resource-list">
                {resource.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {resource.note && <p className="resource-note">{resource.note}</p>}
              <div className="resource-links">
                {resource.title === 'Open Access Repositories' ? (
                  <>
                    <a href="https://shodhganga.inflibnet.ac.in/" target="_blank" rel="noreferrer">Visit Shodhganga</a>
                    <a href="https://ndl.iitkgp.ac.in/" target="_blank" rel="noreferrer">Visit NDLI</a>
                  </>
                ) : (
                  <>
                    <a href="https://nlist.inflibnet.ac.in/" target="_blank" rel="noreferrer">Visit N-LIST</a>
                    <a href="https://delnet.in/" target="_blank" rel="noreferrer">Visit DELNET</a>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default EResources;
