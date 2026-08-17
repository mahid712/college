import React, { useState, useEffect } from 'react';
import '../scss/ImageGallery.scss';

const TOTAL_IMAGES = 119;

export default function ImageGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  // Generate image data list
  const images = Array.from({ length: TOTAL_IMAGES }, (_, i) => {
    const index = i + 1;
    return {
      id: index,
      // Use BASE_URL so it automatically resolves to /college/pics/IMG_X.png on GitHub Pages
      src: `${import.meta.env.BASE_URL}pics/IMG_${index}.png`,
      alt: `Image ${index} of ${TOTAL_IMAGES}`
    };
  });

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev <= 1 ? TOTAL_IMAGES : prev - 1));
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev >= TOTAL_IMAGES ? 1 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="page-wrapper">
      {/* Navbar and Footer are rendered globally in App.jsx */}
      <main>
        {/* Hero Section */}
        <section className="inner-hero gallery-hero">
          <div className="hero-content">
            <h1>Image Gallery</h1>
            <p className="red-text">A visual journey through the campus, events, and cultural heritage of MGM.</p>
            <div className="breadcrumb">
              <a href="/">Home</a> / Image Gallery
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="container">
            <h2 className="section-title">Campus & Events</h2>
            <div className="image-gallery-grid" id="imageGalleryGrid">
              {images.map((img) => (
                <div
                  key={img.id}
                  className="gallery-item"
                  data-index={img.id}
                  onClick={() => openModal(img.id)}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {isOpen && (
        <div id="imageModal" className="modal active" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <a className="prev" onClick={prevImage}>&#10094;</a>
          <a className="next" onClick={nextImage}>&#10095;</a>

         <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              className="modal-image"
              id="modalImage"
              src={`${import.meta.env.BASE_URL}pics/IMG_${currentIndex}.png`}
              alt={`Image ${currentIndex}`}
            />
            <div id="caption">Image {currentIndex} of {TOTAL_IMAGES}</div>
          </div>
        </div>
      )}
    </div>
  );
}