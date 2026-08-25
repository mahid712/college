import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './vp.scss';

export default function FacultyProfile() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="content-area">
      <Link to="/department" className="back-btn"><i className="fas fa-chevron-left"></i> BACK TO DIRECTORY</Link>
      <h2 className="portfolio-title">Academic Portfolio</h2>

      <div className="accordion">
        {/* Education / Qualification */}
        <div className={`acc-item ${activeIndex === 0 ? 'is-active' : ''}`}>
          <button className="acc-trigger" onClick={() => toggleAccordion(0)}>
            <span>Education / Qualification</span> <i className="fas fa-plus"></i>
          </button>
          <div className="acc-panel">
            <div className="acc-content">
              <table className="profile-table">
                <thead>
                  <tr>
                    <th>Qualification</th>
                    <th>Institute</th>
                    <th>Marks</th>
                    <th>Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>B.E.(Comp. Science)</td>
                    <td>National Institute of Engineering, University of Mysore, Mysore, India</td>
                    <td>69.67%</td>
                    <td>1988</td>
                  </tr>
                  <tr>
                    <td>M.Sc.-Information Technology</td>
                    <td>Sikkim Manipal University, Sikkim, India</td>
                    <td>60.72%</td>
                    <td>2004</td>
                  </tr>
                  <tr>
                    <td>MPhil-Computer Science</td>
                    <td>Annamalai University, Tamilnadu, India</td>
                    <td>66.6%</td>
                    <td>2008</td>
                  </tr>
                  <tr>
                    <td>Ph.D. Factors Influincing Innovation :An Empirical Study in Information Technology Sector (Developed an innovation index for IT sector)</td>
                    <td>Manipal Academy of Higher Education, Manipal, Karnataka, India.</td>
                    <td>---</td>
                    <td>2019</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className={`acc-item ${activeIndex === 1 ? 'is-active' : ''}`}>
          <button className="acc-trigger" onClick={() => toggleAccordion(1)}>
            <span>Experience</span> <i className="fas fa-plus"></i>
          </button>
          <div className="acc-panel">
            <div className="acc-content">
              <h4 className="section-subtitle">Brief Summary of Work Experience</h4>
              <p><strong>Total Work Experience : 29 Years</strong></p>
              <table className="profile-table mb-30">
                <tbody>
                  <tr>
                    <td className="col-width-fixed">12 Years</td>
                    <td>In the Industry in R&D, Entrepreneur, Consultant</td>
                  </tr>
                  <tr>
                    <td>18 Years</td>
                    <td>Head of the Department (UG & PG) Computer Science, Mahatma Gandhi Memorial College, Udupi-Manipal, India</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="section-subtitle">International Assignment</h4>
              <table className="profile-table mb-30">
                <thead>
                  <tr>
                    <th>Duration</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>70 Days</td><td>Taught the MSc.-IT students at Build Bright University, Phnom Penh, Cambodia. (July to September 2007)</td></tr>
                  <tr><td>70 Days</td><td>Taught the MSc.-IT students at Build Bright University, Phnom Penh, Cambodia (June to August 2008)</td></tr>
                  <tr><td>30 Days</td><td>Taught the MSc.-IT MSc-TT students at Build Bright University, Phnom Penh, Cambodia (August to September 2009)</td></tr>
                  <tr><td>25 Days</td><td>Taught the MSc.-IT MSc-TT students at Build Bright University, Phnom Penh, Cambodia (July 2nd to July28th 2010)</td></tr>
                  <tr><td>3 Days</td><td>Visited Hochi Minh,Vietnam to study the opportunity for IT Industry from 23rd July to 25th July 2010.</td></tr>
                  <tr><td>18 Days</td><td>Taught the MSc.-IT MSc-TT students at Build Bright University, Phnom Penh, Cambodia (Feb. 4th to Feb 21st 2011)</td></tr>
                  <tr><td>3 Days</td><td>Attended a meeting on IT Industries and IT Education in Build Bright University, Phnom Penh, Cambodia -July 29thto July 31st 2011</td></tr>
                  <tr><td>22 Days</td><td>Taught the MSc.-IT students at Build Bright University, Phnom Penh, Cambodia (Nov. 6th to Nov. 27th 2011)</td></tr>
                  <tr><td>26 Days</td><td>Taught the MSc.-IT students at Build Bright University, Phnom Penh, Cambodia (Aug. 4th to Aug. 28th 2012)</td></tr>
                </tbody>
              </table>

              <h4 className="section-subtitle">Publication</h4>
              <ul className="profile-list mb-30">
                <li><strong>12 Books:</strong> On Various IT topics and on travel</li>
                <li><strong>9 Papers:</strong> 5 International and 4 National</li>
              </ul>

              <h4 className="section-subtitle">Research</h4>
              <p><strong>Minor Research Project</strong></p>
              <ul className="profile-list mb-30">
                <li>Funded by University Grants Commission- On security of Wireless LAN (Completed)</li>
                <li>Funded by University Grants Commission- On security issues of Data in E-Commerce Transactions. (On going)</li>
              </ul>

              <h4 className="section-subtitle">Visiting Faculty</h4>
              <p><strong>To Many Institutions:</strong> Build Bright University, Phnom Penh, Cambodia, Sikkim Manipal University, Karnataka State Open University, Rajiv Gandhi College of Management etc.</p>

              <h4 className="section-subtitle">Empanelment</h4>
              <p><strong>At IRQS and many other organizations:</strong> As an Industry Expert for ISO certification programs and many others</p>

              <h4 className="section-subtitle">Consultancy</h4>
              <table className="profile-table">
                <thead>
                  <tr>
                    <th>Role</th>
                    <th>Organization</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Business Development& Technical Consultant</td>
                    <td>Invenger Technologies-California-US-Mangalore-Bangalore <br /> www.lessons2all.com, Bangalore-Udupi</td>
                  </tr>
                  <tr>
                    <td>Technical Advisor & Consultant</td>
                    <td>Lcode Technologies Pvt. Ltd., Chennai-Mangalore <br /> Mangalore Technologies & Services Pvt. Ltd, Mangalore</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Research */}
        <div className={`acc-item ${activeIndex === 2 ? 'is-active' : ''}`}>
          <button className="acc-trigger" onClick={() => toggleAccordion(2)}>
            <span>Research</span> <i className="fas fa-plus"></i>
          </button>
          <div className="acc-panel">
            <div className="acc-content">
              <p><strong>Research:</strong></p>
              <ul className="profile-list">
                <li>Completed Minor Research project on "Wireless Security Risks and Technical Challenges" by University Grants Commission, New Delhi.</li>
                <li>Completed a Minor Research project on “Security issues of Data in E-Commerce Transactions” awarded by University Grants Commission, New Delhi.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className={`acc-item ${activeIndex === 3 ? 'is-active' : ''}`}>
          <button className="acc-trigger" onClick={() => toggleAccordion(3)}>
            <span>Publications</span> <i className="fas fa-plus"></i>
          </button>
          <div className="acc-panel">
            <div className="acc-content">
              <p><strong>Publications:</strong></p>
              <ul className="profile-list">
                <li>Compiled a hand book on Internet published by Shathabdi Graphics, Udupi.</li>
                <li>Compiled a book on Computer Networks for Msc.IT and M.C.A. students of Sikkim Manipal University.</li>
                <li>Part of the team which compiled a book on Client Server Architecure for Msc.IT and M.C.A. students of Sikkim Manipal University.</li>
                <li>Written a book on MS-OFFICE and WINDOWS-98 for Karnataka Computer Education.</li>
                <li>Compiled a book on Web Server Administration which has the topics like Windows 2000 Server and Internet Information Server 5.0. for M.C.A. students of Sikkim Manipal University.</li>
                <li>Written a book titled "Computer Learning Made Easy". The book is published by Bharath Prakashana Udupi. Third re print of the book will be done soon.</li>
                <li>Compiled a book on 'C' programming language.</li>
                <li>Written a book on Computer fundamentals and MS-office for Sikkim Manipal University</li>
                <li>MPhil Dissertation: "Reliability problems in Loosely Coupled Processors"</li>
                <li>WEB Designing using HTML</li>
                <li>A book titled “C Programming Made Easy” released on June 18th 2010.</li>
                <li>Compiled a book on Vb.Net</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conference / Seminars Organized */}
        <div className={`acc-item ${activeIndex === 4 ? 'is-active' : ''}`}>
          <button className="acc-trigger" onClick={() => toggleAccordion(4)}>
            <span>Conference / Seminars Organized</span> <i className="fas fa-plus"></i>
          </button>
          <div className="acc-panel">
            <div className="acc-content">
              <ul className="profile-list">
                <li>Convener for the UGC sponsored state level seminar on the topic Reliability Issues in Loosely Coupled Processor held on 14/3/2009 held at Nutana Ravindra Mantapa, MGM College, Udupi.</li>
                <li><strong>Connections to ICAI activity ISA Course:</strong></li>
                <li>CPE program of ICAI New Delhi conducted by Udupi Branch of SIRC of ICAI. (Paper presentation: Access Control Mechanism.)</li>
                <li>Conducted Refresher course for ISA participants during July and August 2002 at Udupi. (Subjects handled: Networking, Access Controls, SDLC, Web Server and Disaster recovery.)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conference / Seminars Attended */}
        <div className={`acc-item ${activeIndex === 5 ? 'is-active' : ''}`}>
          <button className="acc-trigger" onClick={() => toggleAccordion(5)}>
            <span>Conference / Seminars Attended</span> <i className="fas fa-plus"></i>
          </button>
          <div className="acc-panel">
            <div className="acc-content">
              <table className="profile-table">
                <thead>
                  <tr>
                    <th className="col-width-seminar">Seminar</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>International Seminar</strong></td>
                    <td>
                      Presented a paper on "Software Outsourcing Issues: A review" in the International conference organized jointly by Manipal Institute of Management, Manipal University Manipal and College of Business Administration, Northeastern University, Boston, USA.<br /><br />
                      Presented a Paper on “Use of ICT in Business” at Build Bright University, Phnom Penh, Cambodia in July 2010.<br /><br />
                      Presented a paper on “Categories of Factors Influencing the Innovation: An Empirical Study in the IT Sector” at the International Conference on Recent Trends in Engineering & Technology held in Bangalore on 13th January 2013.<br /><br />
                      Session Chair for the International Conference on Electronics and Computer Science Engineering held on 3rd March 2013 in Bangalore.<br /><br />
                      Participated in Global R & D summit held at New Delhi on 25th & 26th July 2013 organized by FICCI and the Department of Science and Technology-Government of India.<br /><br />
                      Presented a paper on Classes of attributes which may have significant influence on Innovation in February 2014 in the International conference held in Koulalumpur, Malaysia.<br /><br />
                      Presented a paper on List of parameters which may have significant influence on Innovation in Information technology sector in the IEEE sponsored International conference held at United Arab University, Al Ain, UAE from November 9-11, 2014.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>National Conference</strong></td>
                    <td>
                      Resource Person for the UGC Sponsored National Conference on “Recent Trends in Cloud Computing” held on 14th and 15th December 2011 at SDM College of Business Management.<br /><br />
                      Resource person for the topic titled “Data Security in Loosely Coupled Processor Environment” in the UGC sponsored national conference held on 2-8-2013 at SDM College of Business Management, Mangalore, India.
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Seminar:</strong></td>
                    <td>Presented a paper on “Use of Information Technology” at Build Bright University, Siem Riep, Cambodia on 26th November 2011.</td>
                  </tr>
                  <tr>
                    <td><strong>National Conference</strong></td>
                    <td>
                      1. Many national conferences were attended.<br />
                      2. Participated in many national and state level seminars.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Additional Responsibilities */}
        <div className={`acc-item ${activeIndex === 6 ? 'is-active' : ''}`}>
          <button className="acc-trigger" onClick={() => toggleAccordion(6)}>
            <span>Additional Responsibilities</span> <i className="fas fa-plus"></i>
          </button>
          <div className="acc-panel">
            <div className="acc-content">
              <ul className="profile-list">
                <li>Trained and guided a group of students in designing and developing the web site of the college. The URL is www.mgmudupi.org. the web site is regularly updated.</li>
                <li>Coordinator for 08 self financed computer courses</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Training Attended */}
        <div className={`acc-item ${activeIndex === 7 ? 'is-active' : ''}`}>
          <button className="acc-trigger" onClick={() => toggleAccordion(7)}>
            <span>Training Attended</span> <i className="fas fa-plus"></i>
          </button>
          <div className="acc-panel"><div className="acc-content"></div></div>
        </div>

        {/* Extension Work */}
        <div className={`acc-item ${activeIndex === 8 ? 'is-active' : ''}`}>
          <button className="acc-trigger" onClick={() => toggleAccordion(8)}>
            <span>Extension Work</span> <i className="fas fa-plus"></i>
          </button>
          <div className="acc-panel"><div className="acc-content"></div></div>
        </div>

        {/* Affiliation */}
        <div className={`acc-item ${activeIndex === 9 ? 'is-active' : ''}`}>
          <button className="acc-trigger" onClick={() => toggleAccordion(9)}>
            <span>Affiliation</span> <i className="fas fa-plus"></i>
          </button>
          <div className="acc-panel"><div className="acc-content"></div></div>
        </div>

        {/* Others */}
        <div className={`acc-item ${activeIndex === 10 ? 'is-active' : ''}`}>
          <button className="acc-trigger" onClick={() => toggleAccordion(10)}>
            <span>Others</span> <i className="fas fa-plus"></i>
          </button>
          <div className="acc-panel">
            <div className="acc-content">
              <ul className="profile-list">
                <li>Documentaries on Kbal Spean and Bamboo Train of Cambodia. <a href="https://www.youtube.com/watch?v=1y0e8HmR-ZI" target="_blank" rel="noreferrer" className="external-link">Kbal Spean</a>&nbsp;&nbsp;<a href="https://www.youtube.com/watch?v=hAd52ze1FEs" target="_blank" rel="noreferrer" className="external-link">Bamboo Train</a></li>
                <li>A Book on “Indian Heritage in Cambodia”. Please visit the link for the details <a href="no-data-found.html" className="external-link">Book</a></li>
                <li>Formed IT Club, which is responsible for conducting seminars and work shops on latest IT topics and trends.</li>
                <li>Convener of the University level IT fest MegaBytes organized every year.</li>
                <li>A computer museum is arranged in the college campus.</li>
                <li>Maintaining the Computer network of the lab and different Departments.</li>
                <li>Placement Coordinator</li>
                <li>Participated as resource person in the IT related activities of many institutions.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}