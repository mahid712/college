import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import vanithaSource from '../assets/profiles/vanitha-maiya.html?raw';
import veeraSource from '../assets/profiles/veera-pinto.html?raw';
// Imported with the exact hyphenated filename from assets/profiles/
import VishwanathaPai from '../assets/profiles/vishwanatha-pai'; 
import principalImage from '../assets/mgm-pic/princi.png';
import vicePrincipalImage from '../assets/mgm-pic/vp.png';
import veeraImage from '../assets/mgm-pic/veera.png';
import '../scss/Profile.scss';

const profileData = {
  'vanitha-maiya': { 
    source: vanithaSource, 
    image: principalImage,
    name: 'Prof. Vanitha Maiya',
    role: 'Principal',
    email: 'principal@mgmudupi.ac.in',
    dept: 'Department of Computer Science',
    isNative: false
  },
  'veera-pinto': { 
    source: veeraSource, 
    image: veeraImage,
    name: 'Dr. Veera Pinto',
    role: 'Vice Principal',
    email: 'veera.pinto@mgmudupi.ac.in',
    dept: 'Department of English',
    isNative: false
  },
  'vishwanatha-pai': { 
    image: vicePrincipalImage,
    name: 'Dr. Vishwanatha Pai M.a',
    role: 'Vice Principal',
    email: 'vish_pai@yahoo.com',
    dept: 'Dept. of Commerce',
    isNative: true // Flag to render the native component instead of raw HTML
  },
};

function extractInnerContent(source) {
  if (!source) return '';
  const match = source.match(/<main class="content-area">([\s\S]*?)<\/main>/);
  const rawHtml = match ? match[1] : source;

  return rawHtml
    .replace(/\.\.\/department\.html/g, '/departments')
    .replace(/onclick="toggleItem\(this\)"/g, '')
    .replace(/<script[\s\S]*?<\/script>/g, '');
}

export default function Profile() {
  const { profileSlug } = useParams();
  const profile = profileData[profileSlug] || profileData['vishwanatha-pai'];
  
  // Memoize inner HTML only if it's not a native component
  const innerMarkup = useMemo(() => {
    return profile.isNative ? '' : extractInnerContent(profile.source);
  }, [profile]);

  // Accordion toggle behavior for raw HTML profiles
  useEffect(() => {
    if (profile.isNative) return;

    const timer = setTimeout(() => {
      const accordionItems = document.querySelectorAll('.faculty-profile-page .acc-item');
      const cleanups = [];

      accordionItems.forEach((item) => {
        const trigger = item.querySelector('.acc-trigger');
        const panel = item.querySelector('.acc-panel');
        if (!trigger || !panel) return;

        const toggle = (e) => {
          e.preventDefault();
          const isActive = item.classList.contains('is-active');

          accordionItems.forEach((otherItem) => {
            const otherPanel = otherItem.querySelector('.acc-panel');
            otherItem.classList.remove('is-active');
            if (otherPanel) otherPanel.style.maxHeight = null;
          });

          if (!isActive) {
            item.classList.add('is-active');
            panel.style.maxHeight = `${panel.scrollHeight}px`;
          }
        };

        trigger.addEventListener('click', toggle);
        cleanups.push(() => trigger.removeEventListener('click', toggle));
      });

      return () => cleanups.forEach((cleanup) => cleanup());
    }, 50);

    return () => clearTimeout(timer);
  }, [innerMarkup, profile.isNative]);

  return (
    <div className="faculty-profile-page">
      <section className="faculty-profile-hero">
        <div>
          <p className="eyebrow">Faculty portfolio</p>
          <h1>Academic Portfolio</h1>
          <p>Complete profile details and academic records</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/departments">Departments</Link> / Portfolio
          </div>
        </div>
      </section>

      <div className="page-layout">
        
        {/* Left Sidebar Card */}
        <aside className="profile-sidebar-card">
          <img src={profile.image} alt={profile.name} className="profile-img" />
          <h1>{profile.name}</h1>
          <span className="role-tag">{profile.role}</span>
          
          <div className="contact-box">
            <p><i className="fas fa-envelope"></i> {profile.email}</p>
            {profileSlug === 'vishwanatha-pai' && (
              <p><i className="fas fa-envelope"></i> m.vishwanath.pai@gmail.com</p>
            )}
            <p><i className="fas fa-university"></i> {profile.dept}</p>
            <p><i className="fas fa-phone"></i> +91 0820 2520359</p>
          </div>
        </aside>

        {/* Conditional Rendering: Native Component vs Raw HTML */}
        {profile.isNative ? (
          <VishwanathaPai />
        ) : (
          <main 
            className="content-area" 
            dangerouslySetInnerHTML={{ __html: innerMarkup }} 
          />
        )}

      </div>
    </div>
  );
}