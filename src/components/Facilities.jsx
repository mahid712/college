import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Facilities.scss';

const facilitiesData = [
  {
    id: "annapoorna",
    kicker: "Dining & Nutrition",
    title: "Annapoorna (Canteen)",
    description: "Subsidized, healthy mid-day meals for day scholars and staff.",
    details: [
      "Inaugurated by Dr. M I Savadati (Vice-chancellor, Mangalore University) on March 23, 1990.",
      "Presents a daily scene at noon where over 400 students and teachers utilize subsidized meals.",
      "Simplifies organizing whole-day campus functions like seminars and workshops."
    ]
  },
  {
    id: "coop-store",
    kicker: "Student Support",
    title: "The MGM Students Co-operative Store",
    description: "Academic materials provided competitively with profits returning as student aid.",
    details: [
      "Registered in June 1952 as a Co-operative Society, all students are Associate Members or Shareholders.",
      "Supplies required textbooks, stationery, and learning materials at competitive rates.",
      "Store profits are directly distributed as scholarships to needy students."
    ],
    incharge: [
      "Mr. Anil Kumar B., M.Com., Lecturer (Honorary Secretary)",
      "Mr. B. Udaya (Sales Clerk)"
    ]
  },
  {
    id: "classrooms-labs",
    kicker: "Academic Infrastructure",
    title: "Classrooms & Laboratories",
    details: [
      "56 active classrooms with modern green board upgrades.",
      "Well-equipped laboratories for PU and Degree courses.",
      "State-of-the-art Audio Visual Hall for interactive teaching."
    ]
  },
  {
    id: "computer-center",
    kicker: "IT Infrastructure",
    title: "Computer Centre",
    description: "Inaugurated by Sri. T Ramesh U Pai.",
    details: [
      "Features a resource center with 250 computers, high-speed servers, printers, scanners, laptops, and projectors."
    ]
  },
  {
    id: "hostels",
    kicker: "Residential",
    title: "Sri Vadiraja Vidyarthini Nilaya (Ladies Hostel)",
    description: "Disciplined residential living with dedicated facilities.",
    details: [
      "Built in 1970 to support students from far-off locations.",
      "Equipped with Priyadarshini Hall, added in 1973 as an internal auditorium.",
      "Earned a reputation for discipline and peer-guided governance."
    ],
    incharge: ["Ms. Jayalaxmi M. Rao, B.Com. (Warden)"]
  },
  {
    id: "sports-dept",
    kicker: "Athletics & Physical Health",
    title: "Department of Physical Education",
    description: "Comprehensive facilities for indoor and outdoor sports.",
    details: [
      "A.L.N. Rao playground equipped with a 400-meter track.",
      "New Indoor Complex and a Gymnasium featuring Multi-Gym setups.",
      "Volleyball, Badminton, and Basketball courts on campus and hostel grounds.",
      "Facilities for Table Tennis, Carrom, and indoor recreation.",
      "Governed by a Physical Education Committee chaired by the Principal."
    ]
  }
];

const quickAmenities = [
  { name: "Library", detail: "13,037 sq. ft standalone building." },
  { name: "A.V. Hall", detail: "150-seater with dedicated AV & projection." },
  { name: "Broadband Internet", detail: "High-speed network across all departments." },
  { name: "Reprography", detail: "Available at Library, Office, and Co-op Store." },
  { name: "Staffrooms", detail: "Departmental staffrooms plus main common room." },
  { name: "ICT Tools", detail: "Digital cameras, scanners, printers, and projectors." },
  { name: "Parking", detail: "Dedicated parking zones for staff and students." },
  { name: "Co-curricular Rooms", detail: "Dedicated spaces for NSS, NCC, SWO, and Sports." }
];

export default function Facilities() {
  return (
    <div className="facilities-page">
      <main>
        {/* Inner Hero */}
        <section className="inner-hero">
          <div className="hero-content">
            <span className="eyebrow">Campus & Culture</span>
            <h1>Campus Facilities</h1>
            <p className="hero-description">
              Comprehensive infrastructure and student support services built for academic and athletic excellence.
            </p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/campus">Campus & Culture</Link> / Facilities
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="facilities-content">
          <div className="section-heading">
            <span className="section-kicker">Infrastructure Overview</span>
            <h2>Key Campus Facilities</h2>
          </div>

          {/* Main Cards Grid */}
          <div className="facilities-grid">
            {facilitiesData.map((item) => (
              <article key={item.id} className="facility-card">
                <span className="role">{item.kicker}</span>
                <h3>{item.title}</h3>
                {item.description && <p className="card-desc">{item.description}</p>}
                <ul>
                  {item.details.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                {item.incharge && (
                  <div className="incharge-block">
                    <strong>Incharge:</strong>
                    <ul>
                      {item.incharge.map((person, i) => (
                        <li key={i}>{person}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Quick Amenities Grid */}
          <div className="section-heading amenities-heading">
            <span className="section-kicker">Services & Resources</span>
            <h2>General Amenities</h2>
          </div>

          <div className="amenities-grid">
            {quickAmenities.map((amenity, index) => (
              <div key={index} className="amenity-item">
                <h3>{amenity.name}</h3>
                <p>{amenity.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}