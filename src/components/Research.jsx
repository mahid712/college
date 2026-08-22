// src/pages/Research.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ssrPdf from '../assets/pdf/SSR.pdf';
import aqarPdf from '../assets/pdf/IQAC 2018-19.pdf';
import '../scss/Research.scss';

export default function Research() {
    return (
        <div className="research-page">
            {/* Navbar is already rendered globally in App.jsx */}
            <main>
                <section className="inner-hero research-hero">
                    <div className="hero-content">
                        <h1 className='hero-title'>Quality Assurance & Research</h1>
                        <p className='hero-subtitle'>Upholding academic excellence through rigorous quality checks and pioneering research initiatives.</p>
                        <div className="breadcrumb">
                            <Link to="/">Home</Link> <span>/ Research & Quality</span>
                        </div>
                    </div>
                </section>

                <section className="quality-overview">
                    <div className="overview-container">
                        <div id="naac" className="quality-block naac-block">
                            <h2 className="section-title-small">NAAC Accreditation</h2>
                            <span className="naac-grade">A+ Grade (3.36 CGPA)</span>
                            <p>MGM College is proud to be accredited by the <strong>National Assessment and Accreditation Council (NAAC)</strong>, validating our commitment to high educational standards.</p>
                            <a href={ssrPdf} target="_blank" rel="noopener noreferrer" className="details-link">View Latest SSR Report &rarr;</a>
                        </div>

                        <div id="iqac" className="quality-block iqac-block">
                            <h2 className="section-title-small">Internal Quality Assurance Cell (IQAC)</h2>
                            <p>The <strong>IQAC</strong> drives continuous improvement across all administrative and academic activities, ensuring stakeholder satisfaction and systemic efficiency.</p>
                            <a href="#iqac" className="details-link">Meet the IQAC Team &rarr;</a>
                        </div>

                        <div id="ranklist" className="quality-block rank-block">
                            <h2 className="section-title-small">University Rank List</h2>
                            <p>MGM Udupi consistently produces top-tier academic achievers. Explore our students' success stories and university-level rankings across various streams.</p>
                            <a href="#ranklist" className="details-link">View Rank Holders &rarr;</a>
                        </div>

                        <div id="aicte" className="quality-block rank-block">
                            <h2 className="section-title-small">AICTE Approval</h2>
                            <span className="naac-grade">Approved Institution</span>
                            <p>MGM College is duly approved by the <strong>All India Council for Technical Education (AICTE)</strong>, ensuring high standards in technical education and professional development.</p>
                            <a href="#aicte" className="details-link">View Approval Documents &rarr;</a>
                        </div>
                    </div>
                </section>

                <section className="research-cell-section">
                    <div className="content-container">
                        <h2 className="section-title">Research & Development Cell (RDC)</h2>
                        <p>True to its Vision & Mission the College has been encouraging research activities by providing academic, moral, infrastructural, financial, administrative and organizational support to its staff to engage in disciplinary, departmental, interdepartmental, interdisciplinary and multidisciplinary research/studies. In order to streamline these activities of research and innovation, the <strong>Research Cell</strong> was established in the College.</p>
                        
                        <h3 className="section-subtitle">Basic Objectives:</h3>
                        <ul>
                            <li>To <strong>promote research studies</strong> / research activities among the faculty.</li>
                            <li>Develop a <strong>research culture</strong> in the institution.</li>
                            <li><strong>Encourage</strong> our faculty and students to undertake research projects useful for the society and explore new areas of knowledge.</li>
                            <li>Provide <strong>guidance</strong> to develop research ideas, research proposals, and guide to apply for funding.</li>
                            <li>Motivate faculty members to undertake research projects.</li>
                            <li>Encourage faculty members to carry out doctoral and post-doctoral studies.</li>
                            <li>Support <strong>publications</strong>.</li>
                            <li>Encourage students to undertake research under the guidance of faculty members.</li>
                            <li>Support <strong>innovation</strong> by providing the necessary backup.</li>
                            <li>To conduct <strong>programmes</strong> for the benefit of faculty and students.</li>
                        </ul>

                        <h2 className="section-title">Scope of Research:</h2>
                        <p>The Research Cell recognizes the disciplinary, interdisciplinary, multi-dimensional, multidisciplinary, and innovative scope of research. The Cell views research as an activity involving the <strong>systematic investigation</strong> into a topic/subject/question. It involves study of materials and sources to establish facts or to explore the unexplored or throw light upon a thing/fact or unearth something that has been forgotten or to expand a past work or to make a discovery or to see a thing/fact with a different perspective to reach new conclusions. Research is an activity that adds to the knowledge, improves the existing knowhow, informs the policy making, creates new things and nurtures innovations. The College encourages research in the specific as well as broad areas of <strong>Sciences, Arts, Social Sciences, Humanities, Commerce, Management, Computer Science, Physical Education</strong> and <strong>Interdisciplinary Areas</strong>. The faculty members of Botany, Zoology, Chemistry, Physics, Mathematics, Statistics, Computer Science, Commerce, Kannada, English, Sanskrit, Hindi, History, Economics, Political Science, Journalism, Physical Education and Library are encouraged to take up research projects in their subject or in an interdisciplinary area related to that discipline. Research Cell also seeks to <strong>integrate the research findings into the pedagogy</strong> and teaching-learning process wherever possible.</p>

                        <h2 className="section-title">Composition:</h2>
                        <p>The Research Cell is chaired by the <strong>Principal</strong> as the Chairperson and the Committee will be headed by a <strong>Convener</strong> who is ideally a senior faculty member with experience in research. The <strong>IQAC Coordinator</strong> will be the permanent member. There will be four to eight members from the faculty who have experience in research as members of the Committee. The <strong>HoD</strong> of a department will be special invitee for the meetings whenever there are research proposals from the faculty members of that department. The Cell can meet as required to plan, guide, approve, and monitor the research projects under it. The Cell notifies the procedure and timeline to apply. It considers the proposals and reviews it before approving. An interface meeting will be held with the applicants. Finally, proposals that satisfy the basic requirements will be approved.</p>
                    </div>
                </section>

                <section className="documentation-section">
                    <div className="content-container">
                        <h2 className="section-title">Key Documents & Publications</h2>
                        <p className="section-subtitle">Download important reports, policies, and research journals.</p>
                        <div className="docs-grid">
                            <div className="doc-card">
                                <i className="doc-icon fas fa-file-alt"></i>
                                <h3>Annual Quality Assurance Report (AQAR)</h3>
                                <p>Year: 2018-19</p>
                                <a href={aqarPdf} className="download-link" target="_blank" rel="noopener noreferrer">Download PDF</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}