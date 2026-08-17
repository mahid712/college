import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Principal.scss';

export default function Principal() {
    return (
        <div className="principal-page">
            {/* Navbar and Footer are handled globally in App.jsx layout */}
            <main>
                <section className="inner-hero principal-hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Principal's Welcome</h1>
                        <p className="hero-subtitle">Guiding MGM College with a vision for academic excellence and ethical leadership.</p>
                        <div className="breadcrumb">
                            <Link to="/">Home</Link> <span>/ Message from Principal</span>
                        </div>
                    </div>
                </section>

                <section className="principal-profile-section content-blocks">
                    <div className="container">
                        <h2 className="section-title">Message from Principal</h2>

                        <div className="principal-card">
                            <div className="principal-photo-block">
                                <img src="/src/assets/mgm-pic/princi.png" alt="Photo of Prof. Vanitha Maiya" className="principal-photo" />
                                <h3>Prof. Vanitha Maiya</h3>
                                <p className="designation">Principal, MGM College, Udupi</p>
                                <Link to="/contact" className="contact-link">📧 Contact Principal</Link>
                            </div>
                            
                            <div className="principal-message-block">
                                <p>We are all proud of our - Mahatma Gandhi Memorial College. Our college makes one of the recognizable landmarks, located near the Lord Krishna temple of Udupi. We are creating responsible and educated students and equipping them with necessary skills to tackle the needs of today's career and life. I welcome your interest in MGM College and hope you will find the courses suitably matching your aptitude, aspirations and the goals of your life.</p>
                                
                                <p>Our College is a great place to learn. Our teaching staff are energetic, enthusiastic and passionate in what they teach. We have eminent local personalities and countless accomplished personalities spread far and wide in the globe and you might hear many of them call M.G.M their ‘Alma Mater’. And most of all, our teachers are optimistic about the future of India, that is… YOU. They see great artists, creative minds, technocrats sprouting in you. We have a highly skilled and professional team of staff waiting to guide and support you through your learning experience at college. We, at MGM strongly believe that the only constant thing about life is ‘change’. And we offer courses to meet the ever-changing needs of the society from creative social sciences to fundamental sciences and applied sciences. We never tire in improving ourselves, for we believe that he who thinks that the improvement is complete stagnates himself. In MGM, students are helped to focus on confidence building, while nurturing a strong sense of social and environmental responsibility through academic and co-curricular activities.</p>
                                
                                <p>I look forward to welcome you to the college in the near future.</p>
                                
                                <p className="signature-line">
                                    Thanking you<br />
                                    Yours Sincerely<br />
                                    Prof. Vanitha Maiya<br />
                                    (Principal)
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}