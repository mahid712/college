import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/AdmissionRules.scss';

function AdmissionRules() {
  const admissionSections = [
    {
      id: 'admission',
      icon: 'fa-university',
      title: 'Admission',
      content: [
        'Admissions to any course are made for one academic year only.',
        'Students will be admitted to the next higher class (subsequent academic years) on the basis of fresh application for admission taking into account their progress, conduct and behavior during the year.'
      ]
    },
    {
      id: 'application',
      icon: 'fa-file-alt',
      title: 'Application Form',
      content: [
        'Application should be in the prescribed form',
        'Applications by post or in person should reach the Principal soon after the publication of the result of the S.S.L.C. or Pre- University examinations but within the last date notified on the Notice Board of the College',
        'Marks obtained should be entered on the application form.',
        'Xerox copy of caste certificate and income certificate should be attached to the application form wherever applicable.',
        'Incomplete application forms will be rejected.',
        'Students will have to opt for one or more co-curricular activities from the list given in the application for admission. Credits will be awarded to the activities and achievements and considered for the marks in the final examination.'
      ]
    },
    {
      id: 'interview',
      icon: 'fa-id-card',
      title: 'Particulars to come with to the Interview',
      intro: 'All candidates should bring the following original records when they appear for interview along with the prescribed fees',
      content: [
        'A transfer certificate from the institution last attended.',
        'S.S.L.C. marks card along with a xerox copy',
        'Certificate/marks card relating to the qualifying examination along with a xerox copy',
        'A conduct certificate from the Head of the Institution last attended.',
        'Group/caste certificate issued by the Tahsildar along with a xerox copy.',
        'Eligibility Certificate (for non-Karnataka students) along with a xerox copy',
        'Three copies of passport size photograph.',
        'Income Certificate form No.3 or No.4 in the case of students who wish to apply for fee concession (income of parent or guardian should be less than Rs. 44,500/- per year ).'
      ]
    },
    {
      id: 'conditions',
      icon: 'fa-check-double',
      title: 'Conditions that apply after Admission',
      content: [
        'According to the P.U. Board/University regulations, all admissions made by the College are provisional and subject to the final approval of the P.U. Board/University.',
        'A Candidate who withdraws after completing his/her admission shall forfeit any claim to the fees paid by him/her and no TC will be issued to him/her unless he/she pays a year\'s tuition fees.',
        'A student who is admitted to the College shall undergo a medical examination arranged by the College.',
        'The College expects every student to maintain a high standard of conduct, regularity in attendance and urge in studies.',
        'Students must be prepared to abide by the rules and regulations of the institution.'
      ]
    },
    {
      id: 'discipline',
      icon: 'fa-gavel',
      title: 'Rules of Discipline',
      content: [
        'Irregularity in attendance, habitual inattention, neglect of work, insubordination, disorderly behaviour, obscenity in word or act are punishable by anyone of the following depending on the gravity of the offence: (a) Warning and intimating the fact to the parent or guardian; (b) Fine; (c) Loss of attendance; (d) Cancellation of scholarships, freeship etc., (e) Suspension for a definite or indefinite period; (f) Expulsion',
        'The college, though not responsible for the conduct of its students outside the premises, will take cognizance of any serious misconduct committed outside its precincts.',
        'Students are required to live with relatives or guardians or in hostels or lodging houses approved by the College authorities. Early in the first term every student shall fill a lodging slip giving particulars of his /her place of residence in Udupi.'
      ]
    },
    {
      id: 'parents',
      icon: 'fa-user-friends',
      title: 'Parent\'s Responsibilities',
      content: [
        'Parents and guardians are particularly requested to co-operate with the College in above said matters.',
        'A declaration will have to be signed by the parent or guardian at the time of admission and in the presence of the Principal/Admission Committee.'
      ],
      subHeading: 'Parents are also requested to have attention on the following',
      subContent: [
        'Parents and guardians are earnestly requested to keep in touch with the Principal from time to time at least once in a month regarding the progress, attendance and conduct of their children and wards.',
        'If any other information is required by post, the Principal will be glad to give it, if a stamped, self addressed envelope is sent to him/ her. All correspondence should be addressed to the Principal, M.G.M. College, Udupi-576102. / Principal, M.G.M.P.U. College, Udupi-576102.',
        'All text books prescribed for various classes, articles of stationery, record and exercise books are available in the M.G.M. College Students\' Co-operative Stores. Charges are reasonable and students are expected to buy their requirements from the stores.',
        'Parents-Guardians are requested to clearly understand that the authorities or teachers of the college do not undertake to organize or lead any excursions, picnics, tours or pleasure trips. The Principal refuses to entertain any requests to arrange excursions or to depute teachers to accompany them on excursions. Students who go on excursions do so at their own risk.',
        'While every effort will be made to inform the parents or guardians about any instance of serious misconduct on the part of their children or wards, the authorities of the college do not bind themselves to intimate in advance to the parent or guardian any action which they are compelled to take against any student in the best interests and discipline of the college.',
        'Ragging is strictly forbidden. Anyone found indulging in this uncivilized practice will be summarily dismissed.',
        'Both PU & Degree students shall wear the prescribed uniform.',
        'Use & Possession of mobile phones on the campus is strictly prohibited. If found it will be confiscated and returned only at the end of the academic year.',
        'Students and Parents are requested to note that as a matter of policy the college does not hold election for the Students Council.',
        'Students vehicles will not be allowed inside the College Campus. They are supposed to park the vehicles in a specified area allotted by the College.'
      ]
    }
  ];

  return (
    <div className="admission-rules-page">
      {/* Hero Section */}
      <section className="admission-rules-hero">
        <div className="hero-content">
          <i className="fas fa-clipboard-list"></i>
          <h1>Admission Details</h1>
        </div>
        <div className="breadcrumb-trail">
          <Link to="/">Home</Link> / <Link to="/academics">Academics</Link> / <span>Admission Details</span>
        </div>
      </section>

      {/* Rules Content */}
      <div className="rules-content-wrapper">
        {admissionSections.map((section) => (
          <div className="rules-panel" key={section.id}>
            <h3 className="rules-panel-heading">
              <i className={`fas ${section.icon}`}></i> {section.title}
            </h3>
            {section.intro && (
              <p className="rules-intro">{section.intro}</p>
            )}
            <ul className="rules-list">
              {section.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            {section.subHeading && (
              <>
                <h4 className="rules-sub-heading">{section.subHeading}</h4>
                <ul className="rules-list">
                  {section.subContent.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdmissionRules;
