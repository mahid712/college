// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import Footer from './components/Footer';
import Academics from './components/Academics';
import Research from './components/Research';
import CampusLife from './components/CampusLife';
import Vision from './components/Vision';
import Principal from './components/Principal';
import Management from './components/Management';
import History from './components/History';
import ImageGallery from './components/ImageGallery';
import Scholarship from './components/Scholarship';

function AppLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const isScholarshipPage = location.pathname === '/scholarships';

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Render global Navbar ONLY when not on the scholarship page */}
      {!isScholarshipPage && (
        <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
      
      <main style={{ flex: '1' }}>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <QuickLinks openModal={() => setIsModalOpen(true)} />
            </>
          } />
          <Route path="/academics" element={<Academics onOpenModal={() => setIsModalOpen(true)} />} />
          <Route path="/research" element={<Research />} />
          <Route path="/campus" element={<CampusLife />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/management" element={<Management />} />
          <Route path="/history" element={<History />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/scholarships" element={<Scholarship />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;