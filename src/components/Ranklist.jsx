import { Link } from 'react-router-dom';
import RankList from '../data/ranklistdata';
import '../scss/Ranklist.scss';

export default function Ranklist() {
  return (
    <div className="ranklist-page">
      <section className="ranklist-hero">
        <div className="ranklist-hero-content">
          <p className="eyebrow">Academic Excellence</p>
          <h1>List of Rank Holders</h1>
          <p className="hero-description">Celebrating the MGM students who have secured university ranks across generations.</p>
          <div className="breadcrumb"><Link to="/">Home</Link> / <Link to="/research">Research &amp; Quality</Link> / Rank Holders</div>
        </div>
      </section>

      <main className="ranklist-content">
        <div className="ranklist-heading">
          <p className="section-kicker">A tradition of achievement</p>
          <h2>University Rank List</h2>
          <p>MGM College celebrates the academic excellence of students who have secured university ranks over the decades.</p>
        </div>
        <div className="ranklist-html-wrapper">
          <RankList />
        </div>
      </main>
    </div>
  );
}