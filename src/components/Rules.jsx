import React from 'react';
import { Link } from 'react-router-dom';
import RulesPdf from '../assets/pdf/mgm-rules.pdf'
import '../scss/Rules.scss';

export default function Rules() {
  return (
    <div className="rules-page-wrapper">
      {/* Navbar and Footer are rendered globally in App.jsx */}
      <main className="rules-page-main">
        <section className="page-header-banner inner-hero">
          <div className="container">
            <h1>Rules and Regulations</h1>
            <p>Mahatma Gandhi Memorial College</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> <span>/ Rules & Regulations</span>
            </div>
          </div>
        </section>

        <section className="rules-content-section container">
          <div className="rules-intro-card">
            <p>
              Every student admitted to this College and studying in this college should clearly understand the implications of the Rules regarding Admission, Attendance, Discipline, College Examinations and Scholarships and Fee Concessions in this College as specified in the Calendar.
            </p>
            <p>
              Every student of the College shall conduct himself/herself in a disciplined manner both inside and outside the campus. He/She is expected to strictly adhere to the rules and regulations of the college.
            </p>
          </div>

          <div className="content-card rules-panel">
            <h3 className="rules-panel-heading">
              <i className="fas fa-user-shield"></i> Discipline
            </h3>
            <ul className="rules-list">
              <li>During leisure hours the students are expected to be in the library.</li>
              <li>During class hours they are strictly forbidden from loitering in the corridors and the campus.</li>
              <li>Every student is expected to maintain a sense of decency and decorum in his/her dress, as prescribed by the college.</li>
              <li>Students shall not absent themselves from classes without genuine reasons endorsed by parents.</li>
              <li>Any misbehaviour on the part of the student shall be severely dealt with.</li>
              <li>
                The students welfare council will consist of members selected by the Principal on the basis of their conduct and studies.{' '}
                <strong>(NO ELECTION WILL BE HELD)</strong>.
              </li>
              <li>No student shall organise or participate in any picnics or tours without the permission of the Principal.</li>
              <li>
                <strong>Ragging is strictly forbidden.</strong> Any one found to be indulging in this uncivilized practice will be summarily dismissed.
              </li>
              <li>Use and possession of mobile phones in the college campus is strictly forbidden.</li>
            </ul>
          </div>

          <div className="rules-grid">
            <div className="content-card rules-panel dos">
              <h3 className="rules-panel-heading">
                <i className="fas fa-check-circle"></i> General Tips - DOS
              </h3>
              <ul className="rules-list">
                <li>Look up the Notice Board Every Day.</li>
                <li>Enter the class well in time before the teacher enters.</li>
                <li>Make use of all the facilities and opportunities.</li>
                <li>Submit all assignments, records and notes in time.</li>
                <li>
                  Spend free time in the library, indoor complex, or vacant classrooms peacefully. (Girls may stay in the ladies waiting room).
                </li>
              </ul>
            </div>

            <div className="content-card rules-panel donts">
              <h3 className="rules-panel-heading">
                <i className="fas fa-times-circle"></i> General Tips - DON'TS
              </h3>
              <ul className="rules-list">
                <li>Do not idle away precious time by vain chatting.</li>
                <li>Do not move around the campus in packs during working hours.</li>
                <li>Do not litter the classrooms and the campus.</li>
              </ul>
            </div>
          </div>

          <div className="content-card rules-panel">
            <h3 className="rules-panel-heading">
              <i className="fas fa-file-alt"></i> Examinations and Internal Assessment
            </h3>
            <ul className="rules-list">
              <li>Internal assessment (20/30 marks) is based on performance in the first assignment/test and second test held each semester.</li>
              <li>Permission from the Principal or Lecturer is mandatory for absence from any examination or class test.</li>
              <li>Parents are requested to supervise studies at home and co-operate with the Principal regarding student welfare.</li>
              <li>Promotion to the next senior class depends on examination progress, conduct, and attendance.</li>
            </ul>
          </div>

          <div className="content-card rules-panel">
            <h3 className="rules-panel-heading">
              <i className="fas fa-address-book"></i> Cumulative Record
            </h3>
            <ul className="rules-list">
              <li>A teacher-in-charge will supervise progress and guide students in studies and co-curricular activities.</li>
              <li>The Cumulative Record tracks monthly attendance and marks; it must be signed by parents every semester.</li>
              <li>The record reflects the student's progress and must be handled carefully and returned to the Staff Advisor when required.</li>
            </ul>
          </div>

          <div className="rules-footer-action">
            <a href={RulesPdf} target="_blank" rel="noopener noreferrer" className="code-conduct-btn cta-secondary">
              <i className="fas fa-file-pdf"></i> View Full Code of Conduct (PDF)
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}