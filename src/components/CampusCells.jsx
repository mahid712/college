import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/CampusCells.scss';

// Committee Data array for easier maintenance and clean rendering
const committeesData = [
  { cell: "Student Welfare Office", incharge: "Mrs. Veera Ida Pinto" },
  { cell: "I.Q.A.C. & NAAC", incharge: "Mrs. Shailaja H (Co-ordinator)" },
  { cell: "EI & CG Bureau & Placement Cell", incharge: "Dr. Vishwanath Pai M (Convener)" },
  { cell: "Women's Harassment Redressal Cell", incharge: "Mrs. Raksha Shenoy (Convener)" },
  {
    cell: "Women's Counsellors",
    incharge: (
      <>
        Mrs. Rekha N Chandra (Convener)<br />
        Mrs. Jyothsna (Co-convener)
      </>
    )
  },
  {
    cell: "Anti Ragging Committee",
    incharge: (
      <>
        Principal (Chairman)<br />
        Staff Council (Members)
      </>
    )
  },
  { cell: "Human Rights & Religious Harmony Cell", incharge: "Mr. Subodh Pai (Convener)" },
  { cell: "NCC Naval Wing", incharge: "Mr. Tilak Kini" },
  { cell: "NCC Army Wing", incharge: "Capt. Navya, ANO" },
  {
    cell: "Alumni Forum",
    incharge: (
      <>
        Prof. Kokkarne Surendranath Shetty, President<br />
        Dr. M Vishwanath Pai, Secretary<br />
        Mrs. Deepali Kamath, Treasurer
      </>
    )
  },
  {
    cell: "Medical Advisors",
    incharge: (
      <>
        Dr. Vijaya Ballal N., M.B.B.S.<br />
        K.M.C. Manipal
      </>
    )
  }
];

export default function CampusCells() {
  return (
    <div className="page-wrapper campus-cells-page">
      <main>
        {/* Inner Hero Section */}
        <section className="inner-hero">
          <div className="hero-content">
            <h1>Campus Cells & Committees</h1>
            <p>Ensuring guidance, welfare, discipline, and holistic student support.</p>
          </div>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/campus">Campus & Culture</Link> / Campus Cells
          </div>
        </section>

        {/* Main Content Section */}
        <section className="content-section">
          <h2>Clubs & Incharges</h2>

          <div className="table-responsive">
            <table className="committees-table">
              <thead>
                <tr>
                  <th>Cell / Committee</th>
                  <th>Incharge / Officer / Convener</th>
                </tr>
              </thead>
              <tbody>
                {committeesData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <strong>{item.cell}</strong>
                    </td>
                    <td>{item.incharge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}