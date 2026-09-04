import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Ncc.scss';

// Dynamically import slider images from src/assets/ncc/
const nccAssets = import.meta.glob('../assets/ncc/NCC*.*', {
  eager: true,
  import: 'default',
  query: '?url',
});

// Extract image URLs to support seamless infinite loop marquee animation
const sliderImages = Object.values(nccAssets);

// NCC, NSS and Rangers content structured as objects for a clean, data-driven architecture
const nccData = {
  introduction: [
    "The new Credit based Semester System introduced by Mangalore University requires compulsory participation of students in co-curricular activities like NSS, NCC, Sports, Rangers, Personality Development Programmes, Literary and Fine Arts activities, MGM provides ample facilities for these.",
    "Students are advised to join NCC (Naval Wing for boys as well as girls and Army Wing for girls). Students with NCC 'C' certificate get an extra credit while seeking opportunities for higher education or employment.",
    "The National Service Scheme (N.S.S.) aims at involving the youth in the service of the community. Young men who give their time, talent and energy to voluntary social work get a feeling of being useful to the community. It will train them to fulfil their social responsibility as citizens. N.S.S. is education through service. The experience of coming into close contact with the poorer section of the society and of trying to solve their problems will be very valuable.",
    "The N.S.S. Units of the College (Consisting of 200 members) have a fine record of service for the past many years.",
    "The Ranger Unit of the college provides opportunities to the girls to train themselves in self discipline and social service."
  ],
  ncc: {
    history: [
      "The National Cadet Corps (Army Wing) was introduced in the college as early as 1957-58 with Prof. V. Balakrishnan as the officer.",
      "In the wake of Indo-China hostilities three companies of the Army Wing were raised in 1962-63 with Prof. B Krishnappa, Prof. R N Kidiyur and late Prof. Sadanand Tantry as officers.",
      "As the Army Wing declined, in 1964-65 a new NCC (Naval) Wing was raised with Prof. Ramadas as Officer.",
      "In 1971-72 Prof. H Krishna Bhat took over as Naval officer and Subsequently Sri S R Shet took charge as officer.",
      "The NCC Army Wing was started in 1999-2000 with Miss Poornima Adiga as the Associate officer.",
      "Affiliated to 6 Karnataka Naval Unit, NCC, Udupi.",
      "Affiliated to 21 Karnataka Battalion, NCC, Udupi."
    ],
    intake: [
      "NCC (Naval) Wing --- 50 cadets (Sub. Unit Commander: Mr. Tilak Kini, In-Charge, M.P.Ed.)",
      "NCC Army Wing --- 50 cadets (Capt. Navya, ANO, M.Sc.)"
    ],
    eligibility: [
      "All students are eligible (PUC to Degree)",
      "Physical fitness is a must."
    ],
    navyActivities: [
      "The NCC cadets meet every Saturday afternoon from 2 to 6 for regular parades, drills and theory classes.",
      "NCC parades have become more spectacular in recent years and the number of students taking up additional training in special camps, Independence Day parades and Republic Day parades has been on the increase.",
      "The cadets actively participate in the parades on the occasion of Independence Day and Republic Day celebrations at the college.",
      "The cadets are often a part and parcel of the volunteer forces active during all the major programmes in the college campus."
    ],
    armyActivities: [
      "Regular training drills, parades, and institutional activities are conducted as per army wing guidelines."
    ],
    camps: [
      "Republic Day Parade Camp (Delhi)",
      "Independence Day Camp (Delhi)",
      "NIC (National Integrity Camp)",
      "BLC (Basic Leadership Camp)",
      "ATC (Annual Training Camp) and Adventurous Camp",
      "Nav Sainik Camp (NSC), Sailing Camp, Ship attachment Camp are the special camps organized for the Naval Wing only.",
      "Thal Sainik Camp (TSC)",
      "Advanced Leadership Camp (ALC)",
      "Mountaineering Course at Himachal Pradesh",
      "Adventurous Camps",
      "Army Attachment Camp at OTA, Chennai for women and for boys at OTA Kamptee.",
      "Screening Selection Course at OTA, Gwalior for women and for boys at OTA Kamptee.",
      "Youth Exchange Programme (YEP)",
      "OTA Kamptee & Indian Military Academy (IMA) at Dehradun"
    ],
    socialService: [
      "Literacy programmes",
      "Blood Donation Camps",
      "Campus Cleaning",
      "Social Awareness programmes"
    ],
    benefits: [
      "The Indian Army and Navy are an attractive avenue for employment and national service (Indian Defence).",
      "Students with NCC Certificate (C) get an extra credit while seeking opportunities for higher education and employment.",
      "Reservation seats for students through CET (Common Entrance Test) are as follows - 17 Medical seats, 44 Engineering seats, 10 Dental seats.",
      "Employment preference in Police Department, Security Officers in leading industries and factories.",
      "Direct Special Entry Scheme for NCC 'C' Certificate holders in Defence Force."
    ]
  },
  nss: {
    history: [
      "The college successfully carried out the National Service Scheme introduced by the government to engage young people in activities of social reconstruction.",
      "Earlier the college had a Social Service League.",
      "The foundation for the sound tradition of NSS activities on this campus was laid by Prof. N. Vajrakumar in 1969.",
      "The NSS unit of the college earned such kudos from the University that it sanctioned an additional unit during the year 1997-98."
    ],
    motto: "NOT ME BUT YOU",
    activities: [
      "Visiting orphanages and Hospitals and presenting gifts of sweets and fruit to children and patients on Gandhi Jayanthi.",
      "Shramadan",
      "Social and educational surveys",
      "Health camps and Free Eye camps",
      "Planting saplings to maintain Ecological balance and to reduce atmospheric pollution",
      "Removal of weeds",
      "Conducting indoor programmes for individual development such as speeches on topics of National and general interests (Healthy society, Literacy awareness, AIDS awareness, Our Constitution, Adult education, Ills of Dowry system, Participation of women in National development)",
      "Organizing special Annual Camps"
    ],
    benefits: [
      "The NSS aims at involving the youth in the service of the community.",
      "Young men who give their time, talent and energy to voluntary social work get a feeling of being useful to the community.",
      "It will train them to fulfil their social responsibility as citizens. NSS is education through service.",
      "The experience of coming into close contact with the poorer sections of the society and of trying to solve their problems will be very valuable."
    ],
    officers: [
      "Mr. Suchith Kotian, M.C.J.",
      "Mrs. Rekha N Chandra, M.Sc(IT), M.Phil."
    ]
  },
  rangers: {
    paragraphs: [
      "A Service Wing introduced in the college in 1996 is the Rangers' Wing meant to inculcate a spirit of service and co-operation among the lady students. Prof. Ms. Premalatha Raj and Miss Aruna Kalkur underwent special training and raised a small battalion of twenty rangers and gave them regular training. Receiving no financial support from any other agency, the rangers provided themselves with the required outfit and other maintenance. The rangers represent a spirit of devotion and sacrifice. They take part in several camps and service activities."
    ],
    convener: "Ms. Vanitha, M.Com."
  }
};

export default function Ncc() {
  return (
    <div className="page-wrapper ncc-page">
      <main>
        {/* Hero Section */}
        <section className="inner-hero">
          <div className="hero-content">
            <h1>NCC, NSS and Rangers</h1>
            <p className="red-text">Fostering discipline, leadership, and social responsibility.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/campus">Campus & Culture</Link> / NCC, NSS and Rangers
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
                  alt={`MGM NCC and NSS ${index + 1}`} 
                  loading="lazy" 
                />
              ))
            ) : (
              <p className="no-images" style={{ textAlign: 'center', width: '100%', padding: '20px' }}>
                Loading NCC & NSS images...
              </p>
            )}
          </div>
        </div>

        {/* Content Section */}
        <section className="container content-section">
          <div className="ncc-content-block">

            <h2>Introduction</h2>
            {nccData.introduction.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <hr className="section-divider" />

            {/* National Cadet Corps */}
            <h2>National Cadet Corps</h2>
            
            <h3>History</h3>
            <ul className="info-list">
              {nccData.ncc.history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>Intake</h3>
            <ul className="info-list">
              {nccData.ncc.intake.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>Eligibility</h3>
            <ul className="info-list">
              {nccData.ncc.eligibility.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>NCC Navy Wing Activities and Foot Prints</h3>
            <ul className="info-list">
              {nccData.ncc.navyActivities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>NCC Army Wing Activities and Foot Prints</h3>
            <ul className="info-list">
              {nccData.ncc.armyActivities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>Main Camps</h3>
            <ul className="info-list">
              {nccData.ncc.camps.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>Social Service</h3>
            <ul className="info-list">
              {nccData.ncc.socialService.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>Benefits</h3>
            <ul className="info-list">
              {nccData.ncc.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <hr className="section-divider" />

            {/* National Service Scheme */}
            <h2>National Service Scheme (N.S.S.)</h2>
            
            <h3>History & Details</h3>
            <ul className="info-list">
              {nccData.nss.history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>Motto</h3>
            <p className="motto-text"><strong>"{nccData.nss.motto}"</strong></p>

            <h3>Activities</h3>
            <ul className="info-list">
              {nccData.nss.activities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>Benefits</h3>
            <ul className="info-list">
              {nccData.nss.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>Programme Officers</h3>
            <ul className="info-list">
              {nccData.nss.officers.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <hr className="section-divider" />

            {/* Rangers */}
            <h2>Rangers</h2>
            {nccData.rangers.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p><strong>Convener :</strong> {nccData.rangers.convener}</p>

          </div>
        </section>
      </main>
    </div>
  );
}