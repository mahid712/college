import { Link } from 'react-router-dom';
import '../scss/IQAC.scss';

import iqar0910 from '../assets/pdf/IQAR 9-10.pdf';
import aqar1011 from '../assets/pdf/AQAR 2010-11.pdf';
import aqar1112 from '../assets/pdf/AQAR 2011-12.pdf';
import aqar1213 from '../assets/pdf/AQAR 2012-13.pdf';
import aqar1314 from '../assets/pdf/AQAR 2013-14.pdf';
import aqar1415 from '../assets/pdf/AQAR 2014-15.pdf';
import aqar1516 from '../assets/pdf/AQAR 15-16.pdf';
import aqar1617 from '../assets/pdf/AQAR 16-17.pdf';
import iqac1718 from '../assets/pdf/IQAC 2017-18.pdf';
import iqac1819 from '../assets/pdf/IQAC 2018-19.pdf';
import iqac1920 from '../assets/pdf/IQAC 2019-20.pdf';
import iqac2021 from '../assets/pdf/IQAC 2020-21.pdf';
import iqac2223 from '../assets/pdf/IQAC 2022-23.pdf';
import iqac2324 from '../assets/pdf/IQAC 2023-24.pdf';
import meetings1819 from '../assets/pdf/IQAC 2018-19 Meetings.pdf';
import meetings2021 from '../assets/pdf/IQAC 2020-21 Meetings.pdf';
import minutesAtr from '../assets/pdf/IQAC Minutes and ATR.pdf';
import nirfOverall from '../assets/pdf/MGMNIRF-Ov-26.pdf';
import nirfCollege from '../assets/pdf/MGMNIRF-Col-26.pdf';

const annualReports = [
  ['2009-10', iqar0910], ['2010-11', aqar1011], ['2011-12', aqar1112], ['2012-13', aqar1213],
  ['2013-14', aqar1314], ['2014-15', aqar1415], ['2015-16', aqar1516], ['2016-17', aqar1617],
  ['2017-18', iqac1718], ['2018-19', iqac1819], ['2019-20', iqac1920], ['2020-21', iqac2021],
  ['2022-23', iqac2223], ['2023-24', iqac2324],
];

const uploads = {
  '2023-24': [['2.7 SSS', '2.7_SSS.pdf'], ['3.3.1', '3.3.1.pdf'], ['5.1.3', '5.1.3.pdf'], ['5.1.4', '5.1.4.pdf'], ['6.5', '6.5.pdf'], ['7.1.1 AGSP', '7.1.1_AGSP.pdf'], ['7.1.1 SFPW', '7.1.1_SFPW.pdf'], ['7.1.3', '7.1.3.pdf']],
  '2022-23': [['SSS', 'SSS.pdf'], ['5.1.3', '5.1.3 (22-23).pdf'], ['5.1.4', '5.1.4 (22-23).pdf'], ['5.3.3', '5.3.3.pdf'], ['6.5', '6.5 (22-23).pdf'], ['7.1.1 Action', '7.1.1_Action.pdf'], ['7.1.1 Facilities', '7.1.1_Facilities.pdf'], ['7.1.8', '7.1.8.pdf'], ['7.1.9', '7.1.9.pdf']],
  '2020-21': [['AC', 'AC.pdf'], ['Organogram', 'Organogram.pdf'], ['SSS', 'SSS (20-21).pdf'], ['BP', 'BP.pdf'], ['COC', 'COC.pdf'], ['1.4.1', '1.4.1.pdf'], ['2.3.2', '2.3.2.pdf'], ['4.1.1', '4.1.1.pdf'], ['4.1.2', '4.1.2.pdf'], ['4.1.3 samples', '4.1.3_samples.pdf'], ['4.3.1', '4.3.1.pdf'], ['4.4.2', '4.4.2.pdf'], ['5.3.2', '5.3.2.pdf'], ['6.3.1', '6.3.1.pdf'], ['6.3.5', '6.3.5.pdf'], ['6.5.2', '6.5.2.pdf'], ['7.1.1', '7.1.1.pdf']],
  '2019-20': [['PCO', '2.6PCO.pdf'], ['SSS', '2.7SSS.pdf'], ['4.4.2', '4.4.2 (19-20).pdf'], ['7.2', '7.2BP.pdf'], ['7.3', '7.3ID.pdf']],
  '2018-19': [['PCO', 'PCO.pdf'], ['SSS', 'SSS (18-19).pdf'], ['4.4.2', '4.4.2 (18-19).pdf'], ['7.2', '7.2(18-19).pdf'], ['7.3', '7.3(18-19).pdf']],
};

function DocumentLink({ label, file, folder = 'links' }) {
  const documentUrl = file.startsWith('/') || file.startsWith('http')
    ? file
    : new URL(`../assets/${folder}/${file}`, import.meta.url).href;
  return <a className="iqac-document-link" href={documentUrl} target="_blank" rel="noopener noreferrer"><span>{label}</span><span aria-hidden="true">↗</span></a>;
}

function IQAC() {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="iqac-page">
      <section className="iqac-hero">
        <div className="iqac-hero-content">
          <p className="eyebrow">Research & Quality</p>
          <h1>Internal Quality Assurance Cell</h1>
          <p className="hero-description">A transparent record of the people, practices, reviews, and reports that keep quality improvement moving at MGM College.</p>
          <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/research">Research & Quality</Link><span>/ IQAC</span></div>
        </div>
      </section>

      <main className="iqac-content">
        <nav className="iqac-nav" aria-label="IQAC sections">
          <a href="#reports" onClick={(event) => scrollToSection(event, 'reports')}>Annual reports</a>
          <a href="#meetings" onClick={(event) => scrollToSection(event, 'meetings')}>Meetings</a>
          <a href="#constitution" onClick={(event) => scrollToSection(event, 'constitution')}>Constitution</a>
          <a href="#uploads" onClick={(event) => scrollToSection(event, 'uploads')}>Uploads</a>
          <a href="#nirf" onClick={(event) => scrollToSection(event, 'nirf')}>NIRF</a>
        </nav>

        <section className="iqac-intro">
          <div><p className="section-kicker">Continuous improvement</p><h2>Quality is a shared practice.</h2></div>
          <p>Internal Quality Assurance Cell is constituted by the Principal at the beginning of every year. IQAC coordinates the college's quality initiatives, documents institutional progress, and supports better academic and administrative experiences for every stakeholder.</p>
        </section>

        <section className="iqac-section" id="reports">
          <div className="section-heading"><p className="section-kicker">01 / Reports</p><h2>Annual quality assurance reports</h2><p>Official IQAC and AQAR reports from 2009-10 to 2023-24.</p></div>
          <div className="report-grid">{annualReports.map(([year, file]) => <DocumentLink key={year} label={`AQAR / IQAC ${year}`} file={file} folder="pdf" />)}</div>
        </section>

        <section className="iqac-section split-section" id="meetings">
          <div className="section-heading"><p className="section-kicker">02 / Governance</p><h2>Meetings and minutes</h2><p>Records of review, decisions, and action taken by the cell.</p></div>
          <div className="document-stack"><DocumentLink label="IQAC 2018-19 Meetings" file={meetings1819} folder="pdf" /><DocumentLink label="IQAC 2020-21 Meetings" file={meetings2021} folder="pdf" /><DocumentLink label="IQAC Minutes and ATR" file={minutesAtr} folder="pdf" /></div>
        </section>

        <section className="iqac-section" id="constitution">
          <div className="section-heading"><p className="section-kicker">03 / People</p><h2>IQAC 2023-24</h2><p>The cell brings together leadership, faculty, administration, the local community, parents, and students.</p></div>
          <div className="people-grid">
            <article><span className="role">Chairperson</span><h3>Prof. Laxminarayana Karanth</h3><p>Principal</p></article>
            <article><span className="role">Management representative</span><h3>Sri B.P. Varadharaya Pai</h3><p>Secretary, AGE Manipal</p></article>
            <article><span className="role">IQAC leadership</span><h3>Mrs. Shailaja H</h3><p>Coordinator</p><h3>Mrs. Vanitha</h3><p>Co-coordinator</p></article>
            <article className="people-wide"><span className="role">Staff representatives</span><p>Mr. Arun Kumar B., Mr. Ramesh Karla, Mrs. Saraswathi T., Mrs. Veera Ida Pinto, Dr. Vasumathi Bhat, Mrs. Jyothi Alphonso, Mrs. Jayashree Nayak, Dr. Vishwanath Pai M., Mr. Vidyanath K., Dr. Puthi Vasanth Kumar, Mrs. Jayanthi R. Prabhu, and Mrs. Ashwini C. Acharya.</p></article>
            <article><span className="role">Administrative office</span><p>Mr. Kishore H. V, Librarian<br />Mr. Vasanth Kumar B.T, Office Superintendent</p></article>
            <article><span className="role">Society, parents, and students</span><p>Prof. M. L. Samaga, Dr. M.G. Vijaya, Prof. Surendranath Shetty, Mr. Shripathi Acharya, Mr. Sumith Bhat, and Ms. Shraddha.</p></article>
          </div>
        </section>

        <section className="iqac-section principles-section">
          <div><p className="section-kicker">04 / Direction</p><h2>Vision, mission, objectives</h2></div>
          <div className="principles-grid"><article><h3>Vision</h3><ul><li>Spirit of enquiry</li><li>Eagerness to acquire knowledge and skills</li><li>Leadership and responsibility</li><li>Appreciation of aesthetics and cultural heritage</li></ul></article><article><h3>Mission</h3><ul><li>Provide quality education through innovative, humane methods</li><li>Build competence for employment and entrepreneurship</li><li>Develop responsibility to family, society, and nation</li><li>Promote national integration</li></ul></article><article><h3>Objectives</h3><ul><li>Character building</li><li>Excellence in teaching and learning</li><li>Competence for employability and entrepreneurship</li></ul></article></div>
        </section>

        <section className="iqac-section" id="uploads"><div className="section-heading"><p className="section-kicker">05 / Evidence</p><h2>Supporting uploads</h2><p>Criterion-wise documents submitted for institutional quality review.</p></div>{Object.entries(uploads).map(([year, documents]) => <div className="upload-year" key={year}><h3>{year}</h3><div className="report-grid">{documents.map(([label, file]) => <DocumentLink key={file} label={label} file={file} />)}</div></div>)}</section>

        <section className="iqac-section nirf-section" id="nirf"><div><p className="section-kicker">06 / Benchmarking</p><h2>National Institutional Ranking Framework</h2><p>Access MGM's latest NIRF submissions.</p></div><div className="document-stack"><DocumentLink label="MGM NIRF Overall" file={nirfOverall} folder="pdf" /><DocumentLink label="MGM NIRF College" file={nirfCollege} folder="pdf" /></div></section>
      </main>
    </div>
  );
}

export default IQAC;