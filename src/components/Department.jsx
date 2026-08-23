import { Link } from 'react-router-dom';
import '../scss/Department.scss';
import noDataProfile from '../assets/profiles/no-data-found.html?url';

const departments = [
  { name: 'Administration', type: 'admin', staff: [['Prof. Vanitha Maiya, M.Com', 'Principal'], ['Dr. Vishwanatha Pai M., B.E., M.Sc., Ph.D', 'Vice Principal']] },
  { name: 'Department of English', staff: [['Mrs. Ashwini C. Acharya, M.A.', 'HOD'], ['Mrs. Spoorthy S. Fernandes, M.A, B.Ed'], ['Mrs. Manasa S., M.A., B.Ed.'], ['Ms. Coleen Antonitha Lobo, M.A'], ['Ms. Sowmya, M.A., B.Ed.'], ['Ms. Mythreyi, M.A.']] },
  { name: 'Department of Kannada', staff: [['Dr. Puthi Vasanth Kumar, M.A., Ph.D.', 'HOD'], ['Dr. Shailaja, M.A., Ph.D.'], ['Dr. Kathyayini Kunjibettu, M.A., Ph.D.'], ['Mr. Raghavendra Thunga, M.A.'], ['Mrs. Ambika, M.A, B.Ed.']] },
  { name: 'Department of Hindi', staff: [['Dr. Santosh C. Shetti, M.A., Ph.D.', 'HOD'], ['Ms. Swathi K., M.A., B.Ed.'], ['Mr. Madanlal Saini, M.A., B.Ed.']] },
  { name: 'Department of Journalism', staff: [['Mr. Suchith Kotian, M.C.J., M.A., B.Ed.', 'HOD'], ['Mrs. Ashwini Aigal, M.C.J.']] },
  { name: 'Department of Mathematics', staff: [['Ms. Navya, M.Sc., B.Ed', 'HOD'], ['Mrs. Umadevi P., M.Sc., B.Ed.'], ['Mrs. Vasavi, M.Sc.'], ['Ms. Shreya, M.Sc.']] },
  { name: 'Department of Physics', staff: [['Mrs. Shailaja H., M.Sc., M.Phil.', 'HOD'], ['Mrs. Swathi, M.Sc.'], ['Ms. Prajna Nayak, M.Sc.']] },
  { name: 'Department of Chemistry', staff: [['Mrs. Veera Ida Pinto, M.Sc.', 'HOD'], ['Mrs. Jyothi Alphonso, M.Sc., M.Phil'], ['Mr. Sandeep Shenoy K., M.Sc.'], ['Ms. Shraddha Dayananda K., M.Sc.']] },
  { name: 'Department of Statistics', staff: [['Ms. Sharanya, M.Sc.', 'HOD'], ['Mr. Umesh Pai, M.Sc. (on Deputation)'], ['Mr. Naveena, M.Sc.']] },
  { name: 'Department of Botany', staff: [['Dr. Gayathri Pai, M.Sc., M.Phil, Ph.D.', 'HOD'], ['Mrs. Shruthi Nayak, M.Sc.'], ['Dr. Sohani Bhat G, M.Sc., Ph.D.']] },
  { name: 'Department of Zoology', staff: [['Dr. Vijaya Kumar K.M., M.Sc., M.Phil, Ph.D.', 'HOD'], ['Dr. Maneetha T. K., M.Sc., B.Ed, Ph.D.'], ['Mrs. Yashashwini B., M.Sc.']] },
  { name: 'Physical Education', staff: [['Mr. Tilak Kini, M.P.Ed.', 'Physical Director']] },
  { name: 'Library & Info Centre', staff: [['Mr. Kishore H.V., MLISc.', 'Librarian']] },
  { name: 'Department of Computer Science', staff: [['Dr. Vishwanatha Pai M., Ph.D.', 'Vice Principal'], ['Mrs. Rekha N. Chandra, M.Sc.(IT), M.Phil.', 'HOD'], ['Mrs. Anupama Ajith, M.C.A.'], ['Mr. Rajamoorthi Rao, B.E.'], ['Mrs. Deepali Kamath, M.C.A.'], ['Mrs. Jayanthi R. Prabhu, B.E.'], ['Mrs. Pavithra, M.Sc.'], ['Mrs. Shilpa Shanubhog, M.Sc.(IT)'], ['Ms. Ramya Kotian, M.Sc.'], ['Mrs. Rashmi, M.Sc. (IT)'], ['Ms. Akshatha Shettigar, M.Sc.'], ['Mr. Sanath, M.Sc.'], ['Mrs. Sushma Bangera, M.Sc.'], ['Mr. Mithun, M.C.A.'], ['Ms. Pallavi, M.Sc.'], ['Ms. Prajnashree, M.Sc.'], ['Mr. Damodar Pai BP, MCA'], ['Mr. Prakash, M.Sc.'], ['Ms. Rakshitha, M.Sc.'], ['Ms. Abhijna S., M.Sc.'], ['Mr. Gautham, M.C.A.'], ['Mrs. Chitra K., B.Sc., PGDCA, M.Sc.(IT)', 'Programmer'], ['Mrs. Shaila M., M.C.A.', 'Programmer'], ['Mrs. Akshatha Nayak, B.C.A.', 'Programmer'], ['Ms. Sheethal Salian, M.Sc.', 'Programmer'], ['Ms. Surabhi Naik, BCA', 'Programmer'], ['Ms. Sumalatha, BCA', 'Programmer'], ['Mr. Dheeraj, M.Sc.', 'Programmer'], ['Ms. Likitha, BCA', 'Programmer'], ['Mr. Niranjan, BCA', 'Programmer'], ['Ms. Prathiksha, BCA', 'Programmer']] },
  { name: 'Department of Commerce', staff: [['Prof. Vanitha Maiya, M.Com.', 'Principal'], ['Mr. Anil Kumar B., M.Com.', 'HOD'], ['Mrs. Mamatha, M.Com.', 'Co-ordinator'], ['Dr. Mallika A. Shetty, M.Com., M.B.A., Ph.D.', 'Co-ordinator'], ['Mrs. Raksha Shenoy, M.Com'], ['Ms. Kavya K B, M.Com'], ['C.A. Adarsh Shenoy'], ['C.A. Suresh Prabhu'], ['Mr. Vikas Shetty, M.Com'], ['Mr. Girish Rao S, M.Com'], ['Mrs. Mamatha Poojarthy, M.Com'], ['C.A. Vignesh Bhat'], ['C.A. Sowmya'], ['C.A. Rashmi'], ['Mr. Sandeep Kumar Shetty, M.Com'], ['Mr. Manoj S., M.Com'], ['Ms. Apoorva, M.Com'], ['Ms. Krupa Ballal, M.Com']] },
  { name: 'Gandhian Studies', staff: [['Mr. Vinith Rao, M.A.', 'Co-ordinator']] },
];

const sortedDepartments = [...departments].sort((firstDepartment, secondDepartment) => {
  if (firstDepartment.type === 'admin') return -1;
  if (secondDepartment.type === 'admin') return 1;
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
          {sortedDepartments.map((department) => <section className={`staff-dept-card ${department.type === 'admin' ? 'admin-highlight' : ''}`} key={department.name}><h2 className="staff-dept-header">{department.name}</h2><div className="staff-list">{department.staff.map((member) => <StaffMember key={`${department.name}-${member[0]}`} member={member} />)}</div></section>)}
        </div>
      </main>
    </div>
  );
}