import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Block.scss';

// Dynamically import ALL images inside src/assets/block/ regardless of filenames or extensions
const blockAssets = import.meta.glob('../assets/block/*.*', {
  eager: true,
  import: 'default',
  query: '?url',
});

// Extract image URLs to support continuous marquee looping
const sliderImages = Object.values(blockAssets);

const campusBlocks = [
  {
    name: "Madhava Raksha",
    description: "The administrative block was inaugurated by Dr. Murali Manohar Joshi (Minister for Human Resource and Development) on 30th April, 1998. The Principal's chamber, Vice principal's chamber, Conference hall, Administrative office, NSS office, Student counsellor's office, Faculty room, and Cooperative society are all located in this block."
  },
  {
    name: "Madhava Pai Vijnana Mandir",
    description: "Was inaugurated by H A B Parpia in 1961."
  },
  {
    name: "Old Administrative Block",
    description: "The Old Administrative Block has two wings - The 'Anantha Baliga Memorial Hall' and the 'Silver Jubilee Memorial Hall'. The Karnataka State Open University office is situated in this block."
  },
  {
    name: "Vikramashila",
    description: "Was inaugurated by Sri. A R Badarinarayana (the then Mysore State Education Minister)."
  },
  {
    name: "Vajrasoudha",
    description: "Key institutional facility on campus."
  },
  {
    name: "Computer Science Block",
    description: "Houses computing laboratories and IT infrastructure."
  },
  {
    name: "Indoor Stadium",
    description: "Full-fledged indoor sports complex consists of 3 Badminton courts, 2 gyms, 3 Table Tennis, and Chess Board facilities."
  },
  {
    name: "Parvathi Nilaya",
    description: "The ladies retiring room was inaugurated in 1975."
  },
  {
    name: "Gitanjali",
    description: "(House of Culture) acts as a conference hall for the RRC."
  },
  {
    name: "Nuthana Ravindra Mantapa",
    description: "Was inaugurated by Sri. Damu Javeri on 4th February, 1992. This auditorium is well furnished and can accommodate around 450 people."
  },
  {
    name: "Muddana Mantapa",
    description: "Open Air Theatre hosting campus cultural events and gatherings."
  },
  {
    name: "Gurukula (Staff Quarters)",
    description: "The college provides quarters facilities for the teaching and non-teaching staff. There are 34 staff quarters in the college campus."
  },
  {
    name: "Rashtrakavi Govind Pai Samshodhana Kendra (Sister Institution)",
    description: "Was inaugurated by Sri D V Arasu (Vice Chancellor, Mysore University) in 1976."
  },
  {
    name: "Nalanda (Sister Institution)",
    description: "Was inaugurated by Sri K Sooryanarayana Adiga (Dir. of Karnataka Bank Ltd.) on 14th August, 1980. A full-fledged bank (Syndicate Bank Branch) and not an extension as in many other colleges operates on the ground floor of Nalanda. The RRC is also located here."
  },
  {
    name: "Kamalaksha-Gurubhavana (Sister Institution)",
    description: "Consists of 5 Apartments and a Yakshagana Museum."
  }
];

export default function Block() {
  return (
    <div className="page-wrapper block-page">
      <main>
        {/* Inner Hero Section */}
        <section className="inner-hero">
          <div className="hero-content">
            <h1>Campus Blocks & Infrastructure</h1>
            <p>Discover the historical administrative blocks, academic halls, and sister institutions across MGM College.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/campus">Campus & Culture</Link> / Blocks
            </div>
          </div>
        </section>

        {/* Moving Image Section */}
        <div className="slider-wrapper">
          <div className="slider">
            {sliderImages.length > 0 ? (
              [...sliderImages, ...sliderImages].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`MGM Campus Block ${index + 1}`}
                  loading="lazy"
                />
              ))
            ) : (
              <p className="no-images" style={{ textAlign: 'center', width: '100%', padding: '20px' }}>
                Loading campus block images...
              </p>
            )}
          </div>
        </div>

        {/* Content Section - Grid Style */}
        <section className="container content-section">
          <div className="section-header">
            <span className="section-kicker">Campus Overview</span>
            <h2>Blocks & Facilities</h2>
          </div>
          
          <div className="blocks-grid">
            {campusBlocks.map((item, index) => (
              <div key={index} className="block-card">
                <span className="card-kicker">Facility {index + 1}</span>
                <h3 className="block-title">{item.name}</h3>
                <p className="block-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}