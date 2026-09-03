// src/App.jsx
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import AdmissionModal from './components/AdmissionModal';
import Hero from './components/Hero';
import QuickLinks from './components/Quicklinks';
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
import Rules from './components/Rules';
import Placement from './components/Placement';
import Syllabus from './components/Syllabus';
import EResources from './components/EResources';
import AdmissionRules from './components/AdmissionRules';
import NAAC from './components/NAAC';
import IQAC from './components/IQAC';
import Ranklist from './components/Ranklist';
import AICTE from './components/AICTE';
import Department from './components/Department';
import Clubs from './components/Clubs';
import Profile from './components/Profile';
import Contact from './components/Contact';
import NaacPeerPhotos from './components/naac-peer-photos';
import Library from './components/Library';
import Yakshagana from './components/Yakshagana';
import Sports from './components/Sports';
import Museum from './components/Museum';
import Canteen from './components/Canteen';



function AppLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const isScholarshipPage = location.pathname === '/scholarships';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
          <Route path="/college" element={
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
          <Route path="/rules" element={<Rules />} />
          <Route path="/placements" element={<Placement />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/e-resources" element={<EResources />} />
          <Route path="/admission-rules" element={<AdmissionRules />} />
          <Route path="/naac" element={<NAAC />} />
          <Route path="/iqac" element={<IQAC />} />
          <Route path="/ranklist" element={<Ranklist />} />
          <Route path="/aicte" element={<AICTE />} />
          <Route path="/departments" element={<Department />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/profiles/:profileSlug" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/naac-peer-photos" element={<NaacPeerPhotos />} />
          <Route path="/library" element={<Library />} />
          <Route path="/yakshagana" element={<Yakshagana />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/museum" element={<Museum />} />
          <Route path="/canteen" element={<Canteen />} />
        </Routes>
      </main>

      <AdmissionModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />

      <Footer openModal={() => setIsModalOpen(true)} />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppLayout />
    </HashRouter>
  );
}

export default App;
