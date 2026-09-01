import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../scss/CampusLife.scss';

const campusFeatures = [
  {
    icon: 'fa-book-open',
    title: 'Library & Resources',
    description: 'Access one of the largest academic libraries in the region, featuring over 1.5 lakh volumes, e-journals, and modern study spaces.',
    linkLabel: 'View Library Details',
    href: '/campus#campus-features',
  },
  {
    icon: 'fa-theater-masks',
    title: 'Yakshagana',
    description: 'Home to the famous Yakshagana Kendra and numerous performing arts clubs that celebrate coastal Karnataka’s rich heritage.',
    linkLabel: 'Explore Yakshagana',
    href: '/campus#campus-features',
  },
  {
    icon: 'fa-futbol',
    title: 'Sports & Fitness',
    description: 'Modern indoor sports complex, large playfields, and a fully equipped gymnasium promoting student health and competitive spirit.',
    linkLabel: 'See Sports Facilities',
    href: '/campus#campus-features',
  },
  {
    icon: 'fa-users',
    title: 'Student Clubs & Activities',
    description: 'Join NCC, NSS, and over 20 active student clubs dedicated to debate, nature, science, and social outreach.',
    linkLabel: 'Join a Club',
    href: '/campus#campus-features',
  },
  {
    icon: 'fa-flask',
    title: 'Science Museum',
    description: 'Visit the Regional Science Museum, an invaluable resource for practical learning and scientific exploration for all students.',
    linkLabel: 'Plan Your Visit',
    href: '/campus#campus-features',
  },
  {
    icon: 'fa-utensils',
    title: 'Hostel & Mess',
    description: 'Safe, comfortable hostel accommodations available for male and female students, with high-quality and hygienic dining facilities.',
    linkLabel: 'Check Availability',
    href: '/campus#campus-features',
  },
  {
    icon: 'fa-medal',
    title: 'NCC & NSS',
    description: 'Fostering discipline, leadership, and social service through active cadet training and community development camps.',
    linkLabel: 'Check Availability',
    href: '/campus#campus-features',
  },
  {
    icon: 'fa-graduation-cap',
    title: 'Alumni',
    description: 'Connecting a vast global network of former students to mentor current batches and support institutional growth.',
    linkLabel: 'Check Availability',
    href: '/campus#campus-features',
  },
  {
    icon: 'fa-university',
    title: 'Campus Cells',
    description: 'Dedicated student and faculty cells ensuring guidance, grievance redressal, and holistic skill enhancement.',
    linkLabel: 'Check Availability',
    href: '/campus#campus-features',
  },
  {
    icon: 'fa-building',
    title: 'Campus Facilities',
    description: 'Modern infrastructure, well-equipped labs, libraries, and common spaces designed to facilitate seamless learning.',
    linkLabel: 'Check Availability',
    href: '/campus#campus-features',
  },
  {
    icon: 'fa-tree',
    title: 'Garden',
    description: 'Serene, lush green botanical environments providing students with peaceful spaces to relax and study outdoors.',
    linkLabel: 'Check Availability',
    href: '/campus#campus-features',
  },
  {
    icon: 'fa-landmark',
    title: 'Campus Block',
    description: 'State-of-the-art academic blocks featuring modern classrooms, well-equipped labs, and collaborative seminar halls.',
    linkLabel: 'Check Availability',
    href: '/campus#campus-features',
  },
  {
    icon: 'fa-theater-masks',
    title: 'Culture Center',
    description: 'Vibrant hubs dedicated to the performing arts, traditional heritage, and cultural events, including our renowned Yakshagana Kendra.',
    linkLabel: 'Check Availability',
    href: '/campus#campus-features',
  },
];

export default function CampusLife() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="campus-life-page">
      <main>
        <section className="inner-hero campus-hero">
          <div className="hero-content">
            <h1>Campus Life & Culture</h1>
            <p className="red-text">
              Discover the vibrant community, student clubs, facilities, and unique cultural heritage of MGM.
            </p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / Campus Life
            </div>
          </div>
        </section>

        <section className="campus-features">
          <div className="container">
            <h2 className="section-title">Explore Our Vibrant Campus</h2>
            <p className="section-subtitle">
              A place where academic rigor meets a rich cultural and student experience.
            </p>

            <div className="pillars-grid campus-features-grid">
              {campusFeatures.map((feature) => (
                <div className="pillar-card" key={feature.title}>
                  <i className={`pillar-icon fas ${feature.icon}`}></i>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <Link to={feature.href} className="learn-more">{feature.linkLabel} &rarr;</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}