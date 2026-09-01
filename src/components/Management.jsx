import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Management.scss';

const managementSections = [
  {
    id: 'trust',
    title: '1. The College Trust / Foundation',
    intro: 'MGM College is primarily managed by the Dr. T. M. A. Pai Foundation (DTMAPF), Manipal. This apex body is responsible for the overall strategic direction, financial stability, and long-term vision of the institution. The current members are:',
    items: [
      ['Sri T. Satish U Pai', 'President'],
      ['Dr. Ranjan R Pai', 'Member'],
      ['Dr. H. S. Ballal', 'Member'],
      ['Lt. Gen. (Dr) M.D. Venkatesh', 'Member'],
      ['Dr. Narayana Sabhahit', 'Member'],
      ['Sri CA. Varadaraya Pai', 'Member'],
      ['Prof. Vanitha Maiya', 'Principal/Secretary'],
    ],
    footer: 'The Foundation ensures that the college adheres to its founding principles established by the visionary Dr. T. M. A. Pai in 1949, promoting education, cultural heritage, and community service in the region.',
    className: 'trust-block',
  },
  {
    id: 'council',
    title: '2. Governing Council (GC)',
    intro: 'The Governing Council is the primary policy-making body appointed by the Foundation. It includes distinguished academic experts, management representatives, and staff/university nominees. The current members are:',
    items: [
      ['Sri T. Satish U Pai', 'President'],
      ['Sri CA. Varadaraya Pai', 'Member'],
      ['Mr. Arun Kumar B', 'Member (Staff)'],
      ['Mrs. Saraswathi T', 'Member (Staff)'],
      ['Dr. Umesh Naik', 'Member (University Nominee)'],
      ['Dr. Dhananjay', 'Member (University Nominee)'],
      ['Prof. Vanitha Maiya', 'Principal / Secretary'],
    ],
    footer: 'The GC oversees all academic and administrative affairs, reviews institutional performance, approves the budget, and ensures all policies are compliant with university regulations and national accreditation standards (NAAC).',
    className: 'council-block',
  },
  {
    id: 'college-council',
    title: '3. College Council (Internal Administration)',
    intro: 'The College Council manages the effective and efficient day-to-day internal administration and academic processes of the college. It comprises the Principal, key senior faculty members, and Heads of Departments, ensuring smooth operations and quality delivery of education. The members are:',
    items: [
      ['Prof. Vanitha Maiya, M.Com.', 'Principal (Chairperson)'],
      ['Mrs. Shailaja H, M.Sc., M.Phil.', 'Member'],
      ['Dr. Vasumathi Bhat, M.A., Ph.D', 'Member'],
      ['Dr. Vishwanath Pai M, B.E (C.S.), CNE, M.Sc. (IT), M.Phil., Ph.D.', 'Member'],
      ['Dr. Puthi Vasanth Kumar, M.A., M.Phil., Ph.D.', 'Member'],
      ['Mr. Vidyanath K, M.A.', 'Member'],
      ['Mr. Subodh Pai, M.A.', 'Member'],
      ['Mr. Santosh C. Shetti, M.A., B.Ed.', 'Member'],
      ['Mr. Suchith Kotian, M.C.J.', 'Member'],
      ['Dr. Maneetha T.K, M.Sc., B.Ed, Ph.D', 'Member'],
      ['Mrs. Jyothsna, M.A., B.Ed', 'Member'],
      ['Mrs. Shruthi Nayak, M.Sc.', 'Member'],
      ['Ms. Sharanya, M.Sc.', 'Member'],
      ['Mr. Kishora H. V., M.LiSc', 'Member'],
      ['Mr. Vinith Rao, M.A.', 'Member'],
    ],
    footer: 'Key responsibilities include planning the academic calendar, implementing curriculum changes, managing student welfare, faculty deployment, and coordinating departmental activities.',
    className: 'college-council-block',
  },
];

export default function Management() {
  return (
    <div className="management-page-wrapper">
      <main className="management-page-main">
        <section className="page-header-banner">
          <div className="container">
            <h1>College Management & Governance</h1>
            <p>Structure and leadership guiding the institution toward its goals.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / Management
            </div>
          </div>
        </section>

        <section className="management-content-section container">
          {managementSections.map((section) => (
            <div key={section.id}>
              <h2 className="section-heading">{section.title}</h2>
              <div className={`content-card ${section.className}`}>
                <p>{section.intro}</p>
                <ul className="content-list">
                  {section.items.map(([name, role]) => (
                    <li key={`${section.id}-${name}`}>
                      <strong>{name}</strong> <span>– {role}</span>
                    </li>
                  ))}
                </ul>
                <p className="card-footer-text">{section.footer}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}