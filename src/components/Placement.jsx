import React from 'react';
import { Link } from 'react-router-dom';
import placementHtml from '../data/placement.html?raw';
import '../scss/Placement.scss';

const placementContent = placementHtml.trim();

export default function Placement() {
  return (
    <div className="placement-page">
      <section className="inner-hero placement-hero">
        <div className="hero-content">
          <h1>Campus Placement</h1>
          <p className="red-text">Dream big and begin your career before you complete your degree.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Campus Placement
          </div>
        </div>
      </section>

      <main className="placement-content">
        <div className="placement-html" dangerouslySetInnerHTML={{ __html: placementContent }} />
      </main>
    </div>
  );
}
