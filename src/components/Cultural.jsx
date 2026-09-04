import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/Cultural.scss';

const CULTURAL_CENTERS = [
  {
    id: "govind-pai",
    role: "Oriental Research Centre",
    title: "Rashtrakavi Govind Pai Samshodhana Kendra",
    description: "Established in 1965 to organize research work in ancient history, literature, Tulu Lexicon project, and regional culture."
  },
  {
    id: "rrc",
    role: "Folk Performing Arts Centre",
    title: "Regional Resource Centre for Folk Performing Arts",
    description: "Internationally recognized folklore documentation center equipped with multimedia archives, Siri Sampada studio, and Ford Foundation grants."
  }
];

// Page metadata mapping
const CULTURAL_PAGES = {
  main: {
    kicker: "Campus & Culture",
    title: "Cultural & Research Centres",
    description: "Preserving rich heritage, regional literature, and historical research through our specialized research centers.",
    isMain: true
  },
  "govind-pai": {
    kicker: "Oriental Research Centre",
    title: "Rashtrakavi Govind Pai Samshodhana Kendra",
    description: "Established in 1965 around the nucleus of a unique collection of 5,000 volumes belonging to the library of late Poet-Laureate Shri Manjeshwar Govind Pai.",
    isGovindPai: true
  },
  "rrc": {
    kicker: "Folk Performing Arts Centre",
    title: "Regional Resource Centre for Folk Performing Arts",
    description: "Built with grants from the Ford Foundation to preserve, document, and research the rich folklore, performing arts, and traditions of Karnataka.",
    isRRC: true
  }
};

// Detailed Content Data Objects
const GOVIND_PAI_DATA = {
  links: [
    { label: "RG Pai Research Blog →", url: "http://govindapairesearch.blogspot.com/" },
    { label: "Kanakadasa Research Centre →", url: "http://www.kanakaudupi.com" },
    { label: "TuluWorld Website →", url: "http://www.TuluWorld.org" },
    { label: "Tulu Dictionary Portal →", url: "http://WorldTulu.Dicitionary.org/" }
  ],
  about: {
    kicker: "About the Kendra",
    title: "Objectives & Academic History",
    paragraphs: [
      "Established in 1965 around the nucleus of a unique collection of 5,000 volumes belonging to the library of late Poet-Laureate Shri Manjeshwar Govind Pai. The objective is to organize research work in ancient history and literature—classical and modern. The center arranges annual lectures by renowned scholars and publications from time to time, while running an organized reference service.",
      "The University of Mysore recognized this centre for research in the history and culture of the region leading to Doctoral degrees. With the establishment of Mangalore University, the affiliation for Ph.D. continued until 2004. Since 2004, the Centre has been affiliated to Hampi Kannada University. Fourteen scholars have obtained their Doctorate degrees through this Kendra and many more scholars are actively working on their projects."
    ]
  },
  guides: {
    kicker: "Faculty & Guides",
    title: "Recognized Research Guides",
    items: [
      "Dr. Padekallu Vishnu Bhat", "Dr. Mahabaleshwara Rao", "Dr. D.R. Panduranga",
      "Dr. H.S. Shivaswamy", "Dr. Malathi K. Murthy", "Dr. B. Jagadeesh Shetty",
      "Dr. Uppangala Rama Bhat", "Dr. Pundikai Ganapayya Bhat", "Dr. Malini Adiga",
      "Dr. Gayathri Navada"
    ]
  },
  lexicon: {
    kicker: "Major Milestone",
    title: "Tulu Lexicon Project",
    paragraphs: [
      "The most important project undertaken by the research center has been the Tulu Lexicon Project with Dr. U.P. Upadhyaya as the Chief Editor and Dr. Mrs. Susheela P. Upadhyaya and other scholars on the editorial staff. After a dialect survey of the Tulu-speaking areas in the initial period, a trilingual dictionary was prepared on scientific lines.",
      "With the release of the final volumes in September 1997, the giant dictionary of 3,332 pages and more than one lakh Tulu words was accomplished. The Lexicon has been recognized as the best dialect dictionary ever published in an Indian language, available as a 6-volume set. Additionally, the Kendra compiled a 1,400-page volume containing research works of the late Manjeshwar Govind Pai, along with another volume of his English articles brought out by Director Prof. H. Krishna Bhat."
    ]
  },
  awards: {
    kicker: "Recognizing Talent",
    title: "Awards & Honours",
    items: [
      { name: "Kadengodlu Poetry Award", desc: "Awarded to a poet who presents the best unpublished anthology of poems." },
      { name: "Prof. Inamdar Award", desc: "Confers a prize on the best critical work published in Kannada every year." },
      { name: "Prof. K.S. Haridasa Bhat Award", desc: "Rewards the best work on Folklore published in Kannada every year." },
      { name: "Polali Sheenappa Hegde Award", desc: "Awarded to the best Tulu scholar in regional studies." }
    ]
  },
  museum: {
    kicker: "Heritage & Artifacts",
    title: "Govinda Pai Archaeological Museum",
    content: "A Govinda Pai Archaeological museum has been set up which possesses abandoned remnants in stone, metal, and wood found at shrines, old castles, and other monuments. These are housed in a separate wing in the new building, Nalanda. This museum is perhaps the only museum in an undergraduate college that has been registered and recognized officially."
  },
  projects: {
    kicker: "Funding & Grants",
    title: "Sanctioned Research Projects",
    items: [
      { dept: "Tulu Academy", title: "Survey & Conservation", duration: "6 months to 1 year", agency: "Govt. of Karnataka", funding: "Rs. 80,000" },
      { dept: "R. G. Pai Centre", title: "Lambani Book Project", duration: "1 year", agency: "Suvarna Karnataka Yojane", funding: "Rs. 50,000" },
      { dept: "Regional Resource Centre", title: "History of Bunts", duration: "5 Years", agency: "World Bunts Foundation", funding: "Rs. 10 Lakhs" },
      { dept: "Regional Resource Centre", title: "Digitization Project", duration: "1 year", agency: "CIL, Mysore", funding: "Rs. 1 Lakh" }
    ]
  }
};

const RRC_DATA = {
  links: [
    { label: "Kanakadasa Research Centre & RRC Web Site →", url: "http://www.kanakaudupi.com" }
  ],
  origins: {
    kicker: "Origins & Vision",
    title: "Establishment & International Recognition",
    paragraphs: [
      "The Regional Resources Centre for Folk Performing Arts was built with the help of grants offered by the Ford Foundation. The saga of the RRC marks the culmination of international recognition that this pioneering institution of learning acquired.",
      "The origin of this recognition began with an invitation extended to Prof. K.S. Haridasa Bhat in 1962-63 to attend a 6-month course in ISVE, Italy. Subsequent invitations from the ICCR to visit foreign countries like Hong Kong leading Folk Dance troupes initiated a series of international collaborations."
    ]
  },
  projects: {
    kicker: "Global Collaborations",
    title: "International Workshops & Research Projects",
    paragraphs: [
      "Dr. Peter Claus helped the RRC launch a series of International Workshops in Folklore studies (1988-89) in which eminent folklorists of the world participated as resource persons. A pioneering book on Indian Folkloristics by Dr. Peter Claus and Frank Korrum published by the RRC was a key product of this workshop series.",
      "The Indo-Finnish Project was carried out in the precincts of Dharmasthala and Belthangady Taluks under the auspices of RRC, involving the active participation of Prof. Lauri Honko, Finnish National Professor of Folkloristics. Prof. Lauri Honko was invited for a seminar on the Finnish Folk Epic Kalevala in 1985.",
      "This contact resulted in a Memorandum of Understanding (MoU) signed between Turku University, Mangalore University, and RRC for the promotion of folklore research and knowledge sharing."
    ]
  },
  archival: {
    kicker: "Archival & Technology",
    title: "Multimedia Documentation & Siri Sampada",
    paragraphs: [
      "The Centre has produced rich documentation material in audio-visual form based on a series of field studies, workshops, seminars, and festivals. Utilizing modern methods of multimedia documentation, the RRC has established itself as a major treasure trove of folklore material. Photographs, audio cassettes, videos, and slides are analyzed, classified, and stored for computerized retrieval and spot consultation.",
      "Siri Sampada, which houses valuable archival material, is equipped with a sophisticated video editor's desk where Harshavardhana Bhat has produced documentary videos on rare forms of folk performances. Furthermore, the Dissemination Project presents RRC holdings to audiences in Dhwanyaloka as an informal educational initiative."
    ]
  },
  funding: {
    kicker: "Grants & Corpus Fund",
    title: "Ford Foundation Endowment & Funding",
    paragraphs: [
      "The Ford Foundation offered a liberal grant to the college, initially for a two-year period, to launch the project of surveying and documenting the folk theater forms of Karnataka. The grant was renewed subsequently.",
      "To enable the institution to sustain itself permanently, the Ford Foundation sanctioned endowment grants to the tune of Rs. 38.75 Lakhs, which was matched by an equal contribution from the Academy of General Education to institute a dedicated corpus fund."
    ]
  }
};

export default function Cultural() {
  const [activeView, setActiveView] = useState('main');
  const currentPage = CULTURAL_PAGES[activeView] || CULTURAL_PAGES.main;

  return (
    <div className="page-wrapper cultural-page">
      <main>
        {/* Dynamic Hero Section */}
        <section className="cultural-hero">
          <div className="cultural-hero-content">
            <span className="eyebrow">{currentPage.kicker}</span>
            <h1>{currentPage.title}</h1>
            <p className="hero-description">{currentPage.description}</p>
            
            <div className="breadcrumb">
              {currentPage.isMain ? (
                <>
                  <Link to="/">Home</Link> / <Link to="/campus">Campus & Culture</Link> / Cultural
                </>
              ) : (
                <button className="back-btn" onClick={() => setActiveView('main')}>
                  &larr; Back to Cultural Centres
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Dynamic Body Content */}
        <div className="cultural-content">
          <section className="cultural-section">
            
            {/* Main Selection Grid View */}
            {currentPage.isMain && (
              <>
                <div className="section-heading">
                  <span className="section-kicker">Sister Institutions</span>
                  <h2>Research Centres</h2>
                  <p>Select a research center to view details and research activities.</p>
                </div>

                <div className="cultural-grid">
                  {CULTURAL_CENTERS.map((center) => (
                    <div 
                      key={center.id} 
                      className="cultural-card-link" 
                      onClick={() => setActiveView(center.id)}
                    >
                      <article className="cultural-card">
                        <span className="role">{center.role}</span>
                        <h3>
                          {center.title} <span className="arrow">&rarr;</span>
                        </h3>
                        <p>{center.description}</p>
                      </article>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Detailed View: Govind Pai Samshodhana Kendra */}
            {currentPage.isGovindPai && (
              <div className="center-details">
                {/* Links Section */}
                <div className="links-banner">
                  <span className="section-kicker">Websites & Portals</span>
                  <div className="external-links-grid">
                    {GOVIND_PAI_DATA.links.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
                    ))}
                  </div>
                </div>

                {/* About Block */}
                <div className="detail-block">
                  <span className="section-kicker">{GOVIND_PAI_DATA.about.kicker}</span>
                  <h2>{GOVIND_PAI_DATA.about.title}</h2>
                  {GOVIND_PAI_DATA.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>

                {/* Research Guides Block */}
                <div className="detail-block">
                  <span className="section-kicker">{GOVIND_PAI_DATA.guides.kicker}</span>
                  <h2>{GOVIND_PAI_DATA.guides.title}</h2>
                  <ul className="guides-list">
                    {GOVIND_PAI_DATA.guides.items.map((guide, i) => <li key={i}>{guide}</li>)}
                  </ul>
                </div>

                {/* Tulu Lexicon Block */}
                <div className="detail-block">
                  <span className="section-kicker">{GOVIND_PAI_DATA.lexicon.kicker}</span>
                  <h2>{GOVIND_PAI_DATA.lexicon.title}</h2>
                  {GOVIND_PAI_DATA.lexicon.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>

                {/* Awards Block */}
                <div className="detail-block">
                  <span className="section-kicker">{GOVIND_PAI_DATA.awards.kicker}</span>
                  <h2>{GOVIND_PAI_DATA.awards.title}</h2>
                  <div className="awards-grid">
                    {GOVIND_PAI_DATA.awards.items.map((award, i) => (
                      <div key={i} className="award-card">
                        <span className="card-kicker">Award {i + 1}</span>
                        <h3>{award.name}</h3>
                        <p>{award.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Museum Block */}
                <div className="detail-block">
                  <span className="section-kicker">{GOVIND_PAI_DATA.museum.kicker}</span>
                  <h2>{GOVIND_PAI_DATA.museum.title}</h2>
                  <p>{GOVIND_PAI_DATA.museum.content}</p>
                </div>

                {/* Projects Table Block */}
                <div className="detail-block">
                  <span className="section-kicker">{GOVIND_PAI_DATA.projects.kicker}</span>
                  <h2>{GOVIND_PAI_DATA.projects.title}</h2>
                  <div className="projects-table-wrapper">
                    <table className="projects-table">
                      <thead>
                        <tr>
                          <th>Department</th>
                          <th>Title</th>
                          <th>Duration</th>
                          <th>Funding Agency</th>
                          <th>Total Funding</th>
                        </tr>
                      </thead>
                      <tbody>
                        {GOVIND_PAI_DATA.projects.items.map((project, i) => (
                          <tr key={i}>
                            <td className="dept-cell">{project.dept}</td>
                            <td className="title-cell">{project.title}</td>
                            <td>{project.duration}</td>
                            <td>{project.agency}</td>
                            <td className="funding-cell">{project.funding}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Detailed View: Regional Resource Centre (RRC) */}
            {currentPage.isRRC && (
              <div className="center-details">
                {/* Links Section */}
                <div className="links-banner">
                  <span className="section-kicker">Official Web Portal</span>
                  <div className="external-links-grid">
                    {RRC_DATA.links.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
                    ))}
                  </div>
                </div>

                {/* Origins Block */}
                <div className="detail-block">
                  <span className="section-kicker">{RRC_DATA.origins.kicker}</span>
                  <h2>{RRC_DATA.origins.title}</h2>
                  {RRC_DATA.origins.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>

                {/* Collaborations Block */}
                <div className="detail-block">
                  <span className="section-kicker">{RRC_DATA.projects.kicker}</span>
                  <h2>{RRC_DATA.projects.title}</h2>
                  {RRC_DATA.projects.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>

                {/* Archival Block */}
                <div className="detail-block">
                  <span className="section-kicker">{RRC_DATA.archival.kicker}</span>
                  <h2>{RRC_DATA.archival.title}</h2>
                  {RRC_DATA.archival.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>

                {/* Funding Block */}
                <div className="detail-block">
                  <span className="section-kicker">{RRC_DATA.funding.kicker}</span>
                  <h2>{RRC_DATA.funding.title}</h2>
                  {RRC_DATA.funding.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            )}

          </section>
        </div>
      </main>
    </div>
  );
}