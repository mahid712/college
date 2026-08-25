import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../scss/ImageGallery.scss';

// Dynamically glob all PNG images in the folder
const naacAssets = import.meta.glob('../assets/naac/IMG_*.png', {
  eager: true,
  import: 'default',
  query: '?url',
});

// Automatically calculate the total based on how many matched files were found
const imageUrls = Object.values(naacAssets);
const TOTAL_IMAGES = imageUrls.length;

export default function NaacPeerPhotos() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  const images = imageUrls.map((src, i) => {
    const index = i + 1;
    return {
      id: index,
      src: src,
      alt: `NAAC Peer Team Visit Image ${index} of ${TOTAL_IMAGES}`
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
      <main>
        {/* Hero Section */}
        <section className="inner-hero gallery-hero">
          <div className="hero-content">
            <h1>NAAC Peer Team Visit Photos</h1>
            <p className="red-text">Moments captured during the NAAC Peer Team inspection and campus visit.</p>
            <div className="breadcrumb">
              <Link to="/">Home</Link> / <Link to="/research">Research & Quality</Link> / <Link to="/naac">NAAC Accreditation</Link> / Peer Team Photos
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="container">
            <h2 className="section-title">Campus Visit Gallery</h2>
            <div className="image-gallery-grid" id="imageGalleryGrid">
              {images.length > 0 ? (
                images.map((img) => (
                  <div
                    key={img.id}
                    className="gallery-item"
                    data-index={img.id}
                    onClick={() => openModal(img.id)}
                  >
                    <img src={img.src} alt={img.alt} loading="lazy" />
                  </div>
                ))
              ) : (
                <p style={{ textAlign: 'center', width: '100%', gridColumn: '1 / -1' }}>
                  No images found in the folder.
                </p>
              )}
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
              src={imageUrls[currentIndex - 1]}
              alt={`Image ${currentIndex}`}
            />
            <div id="caption">Image {currentIndex} of {TOTAL_IMAGES}</div>
          </div>
        </div>
      )}
    </div>
  );
}