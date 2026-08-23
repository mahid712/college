import { Link } from 'react-router-dom';
import annexurePdf from '../assets/pdf/Annexure18.pdf';
import '../scss/AICTE.scss';

export default function AICTE() {
  return (
    <div className="aicte-page">
      <section className="aicte-hero">
        <div className="aicte-hero-content">
          <p className="eyebrow">Research &amp; Quality</p>
          <h1>AICTE Approval &amp; Disclosures</h1>
          <p className="hero-description">Ensuring transparency, accountability, and excellence in technical education.</p>
          <div className="breadcrumb"><Link to="/">Home</Link> / <Link to="/research">Research &amp; Quality</Link> / AICTE</div>
        </div>
      </section>

      <main className="aicte-content">
        <section className="aicte-panel">
          <div className="section-kicker">Institutional compliance</div>
          <h2>AICTE Approval</h2>
          <span className="approval-badge">Approved Institution</span>
          <p>MGM College is duly approved by the <strong>All India Council for Technical Education (AICTE)</strong>, ensuring high standards in technical education and professional development.</p>
          <a className="disclosure-link" href={annexurePdf} target="_blank" rel="noopener noreferrer">
            <span aria-hidden="true">▣</span> View Mandatory Disclosures (PDF) <span aria-hidden="true">&rarr;</span>
          </a>
        </section>

        <section className="aicte-video-section">
          <div className="section-heading">
            <p className="section-kicker">Inside MGM</p>
            <h2>Institutional overview</h2>
            <p>Learn more about our technical programs, infrastructure, and campus facilities aligned with AICTE standards.</p>
          </div>
          <div className="video-container">
            <iframe src="https://www.youtube.com/embed/SRRjAWsEJmE" title="MGM College institutional overview" allowFullScreen />
          </div>
        </section>
      </main>
    </div>
  );
}