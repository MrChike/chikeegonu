import React, { useState } from 'react';
import './Card.css';
import Badge from '../../utils/img/cousera_certification.png'; // Update this with actual badge path
import DBCert from '../../utils/img/database_cert.png'; // Update this with actual badge path
import PythonCert from '../../utils/img/PythonCertificate.png'; // Update this with actual badge path

const certificateData = [
  {
    title: "Python for Data Science, AI & Development",
    imageUrl: PythonCert,
    badge: "Dec 2024"
  },
  {
    title: "Databases and SQL for Data Science with Python",
    imageUrl: DBCert,
    badge: "Dec 2024"
  },
  {
    title: "IBM Data Science Professional Certificate",
    imageUrl: Badge,
    badge: "Dec 2024"
  },
  {
    title: "IBM AI Engineering Professional Certificate",
    imageUrl: Badge,
    badge: "Jan 2025"
  },
  {
    title: "Java SE 11 Developer",
    imageUrl: Badge,
    badge: "2025"
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    imageUrl: Badge,
    badge: "2025"
  },
  {
    title: "CPA – C++ Certified Associate Programmer ",
    imageUrl: Badge,
    badge: "2026"
  },
  {
    title: "Certified Kubernetes Application Developer (CKAD)",
    imageUrl: Badge,
    badge: "2026"
  },
];

const Certification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Handle clicking on the image to open the modal
  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <div>
      {/* Gallery */}
      <div className="gallery">
        {certificateData.map((certificate, index) => (
          <div className="certificate" key={index} onClick={() => openModal(certificate)}>
            <img src={certificate.imageUrl} alt={certificate.title} />
            <div className="certificate-content">
              <h3>{certificate.title}</h3>
              <div className="certificate-info">
                {certificate.badge && <span className="badge">{certificate.badge}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedCertificate && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img 
              src={selectedCertificate.imageUrl} 
              alt={selectedCertificate.title} 
              style={{ width: '100%' }} 
            />
            <div className="certificate-details">
              <h3>{selectedCertificate.title}</h3>
              <p style={{ BackgroundColor: "red" }}>{selectedCertificate.badge}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certification;
