import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Yakshagana.scss';

// Yakshagana content structured as objects for a clean, data-driven architecture
const yakshaganaData = {
  history: [
    "Yakshagana Kendra was founded in 1970 under the direction of the litterateur of the century, Jnanapeeth Awardee, Dr. K. Shivarama Karanth. Prof. K.S. Haridasa Bhat, who was then the principal of the college, initiated the project of starting a school for Yakshagana. The college provided the platform for many seminars and demonstrations of Yakshagana music and dance initiated by Dr. Karanth."
  ],
  training: {
    intro: "The Yakshagana Kendra is a residential training school that follows the traditional Gurukula system, where teachers and students live together. Interested students are selected after an interview for training of one year's duration. The curriculum is designed to provide all-round training, which includes:",
    curriculum: [
      "Makeup and costume design",
      "Costume repair",
      "Dance and choreography",
      "Music (Bhagavath)"
    ]
  },
  performances: [
    "Beyond traditional training, the Kendra introduced \"Yaksharanga,\" a unique form of ballet developed by Dr. Karanth. The Yaksharanga troupes, trained by Dr. Karanth, have toured globally—including performances in countries like Japan—to showcase the theatrical art of Yakshagana.",
    "The Kendra runs a professional Yakshagana dance ensemble dedicated to the promotion of Yakshagana as a premier theatre art. They have the credit of presenting performances in almost all countries of the world across several performance tours."
  ],
  facilities: [
    "A new complex called \"Shivaprabha\" has been established at the venue, offering extra amenities and facilities for residents, teachers, and guests.",
    "Due to the rigorous training provided, the demand for our artistes is exceptionally high. Graduates of the Yakshagana Kendra are frequently absorbed into professional Yakshagana troupes immediately upon the completion of their training course."
  ]
};

export default function Yakshagana() {
  return (
    <div className="page-wrapper yakshagana-page">
      <main>
        {/* Hero Section */}
        <section className="inner-hero">
          <div className="hero-content">
            <h1>Yakshagana Kendra</h1>
            <p className="red-text">Preserving the tradition and promoting the art of Yakshagana.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/campus">Campus & Culture</Link> / Yakshagana Kendra
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container content-section">
          <div className="yakshagana-content-block">
            
            <h2>History and Legacy</h2>
            {yakshaganaData.history.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <h2>Training: The Gurukula System</h2>
            <p>{yakshaganaData.training.intro}</p>
            <ul className="training-list">
              {yakshaganaData.training.curriculum.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>Performances and Yaksharanga</h2>
            {yakshaganaData.performances.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <h2>Facilities and Career Opportunities</h2>
            {yakshaganaData.facilities.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

          </div>
        </section>
      </main>
    </div>
  );
}