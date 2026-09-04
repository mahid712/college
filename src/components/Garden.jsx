import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Garden.scss';

// Dynamically import garden slider images from src/assets/garden/
// Supports bot1.jpg, bot2.jpg, bot3.png, etc.
const gardenAssets = import.meta.glob('../assets/garden/bot*.*', {
  eager: true,
  import: 'default',
  query: '?url',
});

// Extract image URLs to support seamless infinite loop marquee animation
const sliderImages = Object.values(gardenAssets);

const gardenData = {
  details: [
    "The Botanical garden is the green center of MGM college.",
    "When it was started in the year 1970, it featured a variety of 100 plant species.",
    "It is situated in an area of about half an acre surrounded by the Chemistry, Zoology, Botany, and Home Science departments.",
    "The Botanical garden was named 'Botanica' during the Golden Jubilee year (1999-2000).",
    "BOTANICA contains indigenous and exotic varieties of trees, shrubs, and herbs of medicinal and ornamental value.",
    "Trees on campus feature attached nameplates that provide taxonomical information regarding each species.",
    "Arches covered with flowering creepers welcome all visitors into the garden.",
    "Includes a dedicated fern house where different varieties of ferns are grown.",
    "Grows medicinal plants, rare ferns, xerophytes, and specimen plants required for regular practical classes."
  ],
  highlights: [
    "Telegraph Plant: Known for its trifoliately compound leaves where two smaller lateral leaflets display jerky movements throughout the day.",
    "Govania Plant: Famous for its stems where, when cut, sap oozes out with considerable force.",
    "Cananga Odorata: A rare tree species, unique as the only specimen in Udupi.",
    "Cycas Species: About 40 Cycas plants belonging to two species produce male and female cones on campus.",
    "Zamia: An African gymnosperm species successfully cultivated within the garden grounds.",
    "Parkia: A tall tree featuring round, tennis ball-like inflorescence.",
    "Aquatic Habitats: Multiple garden pools host hydrophytes including Pistia, Eichhornia, Chara, Marsilea, Hydrilla, Lemna, Utricularia, Nymphaea, and Azolla.",
    "Medicinal Plants: Features Ashoka (used in Ayurvedic Ashokarishta), Coleus aromaticus, kus-kus grass, and lemon grass that enrich the garden atmosphere."
  ]
};

export default function Garden() {
  return (
    <div className="page-wrapper garden-page">
      <main>
        {/* Inner Hero Section */}
        <section className="inner-hero">
          <div className="hero-content">
            <span className="eyebrow">Campus & Culture</span>
            <h1>Botanica (Garden)</h1>
            <p className="hero-description">
              The green center of MGM College, preserving indigenous and exotic plant varieties.
            </p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/campus">Campus & Culture</Link> / Garden
            </div>
          </div>
        </section>

        {/* Moving Image Section */}
        <div className="slider-wrapper">
          <div className="slider">
            {sliderImages.length > 0 ? (
              // Duplicate array multiple times to achieve a seamless infinite marquee loop
              [...sliderImages, ...sliderImages, ...sliderImages].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`MGM Botanica Garden ${index + 1}`}
                  loading="lazy"
                />
              ))
            ) : (
              <p className="no-images">Loading garden images...</p>
            )}
          </div>
        </div>

        <section className="container garden-content">
          {/* Editorial Poem Section */}
          <section className="poem-section">
            <span className="section-kicker">Reflection</span>
            <h3>Home</h3>
            <div className="poem-content">
              "You gave to me a pack of seeds<br />
              And promised to supply my needs.<br />
              My spirit sang, my heart stood still<br />
              For in your garden I would till.<br />
              I searched until I knew I’d found<br />
              The perfect spot, a piece of ground<br />
              Which I would plow, my seed I’d sow<br />
              And for your sake a garden grow.<br />
              As I began this task for you<br />
              My dreams enlarged the vision grew.<br />
              I carefully designed and planned<br />
              A place to show the world your hand."
            </div>
            <div className="poem-author">— Eileen Hardeman</div>
          </section>

          {/* Garden Details Grid */}
          <div className="split-details">
            <article className="detail-block">
              <span className="section-kicker">Overview</span>
              <h2>Garden Details: What is it?</h2>
              <ul>
                {gardenData.details.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </article>

            <article className="detail-block">
              <span className="section-kicker">Botanical Diversity</span>
              <h2>Highlights & Rare Species</h2>
              <ul>
                {gardenData.highlights.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}