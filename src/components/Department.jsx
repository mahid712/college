import { Link } from 'react-router-dom';
import '../scss/Department.scss';
import noDataProfile from '../assets/profiles/no-data-found.html?url';

const departments = [
  {
    name: 'Department of Botany',
    staff: [
      ['Dr. Gayathri Pai, M.Sc., M.Phil, Ph.D.', 'Principal'],
      ['Mrs. Shruthi Nayak, M.Sc.', 'Lecturer'],
      ['Dr. Sohani Bhat G, M.Sc., Ph.D.', 'Lecturer'],
    ],
  },
  {
    name: 'Department of Chemistry',
    staff: [
      ['Mrs. Veera Ida Pinto, M.Sc.', 'HOD'],
      ['Mrs. Jyothi M Alphonso, M.Sc., M.Phil', 'Assistant Professor'],
      ['Mr. Sandeep Shenoy K, M.Sc.', 'Lecturer'],
      ['Ms. Shraddha Dayananda K, M.Sc.', 'Lecturer'],
    ],
  },
  {
    name: 'Department of Commerce',
    staff: [
      ['Mr. Anil Kumar B, M.Com.', 'HOD'],
      ['Mrs. Mamatha, M.Com.', 'Lecturer'],
      ['Dr. Mallika A Shetty, M.Com., MBA, Ph.D.', 'Lecturer'],
      ['Dr. Raksha Shenoy, M.Com, Ph.D.', 'Lecturer'],
      ['Ms. Kavya K B, M.Com', 'Lecturer'],
      ['C.A. Adarsh shenoy'],
      ['C.A. Suresh Prabhu'],
      ['Mr. Vikas Shetty, M.Com', 'Lecturer'],
      ['Mr. Girish Rao S, M.Com', 'Lecturer'],
      ['Ms. Mamatha Poojarthy, M.Com', 'Lecturer'],
      ['C.A. Vignesh Bhat'],
      ['C.A. Sowmya'],
      ['C.A. Rashmi'],
      ['Mr. Sandeep Kumar Shetty, M.Com', 'Lecturer'],
      ['Mr. Manoj S, M.Com', 'Lecturer'],
      ['Ms. Apoorva, M.Com', 'Lecturer'],
      ['Ms. Krupa Ballal, M.Com', 'Lecturer'],
    ],
  },
  {
    name: 'Department of Computer Science',
    staff: [
      ['Dr. M. Vishwanatha Pai, B.E, CNE, M.Sc.(IT), M.Phil., Ph.D.', 'Vice Principal'],
      ['Dr. Rekha N Chandra, M.Sc.(IT), M.Phil, Ph.D.', 'HOD'],
      ['Mrs. Anupama Ajith, MCA', 'Lecturer'],
      ['Mr. Rajamoorthi Rao, B.E', 'Lecturer'],
      ['Mrs. Deepali Kamath, MCA', 'Lecturer'],
      ['Mrs. Jayanthi R Prabhu B.E., MCA', 'Lecturer'],
      ['Mrs. Pavithra K, M.Sc', 'Lecturer'],
      ['Mrs. Shilpa Shanubhog, M.Sc(IT)', 'Lecturer'],
      ['Ms. Ramya Kotian, M.Sc', 'Lecturer'],
      ['Mrs. Rashmi, MCA', 'Lecturer'],
      ['Mrs. Akshatha Shettigar, M.Sc', 'Lecturer'],
      ['Mr. Sanath Shet, M.Sc.', 'Lecturer'],
      ['Mrs. Sushma Bangera, M.Sc.', 'Lecturer'],
      ['Mr. Mithun S, MCA.', 'Lecturer'],
      ['Ms. Pallavi, M.Sc.', 'Lecturer'],
      ['Ms. Pranjnashree, M.Sc.', 'Lecturer'],
      ['Mr. Damodar Pai BP, MCA', 'Lecturer'],
      ['Mr. Prakash, M.Sc.', 'Lecturer'],
      ['Ms. Rakshitha, M.Sc.', 'Lecturer'],
      ['Ms. Abhijna S S, M.Sc.', 'Lecturer'],
      ['Mr Gowtham, MCA', 'Lecturer'],
      ['Mrs. Chitra Bhat, B.Sc., PGDCA, MSc(IT)', 'Computer Programmer'],
      ['Mrs. Shaila M, MCA', 'Computer Programmer'],
      ['Mrs. Akshatha Kamath, BCA.', 'Computer Programmer'],
      ['Mrs. Sheethal Salian, M.Sc.', 'Computer Programmer'],
      ['Ms. Surabhi Naik, BCA', 'Computer Programmer'],
      ['Mrs. Sumalatha, BCA', 'Computer Programmer'],
      ['Ms. Likhitha, BCA', 'Computer Programmer'],
      ['Mr. Niranjan, BCA', 'Computer Programmer'],
      ['Ms. Prathiksha, BCA', 'Computer Programmer'],
      ['Mr. Sumanth B, BCA', 'Computer Programmer'],
    ],
  },
  {
    name: 'Department of Economics',
    staff: [
      ['Mr. M Channa Poojary, M.A.', 'HOD'],
      ['Mrs. Jyothsna, M.A., B.Ed.', 'Lecturer'],
      ['Mrs. Priyashree K T, M.A.', 'Lecturer'],
    ],
  },
  {
    name: 'Department of English',
    staff: [
      ['Mrs. Ashwini C Acharya, M.A.', 'HOD'],
      ['Mrs. Spoorthy S Fernandes, M.A., B.Ed.', 'Lecturer'],
      ['Mrs. Manasa S, M.A., B.Ed', 'Lecturer'],
      ['Ms. Coleen Antonitha Lobo, M.A.', 'Lecturer'],
      ['Ms. Mythreyi, M.A.', 'Lecturer'],
    ],
  },
  {
    name: 'Department of Hindi',
    staff: [
      ['Dr. Santosh C Shetti, M.A., B.Ed., Ph.D.', 'HOD'],
      ['Mr. Madhanlal Saini, M.A., B.Ed.', 'Lecturer'],
      ['Ms. Swathi K, M.A., B.Ed.', 'Lecturer'],
    ],
  },
  {
    name: 'Department of History',
    staff: [
      ['Mr. Subodh Pai, M.A.', 'HOD, Lecturer'],
      ['Mrs. Latha Nayak, M.A., M.Phil.', 'Lecturer'],
    ],
  },
  {
    name: 'Department of Kannada',
    staff: [
      ['Dr. Puthi Vasanth Kumar, M.A., M.Phil., Ph.D.', 'HOD'],
      ['Dr. Shailaja, M.A., Ph.D.', 'Lecturer'],
      ['Dr. Kathyayini Kunjibettu, M.A., Ph.D.', 'Lecturer'],
      ['Mr. Raghavendra Thunga, M.A.', 'Lecturer'],
      ['Mrs. Ambika, M.A., B.Ed', 'Lecturer'],
    ],
  },
  {
    name: 'Department of Library',
    staff: [['Mr. Kishore H V, MLiSc', 'Librarian']],
  },
  {
    name: 'Department of Mathematics',
    staff: [
      ['Ms. Navya, M.Sc., B.Ed.', 'HOD'],
      ['Mrs. Umadevi P, M.Sc., B.Ed.', 'Lecturer'],
      ['Mrs. Vasavi, M.Sc.', 'Lecturer'],
      ['Ms. Shreya, M.Sc.', 'Lecturer'],
    ],
  },
  {
    name: 'Department of Physical Education',
    staff: [['Mr. Tilak Kini, M.P.Ed']],
  },
  {
    name: 'Department of Physics',
    staff: [
      ['Mrs. Shailaja H, M.Sc., M.Phil.', 'HOD'],
      ['Mrs. Swathi, M.Sc.', 'Lecturer'],
    ],
  },
  {
    name: 'Department of Political Science',
    staff: [
      ['Mr. Vidyanath K, M.A.', 'HOD, Lecturer'],
      ['Mrs. Adithi Bhat, M.A.', 'Lecturer'],
      ['Mrs. Padmaja K, M.A.', 'Lecturer'],
    ],
  },
  {
    name: 'Department of Sanskrit',
    staff: [
      ['Dr. Vasumathi Bhat, M.A., Ph.D.', 'HOD'],
      ['Dr. Vijayalakshmi M., M.A., Ph.D.', 'Lecturer'],
    ],
  },
  {
    name: 'Department of Statistics',
    staff: [
      ['Ms. Sharanya, M.Sc.', 'HOD'],
      ['Mr. Naveena, M.Sc.', 'Lecturer'],
    ],
  },
  {
    name: 'Department of Zoology',
    staff: [
      ['Dr. Vijay Kumar K M, M.Sc., M.Phil., Ph.D.', 'HOD'],
      ['Dr. Maneetha T K, M.Sc., B.Ed., Ph.D.', 'Lecturer'],
      ['Mrs. Yashashwini, M.Sc.', 'Lecturer'],
    ],
  },
  {
    name: 'Department of Journalism',
    staff: [
      ['Mr. Suchith Kotian, M.C.J., M.A., B.Ed.', 'HOD'],
      ['Mrs. Ashwini Aigal, M.C.J.', 'Lecturer'],
    ],
  },
  {
    name: 'Department of Gandhian Studies',
    staff: [['Mr. U. Vinith Rao, M.A.', 'Researcher & Co-ordinator']],
  },
];

const sortedDepartments = [...departments].sort((firstDepartment, secondDepartment) => {
  if (firstDepartment.name === 'Department of Botany') return -1;
  if (secondDepartment.name === 'Department of Botany') return 1;
  return firstDepartment.staff.length - secondDepartment.staff.length;
});

function portfolioSlug(name) {
  if (name.includes('Vanitha Maiya')) return 'vanitha-maiya';
  if (name.includes('Vishwanatha Pai')) return 'vishwanatha-pai';
  if (name.includes('Veera Ida Pinto')) return 'veera-pinto';
  return null;
}

function StaffMember({ member }) {
  const profileSlug = portfolioSlug(member[0]);
  const profileUrl = profileSlug ? `/profiles/${profileSlug}` : noDataProfile;

  return <div className="staff-member">{profileSlug ? <Link className="staff-name" to={profileUrl}>{member[0]} <span aria-hidden="true">&rarr;</span></Link> : <a className="staff-name" href={profileUrl} target="_blank" rel="noopener noreferrer">{member[0]} <span aria-hidden="true">&rarr;</span></a>}{member[1] && <span className="staff-role">{member[1]}</span>}</div>;
}

export default function Department() {
  return (
    <div className="department-page">
      <section className="department-hero">
        <div className="department-hero-content">
          <p className="eyebrow">Our people</p>
          <h1>Our Department and Staff</h1>
          <p className="hero-description">Meet the faculty, administrators, and support staff who make learning and campus life at MGM College possible.</p>
          <div className="breadcrumb"><Link to="/">Home</Link> / Departments</div>
        </div>
      </section>
      <main className="department-content">
        <div className="department-intro"><p className="section-kicker">Faculty directory</p><h2>People behind the work</h2><p>Explore the academic departments and institutional teams at Mahatma Gandhi Memorial College, Udupi.</p></div>
        <div className="staff-grid">
          {sortedDepartments.map((department) => <section className="staff-dept-card" key={department.name}><h2 className="staff-dept-header">{department.name}</h2><div className="staff-list">{department.staff.map((member) => <StaffMember key={`${department.name}-${member[0]}`} member={member} />)}</div></section>)}
        </div>
      </main>
    </div>
  );
}