import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Canteen.scss';

// Canteen content structured as objects for a clean, data-driven architecture
const canteenData = {
  annapoorna: [
    "Canteen was inaugurated by Dr. M I Savadati (Vice-chancellor, Mangalore university) on 23rd March, 1990.",
    "Another area where the college has come to the help of students is in providing healthy mid-day meals for the day scholars in the canteen.",
    "The new building Annapoorna presents today a delightful scene at noon when more than 400 students and teachers take advantage of the subsidized food.",
    "This facility available in the campus makes the task of organizing whole day functions like seminars and workshops less cumbersome."
  ]
};

export default function Canteen() {
  return (
    <div className="page-wrapper canteen-page">
      <main>
        {/* Hero Section */}
        <section className="inner-hero">
          <div className="hero-content">
            <h1>Annapoorna Canteen</h1>
            <p className="red-text">Providing healthy mid-day meals and a welcoming space for students and staff.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/campus">Campus & Culture</Link> / Canteen
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container content-section">
          <div className="canteen-content-block">
            
            <h2>Annapoorna</h2>
            <ul className="canteen-list">
              {canteenData.annapoorna.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>
        </section>
      </main>
    </div>
  );
}