// src/components/AdmissionModal.jsx
import React from 'react';
import '../scss/AdmissionModal.scss';

const AdmissionModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>&times;</button>
        
        <h2>Important Admission Instructions</h2>
        <hr className="title-divider" />
        
        <div className="modal-body">
          <div className="instruction-box">
            <h3>Please Read Carefully Before Proceeding:</h3>
          </div>
          
          <p className="intro-text">
            Admission to all programs at MGM Udupi is provisional and subject to verification of documents and compliance with all institutional rules.
          </p>
          
          <h4>General Rules:</h4>
          <ul>
            <li>The College strictly follows the academic calendar. Ensure all deadlines for applications and fee payments are met.</li>
            <li>Students must adhere to the prescribed dress code/uniform.</li>
            <li>Use and possession of mobile phones on campus is strictly prohibited. Confiscated devices will be returned only at the end of the academic year.</li>
            <li>Ragging is strictly forbidden. Anyone found indulging will be summarily dismissed.</li>
            <li>Fees once paid will not be refunded.</li>
          </ul>
          
          <p className="footer-text">
            Proceeding to the admission portal implies acceptance of all college rules, regulations, and fee policies.
          </p>
        </div>
        
        <div className="modal-footer">
          <button className="btn-proceed" onClick={() => window.location.href = '#portal'}>PROCEED TO PORTAL</button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionModal;