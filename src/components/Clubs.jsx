import { Link } from 'react-router-dom';
import '../scss/Clubs.scss';

const clubs = [
  ['Commerce Club', 'Ms. Smitha Bhat', 'Mr. Vikas Shetty'],
  ['IT Club', 'Dr. Vishwanath Pai M.', 'Mrs. Anupama Ajith'],
  ['Science Club', 'Mrs. Umadevi', 'Mrs. Vasavi'],
  ['Arts Club', 'Mr. Vidyanath K', '---'],
  ['Fine Arts Club', 'Dr. Puthi Vasanth Kumar', 'Mrs. Spoorthy Fernandes'],
  ['Yakshagana and Nataka Ranga', 'Mr. Raghavendra Thunga', 'Mr. Sandeep Shettigar'],
  ['Eco Club', 'Dr. Maneetha', 'Mrs. Shruthi'],
  ['Literary Forum', 'Dr. Vasumathi Bhat', 'Mrs. Ashwini C Acharya, Ms. Swathi'],
  ['Sports Club', 'Mrs. Jayashree Nayak', '---'],
];

const cells = [
  ['Teaching & Learning Centre', 'Mr. Arun Kumar B', '---'],
  ['Placement Cell', 'Dr. Vishwanath Pai M', 'Mrs. Rashmi'],
  ['Skill Development Cell', 'Mr. Rajamoorthy Rao', '---'],
  ['Alumni Cell', 'Mrs. Adithi', '---'],
  ['Research Cell', 'Dr. Vasumathi Bhat', 'Dr. Vijayalakshmi'],
  ['Human Rights & Religious Harmony Cell', 'Mr. Subodh Pai', '---'],
  ['Scholarship Counseling Cell', 'Mr. Vidyanath', '---'],
];

const committees = [
  ['Anti-ragging Committee', 'Principal', 'Staff Council (Members)'],
  ['SC and ST Cell', 'Prof. Ramesh Karla', '---'],
  ["Students' Grievance and Counselling Cell", 'Mrs. Vanitha', '---'],
  ["Women's Harrassment Redressal Cell", 'Mrs. Veera Ida Pinto', '---'],
  ["Women's Counsellor", 'Mrs. Rekha N Chandra', 'Mrs. Jyothsna'],
  ["Women's Welfare Cell", 'Mrs. Raksha Shenoy', '---'],
];

function ActivityTable({ rows, firstColumn }) {
  return (
    <div className="activity-table-container">
      <table className="activity-table">
        <thead><tr><th>{firstColumn}</th><th>Convener</th><th>Co-convener</th></tr></thead>
        <tbody>{rows.map(([name, convener, coConvener]) => <tr key={name}><td>{name}</td><td>{convener}</td><td>{coConvener}</td></tr>)}</tbody>
      </table>
    </div>
  );
}

export default function Clubs() {
  return (
    <div className="clubs-page">
      <section className="clubs-hero">
        <div className="clubs-hero-content">
          <p className="eyebrow">Campus &amp; Culture</p>
          <h1>Clubs, Cells &amp; Committees</h1>
          <p className="hero-description">Find the student communities, institutional cells, and committees that shape life and learning at MGM College.</p>
          <div className="breadcrumb"><Link to="/">Home</Link> / <Link to="/campus">Campus &amp; Culture</Link> / Clubs</div>
        </div>
      </section>

      <main className="clubs-content">
        <div className="clubs-intro"><p className="section-kicker">Participation and leadership</p><h2>Spaces to learn, contribute, and belong.</h2><p>Our clubs, cells, and committees bring students and staff together around academic interests, cultural life, service, and institutional responsibility.</p></div>
        <section className="activity-section"><div className="section-heading"><p className="section-kicker">01 / Student life</p><h2>Clubs</h2></div><ActivityTable rows={clubs} firstColumn="Club" /></section>
        <section className="activity-section"><div className="section-heading"><p className="section-kicker">02 / Support</p><h2>Cells &amp; Centre</h2></div><ActivityTable rows={cells} firstColumn="Cell" /></section>
        <section className="activity-section"><div className="section-heading"><p className="section-kicker">03 / Governance</p><h2>Committees</h2></div><ActivityTable rows={committees} firstColumn="Committee" /></section>
      </main>
    </div>
  );
}