import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Library.scss';

// Dynamically import the library slider images from src/assets/library/L*.jpg.
const libraryAssets = import.meta.glob('../assets/library/L*.jpg', {
  eager: true,
  import: 'default',
  query: '?url',
});

// Extract images dynamically to support seamless infinite loop animation
const sliderImages = Object.values(libraryAssets);

// Library content structured as objects for a clean, professional, data-driven approach
const libraryData = {
  genesisParagraphs: [
    "M.G.M college library started functioning from 27-6-1949 when it was housed in a small room with hardly 1000 volumes in its book stack to begin with has now reached more than one lakh volumes which could do credit even to a University.",
    "When the college was shifted to its own building on 27-6-1951 at Sagri, the library was shifted to a fairly bigger hall atop the Administrative block of the Main Building, having four rooms and this made it possible to provide more library facilities to the students whose number was growing year after year.",
    "The generous gift of Rs.10,000/- made to the College Library by the Canara Banking Corporation Ltd. in the year 1954 was responsible for the further growth of the Library which was named after Canara Banking Corporation, the biggest donor of the Library, by his Holiness Sri Vishwesha Thirtha Swamiji of Pejavar Mutt in the same year.",
    "Granthaloka was inaugurated in the year 2002."
  ],
  detailCards: [
    {
      id: 1,
      title: 'Book Collection',
      description: 'The total number of books on various subjects in different languages in the library now exceeds One lakh.'
    },
    {
      id: 2,
      title: 'Membership',
      description: 'All the current students and the members of the college staff, both teaching and non-teaching, are allowed to make use of the college library, reading room and the reference section and others can enroll themselves as members only with the written permission of the Principal on conditions laid down.'
    }
  ],
  loanRules: [
    { id: 1, role: 'Teaching Staff', details: '10 Books — For a period of 100 days.' },
    { id: 2, role: 'Non-Teaching Staff', details: '3 Books — For a period of 100 days.' },
    { id: 3, role: 'Students of all classes', details: '2 Books — For a period of 8 days + Overnight 1 book.' },
    { id: 4, role: 'Old students and Public', details: '2 Books — For a period of 30 days.' }
  ],
  sectionsInfo: [
    {
      id: 1,
      title: 'Magazine (Periodical) Section',
      description: 'The Reading Room subscribes to a good number of magazines and journals numbering nearly 80. It also subscribes to 13 dailies.'
    },
    {
      id: 2,
      title: 'Books for reference',
      description: 'The Reference Section has got a rich collection of books on different subjects in different languages including Encyclopedias, Dictionaries, Year-books, Bound volumes, Books for competitive exams and Miscellaneous Books.'
    },
    {
      id: 3,
      title: 'Department libraries',
      description: 'To assist teaching and reading, books are loaned to some of the departments for the departmental libraries. Students can also borrow books from the departmental libraries by contacting the heads of the departments concerned by fulfilling the necessary conditions.'
    },
    {
      id: 4,
      title: 'Multi-Facility Centre',
      description: 'Internet Browsing and computer, Printing, Xerox, typing, etc.'
    }
  ],
  workingHours: [
    "On Working days (except Sundays and other Public Holidays): 08:30 A.M. to 5:00 P.M. (08:00 A.M. to 5:30 P.M. During Examinations).",
    "On Saturdays: 08:30 A.M. to 1:00 P.M."
  ]
};

export default function Library() {
  return (
    <div className="page-wrapper library-page">
      <main> 
        {/* Hero Section */}
        <section className="inner-hero">
          <div className="hero-content">
            <h1>Library Complex</h1>
            <p className="red-text">Granthaloka with spacious reading halls, Ku. Shi. Jnana Mantapa - Reference section.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/campus">Campus & Culture</Link> / Library
            </div>
          </div>
        </section>

        {/* Seamless Image Slider Section */}
        <div className="slider-wrapper">
          <div className="slider">
            {sliderImages.length > 0 ? (
              [...sliderImages, ...sliderImages].map((src, index) => (
                <img 
                  key={index} 
                  src={src} 
                  alt={`Library View ${index + 1}`} 
                  loading="lazy" 
                />
              ))
            ) : (
              <p className="no-images" style={{ textAlign: 'center', width: '100%', padding: '20px' }}>Loading library images...</p>
            )}
          </div>
        </div>

        {/* Content Section */}
        <section className="container content-section">
          <div className="library-content-block">
            <h2>Genesis and Growth</h2>
            {libraryData.genesisParagraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}

            <h2>Library Sections and Details</h2>
            
            <div className="library-detail-grid">
              {libraryData.detailCards.map((card) => (
                <div className="detail-card" key={card.id}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>

            <h3>Book-Borrowing and the duration of Loan</h3>
            <p>Library Books and Magazines are issued to the members as follows:</p>
            <ul className="loan-rules-list">
              {libraryData.loanRules.map((rule) => (
                <li key={rule.id}>
                  <strong>{rule.role}:</strong> {rule.details}
                </li>
              ))}
            </ul>
            <p className="note-text">Students may get the books renewed by the Librarian for a further period of 7 days on request if necessary.</p>

            <div className="sections-info-wrapper">
              {libraryData.sectionsInfo.map((section) => (
                <div className="info-block" key={section.id}>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </div>
              ))}
            </div>

            <h2>Working Hours</h2>
            <div className="working-hours-card">
              {libraryData.workingHours.map((hours, index) => (
                <p key={index}><strong>{hours.split(':')[0]}:</strong>{hours.substring(hours.indexOf(':') + 1)}</p>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}