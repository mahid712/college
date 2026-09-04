import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Alumni.scss';
import alumniForm from '../assets/pdf/mgm-alumni-membershipform.pdf';

// Alumni content structured as data objects
const alumniData = {
  pdfLink: alumniForm,
  objectives: [
    "Our Main objective is to give an opportunity to the old students of the College to serve and work for the betterment of their Alma Mater in an effective manner.",
    "Our objective is also to create strong and vibrant symbiotic alumni network that connects departments, current students, past students and our society at large. We believe that we are being steadily successful in meeting this objective."
  ],
  appeal: [
    "Mahatma Gandhi Memorial College, one of the premier Colleges of Coastal Karnataka is celebrating its Platinum Jubilee in the year 2023-24. The College is proud of its large number of respectable and responsible alumni in all walks of life. During Golden Jubilee Celebrations, a humble attempt was made to establish contact with them by holding a special session of the MGM Alumni. A few distinguished alumni were felicitated on this occasion. The College management now reconstituted has a team of enthusiastic and enterprising trustees who strongly welcome and support the activities of the Alumni Forum.",
    "Hence we have decided to reach out to our esteemed alumni who are scattered all over the world, who definitely would like to re-establish their ties with their Alma Mater. The Mahatma Gandhi Memorial College Alumni Forum is a Registered body Formed in the year 2002, managed by trustees of the Forum who are also the alumni. One of the main objectives of the Forum is to develop fellowship among the alumni and to maintain good rapport between them and their Alma Mater.",
    "Every year a convention of the alumni is held. The alumni who attend this get together nostalgically recall their days in the college. They also discuss the activities of the college and make suggestions for the further development of the Forum as well as the college. Apart from this, distinguished alumni of the college are invited by various clubs/associations in the college for talks, seminars and interactive sessions. Such events have inspired the present students immensely. The Forum also functions as a mediator in obtaining scholarships/endowments for the students and extends financial support for the various fests and programmes conducted by the college.",
    "To strengthen the Forum an attempt is being made to renew contact with our Alumni by collecting their current addresses in database. Hence we request all the alumni to fill the online form for old students' particulars and submit it. You are also welcome to become a member of the Forum. You may fill in the membership form which may be downloaded from this website and send the same with membership fee to the secretary MGM College Alumni Forum, MGM College, Udupi-576102."
  ],
  officeBearers: [
    {
      role: "President",
      name: "Prof. Kokkarne Surendranath Shetty",
      phone: "9964498869",
      email: "kokkarneshetty@gmail.com"
    },
    {
      role: "Secretary",
      name: "Dr. M Vishwanath Pai",
      phone: "9008515307",
      email: "vish_pai@yahoo.com"
    },
    {
      role: "Treasurer",
      name: "Mrs. Deepali Kamath",
      phone: "9449388877",
      email: "kamath_deepali@yahoo.com"
    }
  ]
};

export default function Alumni() {
  return (
    <div className="page-wrapper alumni-page">
      <main>
        {/* Hero Section */}
        <section className="inner-hero">
          <div className="hero-content">
            <h1>M.G.M. Alumni</h1>
            <p className="red-text">Connecting past generations with the present to build a legacy of excellence.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/campus">Campus & Culture</Link> / Alumni
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="container content-section">
          <div className="alumni-content-block">

            {/* Alumni Form Download Link */}
            <div className="pdf-link-wrapper">
              <a href={alumniData.pdfLink} target="_blank" rel="noopener noreferrer" className="pdf-download-btn">
                <i className="fas fa-file-pdf"></i> Alumni Form
              </a>
            </div>

            <h2>Objective</h2>
            <ul className="info-list">
              {alumniData.objectives.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <hr className="section-divider" />

            <h2>An appeal to all M.G.M. alumni</h2>
            {alumniData.appeal.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <p>Awaiting a favourable response.</p>

            <div className="signature-block">
              <p>
                Thanking you,<br />
                <strong>
                  Yours Sincerely,<br />
                  President and Secretary<br />
                  MGM College Alumni Forum.
                </strong>
              </p>
            </div>

            <hr className="section-divider" />

            <h2>Office bearers</h2>
            <div className="table-responsive">
              <table className="office-bearers-table">
                <thead>
                  <tr>
                    <th>Office Holder</th>
                    <th>Contact Details</th>
                  </tr>
                </thead>
                <tbody>
                  {alumniData.officeBearers.map((bearer, index) => (
                    <tr key={index}>
                      <td>
                        <strong>{bearer.role}</strong>
                        <br />
                        {bearer.name}
                      </td>
                      <td>
                        Mob: {bearer.phone}
                        <br />
                        Email: <a href={`mailto:${bearer.email}`}>{bearer.email}</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}