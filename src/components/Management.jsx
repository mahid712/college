import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Management.scss';

export default function Management() {
  return (
    <div className="management-page-wrapper">
      {/* Navbar and Footer are rendered globally in App.jsx */}
      <main className="management-page-main">
        <section className="page-header-banner">
          <div className="container">
            <h1>College Management & Governance</h1>
            <p>Structure and leadership guiding the institution toward its goals.</p>
            <div className="breadcrumb">
              <a href="/">Home</a> / Management
            </div>
          </div>
        </section>

        <section className="management-content-section container">
          
          {/* 1. The College Trust / Foundation */}
          <h2 className="section-heading">1. The College Trust / Foundation</h2>
          <div className="content-card trust-block">
            <p>
              MGM College is primarily managed by the <strong>Dr. T. M. A. Pai Foundation (DTMAPF)</strong>, Manipal. This apex body is responsible for the overall strategic direction, financial stability, and long-term vision of the institution. The current members are:
            </p>
            <ul className="content-list">
              <li><strong>Sri T. Satish U Pai</strong> <span>– President</span></li>
              <li><strong>Dr. Ranjan R Pai</strong> <span>– Member</span></li>
              <li><strong>Dr. H. S. Ballal</strong> <span>– Member</span></li>
              <li><strong>Lt. Gen. (Dr) M.D. Venkatesh</strong> <span>– Member</span></li>
              <li><strong>Dr. Narayana Sabhahit</strong> <span>– Member</span></li>
              <li><strong>Sri CA. Varadaraya Pai</strong> <span>– Member</span></li>
              <li><strong>Prof. Vanitha Maiya</strong> <span>– Principal/Secretary</span></li>
            </ul>
            <p className="card-footer-text">
              The Foundation ensures that the college adheres to its founding principles established by the visionary <strong>Dr. T. M. A. Pai</strong> in 1949, promoting education, cultural heritage, and community service in the region.
            </p>
          </div>

          {/* 2. Governing Council (GC) */}
          <h2 className="section-heading">2. Governing Council (GC)</h2>
          <div className="content-card council-block">
            <p>
              The Governing Council is the primary policy-making body appointed by the Foundation. It includes distinguished academic experts, management representatives, and staff/university nominees. The current members are:
            </p>
            <ul className="content-list">
              <li><strong>Sri T. Satish U Pai</strong> <span>– President</span></li>
              <li><strong>Sri CA. Varadaraya Pai</strong> <span>– Member</span></li>
              <li><strong>Mr. Arun Kumar B</strong> <span>– Member (Staff)</span></li>
              <li><strong>Mrs. Saraswathi T</strong> <span>– Member (Staff)</span></li>
              <li><strong>Dr. Umesh Naik</strong> <span>– Member (University Nominee)</span></li>
              <li><strong>Dr. Dhananjay</strong> <span>– Member (University Nominee)</span></li>
              <li><strong>Prof. Vanitha Maiya</strong> <span>– Principal / Secretary</span></li>
            </ul>
            <p className="card-footer-text">
              The GC oversees all academic and administrative affairs, reviews institutional performance, approves the budget, and ensures all policies are compliant with university regulations and national accreditation standards (NAAC).
            </p>
          </div>

          {/* 3. College Council (Internal Administration) */}
          <h2 className="section-heading">3. College Council (Internal Administration)</h2>
          <div className="content-card college-council-block">
            <p>
              The College Council manages the effective and efficient day-to-day internal administration and academic processes of the college. It comprises the Principal, key senior faculty members, and Heads of Departments, ensuring smooth operations and quality delivery of education. The members are:
            </p>
            <ul className="content-list">
              <li><strong>Prof. Vanitha Maiya, M.Com.</strong> <span>– Principal (Chairperson)</span></li>
              <li><strong>Mrs. Shailaja H, M.Sc., M.Phil.</strong> <span>– Member</span></li>
              <li><strong>Dr. Vasumathi Bhat, M.A., Ph.D</strong> <span>– Member</span></li>
              <li><strong>Dr. Vishwanath Pai M, B.E (C.S.), CNE, M.Sc. (IT), M.Phil., Ph.D.</strong> <span>– Member</span></li>
              <li><strong>Dr. Puthi Vasanth Kumar, M.A., M.Phil., Ph.D.</strong> <span>– Member</span></li>
              <li><strong>Mr. Vidyanath K, M.A.</strong> <span>– Member</span></li>
              <li><strong>Mr. Subodh Pai, M.A.</strong> <span>– Member</span></li>
              <li><strong>Mr. Santosh C. Shetti, M.A., B.Ed.</strong> <span>– Member</span></li>
              <li><strong>Mr. Suchith Kotian, M.C.J.</strong> <span>– Member</span></li>
              <li><strong>Dr. Maneetha T.K, M.Sc., B.Ed, Ph.D</strong> <span>– Member</span></li>
              <li><strong>Mrs. Jyothsna, M.A., B.Ed</strong> <span>– Member</span></li>
              <li><strong>Mrs. Shruthi Nayak, M.Sc.</strong> <span>– Member</span></li>
              <li><strong>Ms. Sharanya, M.Sc.</strong> <span>– Member</span></li>
              <li><strong>Mr. Kishora H. V., M.LiSc</strong> <span>– Member</span></li>
              <li><strong>Mr. Vinith Rao, M.A.</strong> <span>– Member</span></li>
            </ul>
            <p>
              Key responsibilities include planning the academic calendar, implementing curriculum changes, managing student welfare, faculty deployment, and coordinating departmental activities.
            </p>
          </div>

        </section>
      </main>
    </div>
  );
}