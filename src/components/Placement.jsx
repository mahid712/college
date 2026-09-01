import React from 'react';
import { Link } from 'react-router-dom';
import { placementData } from '../data/placementdata';
import '../scss/Placement.scss'; // 👈 Make sure this path matches your scss file

export default function Placement() {
  const { overview, yearlyRecords } = placementData;

  return (
    <div className="placement-page">
      {/* Hero Banner Header */}
      <section className="placement-hero">
        <div className="container">
          <div className="hero-content">
            <h1>{overview.title}</h1>
            <p className="red-text">Dream big and begin your career before you complete your degree.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <span>Campus Placement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Placement Content */}
      <main className="placement-content">
        <div className="placement-html">
          <div className="container placement-layout">
            
            {/* Left Main Column */}
            <div className="placement-main">
              <h2>{overview.title}</h2>

              {overview.introParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <p className="section-subtitle" style={{ fontWeight: 600, color: '#8B0000', margin: '20px 0 10px' }}>
                {overview.tagline}
              </p>

              <h3>Leading Recruiters</h3>
              <ul className="placement-company-list">
                {overview.leadingRecruiters.map((recruiter, i) => (
                  <li key={i}>{recruiter}</li>
                ))}
              </ul>

              <hr />

              {/* Year-by-Year Placement Records */}
              {yearlyRecords.map((yearRecord) => (
                <section key={yearRecord.year} className="placement-section">
                  <h3>Campus Placements for the year {yearRecord.year}</h3>

                  {/* Summary statistics (e.g. 2020-21) */}
                  {yearRecord.summaryStats && (
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '15px' }}>
                      {yearRecord.summaryStats.map((stat, i) => (
                        <li key={i} style={{ marginBottom: '8px' }}>
                          <strong>{stat.company}:</strong> {stat.count} students selected
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Company Breakdown & Tables */}
                  {yearRecord.companies && yearRecord.companies.map((company, idx) => (
                    <div key={idx} style={{ marginTop: '28px' }}>
                      <h4>
                        Congratulations to the following student{company.totalSelected > 1 ? 's' : ''} who got placed in {company.companyName}
                      </h4>

                      {company.students && company.students.length > 0 && (
                        <div className="placement-table-wrapper">
                          <table className="placement-table">
                            <thead>
                              <tr>
                                <th>Name of the Student</th>
                                <th>Class</th>
                              </tr>
                            </thead>
                            <tbody>
                              {company.students.map((student, sIdx) => (
                                <tr key={sIdx}>
                                  <td>{student.name}</td>
                                  <td>{student.class}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      <p style={{ marginTop: '10px', fontSize: '0.95rem' }}>
                        Total Selected: <strong>{company.totalSelected}</strong>
                      </p>
                    </div>
                  ))}

                  <p style={{ marginTop: '20px', padding: '10px 0', fontWeight: 700, color: '#8B0000', fontSize: '1.1rem' }}>
                    Total Selected for the year {yearRecord.year} : {yearRecord.totalSelected}
                  </p>
                </section>
              ))}
            </div>

            {/* Right Sticky Sidebar */}
            <aside className="placement-sidebar">
              <i className="fas fa-trophy placement-logo"></i>
              <h3>{overview.sidebar.title}</h3>
              <p>{overview.sidebar.description}</p>

              <h4>Key Statistics</h4>
              <ul>
                {overview.sidebar.keyStats.map((stat, i) => (
                  <li key={i}>
                    <strong>{stat.label}:</strong> {stat.value}
                  </li>
                ))}
              </ul>

              <p style={{ marginTop: '16px', fontSize: '0.9rem', color: '#666' }}>
                {overview.sidebar.footerNote}
              </p>
            </aside>

          </div>
        </div>
      </main>
    </div>
  );
}