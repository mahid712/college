import { Link } from 'react-router-dom';
import vicePrincipalImg from '../assets/mgm-pic/vice_principal.jpg';
import '../scss/Principal.scss';

export default function VicePrincipal() {
  return (
    <div className="principal-page">
      <main>
        <section className="inner-hero principal-hero">
          <div className="hero-content">
            <h1 className="hero-title">Vice Principal's Welcome</h1>
            <p className="hero-subtitle">A message from the Vice Principal of MGM College.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> <span>/ Message from Vice Principal</span>
            </div>
          </div>
        </section>

        <section className="principal-profile-section content-blocks">
          <div className="container">
            <h2 className="section-title">Message from Vice Principal</h2>

            <div className="principal-card">
              <div className="principal-photo-block">
                <img
                  src={vicePrincipalImg}
                  alt="Dr. Vishwanatha Pai M, Vice Principal of MGM College"
                  className="principal-photo"
                />
                <h3>Dr. Vishwanatha Pai M</h3>
                <p className="designation">Vice Principal, MGM College, Udupi</p>
                <a href="#contact" className="contact-link">📧 Contact Vice Principal</a>
              </div>

              <div className="principal-message-block">
                <p>
                  Welcome you all to Mahatma Gandhi Memorial College. As we stand here in the shadow of the Lord Krishna
                  temple, we recognize that MGM is more than just a recognizable landmark of Udupi; it is a sanctuary
                  where tradition meets modern aspiration. At MGM, we don’t just hand out degrees. Our mission is to
                  mold responsible, educated citizens who are equipped with the sharp skills necessary to navigate the
                  complexities of today’s careers and life. Whether your passion lies in the creative social sciences,
                  the fundamental sciences, or the fast-paced world of applied sciences, we have curated a curriculum
                  designed to match your unique aptitude and goals.
                </p>

                <p>
                  Our college is, quite simply, a great place to learn. You will find that our teaching staff are not
                  just instructors; they are energetic, passionate mentors who are deeply optimistic about the future
                  of India. When they look at you, they don&apos;t just see students—they see the technocrats, the
                  creative minds, and the great artists of tomorrow sprouting into life. You walk the same halls as
                  countless accomplished personalities spread across the globe who proudly call MGM their ‘Alma Mater.’
                  You are now part of that golden lineage. Beyond the classroom, we are here to nurture your confidence.
                  Through our diverse co-curricular activities, we aim to instill in you a profound sense of social and
                  environmental responsibility. A highly skilled professional team is waiting to guide and support you.
                  Embrace this journey. We are honored to have you here, and I look forward to seeing each of you
                  flourish during your time at MGM.
                </p>

                <p className="signature-line">
                  Thanking you<br />
                  Yours Sincerely<br />
                  Dr. Vishwanatha Pai M<br />
                  (Vice Principal)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
