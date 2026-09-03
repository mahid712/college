import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Museum.scss';

// Dynamically import museum slider images from src/assets/museum/
// Matches patterns like M4.jpg, m4.jpg, M5.png, etc.
const museumAssets = import.meta.glob('../assets/museum/M*.*', {
  eager: true,
  import: 'default',
  query: '?url',
});

// Extract image URLs to support seamless infinite loop marquee animation
const sliderImages = Object.values(museumAssets);

// Museum content structured as objects for a clean, data-driven architecture
const museumData = {
  introduction: [
    "A not too small number of successful professionals and scientists recall their passion and curiosity to study was sparked by a visit to a museum. Thus the museum became the kernel from which the learning grew. These sui generis crystallizing experiences motivate the visitors to learn and embark on a journey of lifelong learning, make their life more meaningful. Come, visit our two museums to get the sparks of imagination flying, touch the sky and get the feel of what is next for you."
  ],
  availableMuseumsText: "The different museums available in MGM collge are Govind Pai Archaeological Museum, Well equipped Botany Museum, Yakshagana Museum in Yakshagana Kendra.",
  botanicalMuseum: {
    title: "Botanical Museum",
    details: [
      "One of the significant features of this Museum is the orderly arrangement of the vast diversity of plants, from the primitive algae to the advanced Angiosperms (flowering plants).",
      "The Botany Museum is housed in the Vijnana Mandira Wing of the college.",
      "The Museum has Botanical Specimens orderly arranged in about 30 large cupboards.",
      "Charts and models adorn the Museum.",
      "Specimens are collected, yearly, during collection trips arranged for the purpose."
    ],
    highlights: [
      "More than 150 species of Algae",
      "More than 100 species of Fungi",
      "About 40 species of Bryophytes",
      "About 120 species of Pteridophytes",
      "About 41 species of Gymnosperms",
      "About 150 species of Angiosperm",
      "About 40 plants pathological specimen",
      "The Museum has 5 to 6 species of insectivorous plants",
      "Huge cones of cycas plants are being preserved here",
      "A large sized mushroom, the size of a small umbrella, is also preserved",
      "About 20 to 25 specimens of plants with freaks are being preserved",
      "There are 4 cupboards containing the mosses of South India",
      "The algae collection from the Lakshadweep Island are an asset to the Museum",
      "Rare charts of fossil plants adorn the Museum",
      "There is a collection of ferns of Ooty"
    ]
  },
  zoologicalMuseum: {
    title: "Zoological Museum",
    details: [
      "It is located in the Vijnana Mandira wing of the college.",
      "It has all its specimens arranged according to the Phyla they belong to.",
      "Besides, the museum has models, dissected specimens, charts and other teaching aids."
    ],
    highlights: [
      "The Museum has specimens of 1027 species belonging to 742 genera arranged in about 30 cupboards.",
      "Baleen Whale Skeleton: The prime attraction of the Museum is the huge skeleton of the Baleen Whale. The baleen Whale is one of the largest living creatures on the earth, weighing about 130 tons when alive. The skeleton weighs about 7.5 tons, with its skull alone weighing about 2.5 tons. The vertebral column of the whale is 13 metres in length.",
      "Another remarkable specimen is the long snout of saw fish.",
      "The Museum has excellent specimens of aquatic creatures like long-fish, jelly-fish, octopus etc.",
      "The Museum has a huge shell of a Turtle.",
      "Besides, the Museum houses specimens of fishes found along the West Coast of India.",
      "The Specimen of an Otter and a Pangolin are noticeable in the Museum.",
      "There is a good collection of sea shells in two cupboards.",
      "There is also a wide collection of beautiful corals.",
      "A garland made up entirely of cocoons of silk worms has been preserved in the Museum.",
      "The Museum has preserved embryos of porcupine, cow, man, rabbit and deer.",
      "The developmental stages of the Silk Moth, the honey bee and chicks have also been preserved.",
      "The Museum has a very good osteology section. There are skeletons of man, black buck and other animals. There are also skulls of man, cat, dog, crocodile, monkey, tortoise, tiger etc.",
      "Many animal fossils have models like digestive system, ear, eye etc.",
      "The Models of dinosaurs were a major attraction when the museum was opened to public."
    ]
  }
};

export default function Museum() {
  return (
    <div className="page-wrapper museum-page">
      <main>
        {/* Hero Section */}
        <section className="inner-hero">
          <div className="hero-content">
            <h1>Science Museums</h1>
            <p className="red-text">The kernel from which lifelong learning grows.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/campus">Campus & Culture</Link> / Museums
            </div>
          </div>
        </section>

        {/* Moving Image Section */}
        <div className="slider-wrapper">
          <div className="slider">
            {sliderImages.length > 0 ? (
              // Duplicate array to achieve seamless infinite marquee loop
              [...sliderImages, ...sliderImages].map((src, index) => (
                <img 
                  key={index} 
                  src={src} 
                  alt={`MGM Museum ${index + 1}`} 
                  loading="lazy" 
                />
              ))
            ) : (
              <p className="no-images" style={{ textAlign: 'center', width: '100%', padding: '20px' }}>
                Loading museum images...
              </p>
            )}
          </div>
        </div>

        {/* Content Section */}
        <section className="container content-section">
          <div className="museum-content-block">

            <h2>Introduction</h2>
            {museumData.introduction.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
            <p className="highlight-note">
              <strong>{museumData.availableMuseumsText}</strong>
            </p>

            <hr className="section-divider" />

            {/* Botanical Museum */}
            <h2>{museumData.botanicalMuseum.title}</h2>
            <h3>Details</h3>
            <ul className="info-list">
              {museumData.botanicalMuseum.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>

            <h3>Highlights</h3>
            <ul className="info-list highlight-list">
              {museumData.botanicalMuseum.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>

            <hr className="section-divider" />

            {/* Zoological Museum */}
            <h2>{museumData.zoologicalMuseum.title}</h2>
            <h3>Details</h3>
            <ul className="info-list">
              {museumData.zoologicalMuseum.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>

            <h3>Highlights</h3>
            <ul className="info-list highlight-list">
              {museumData.zoologicalMuseum.highlights.map((highlight, index) => {
                if (highlight.startsWith("Baleen Whale Skeleton:")) {
                  const parts = highlight.split("Baleen Whale Skeleton:");
                  return (
                    <li key={index}>
                      <strong>Baleen Whale Skeleton:</strong>{parts[1]}
                    </li>
                  );
                }
                return <li key={index}>{highlight}</li>;
              })}
            </ul>

          </div>
        </section>
      </main>
    </div>
  );
}