import React from 'react';
import './Card.css';
import Badge from '../../utils/img/cousera_certification.png';

const certificateData = [
  {
    title: "IBM Data Science Professional Certificate",
    imageUrl: Badge,
    badge: "Nov 2024"
  },
  {
    title: "IBM AI Engineering Professional Certificate",
    imageUrl: Badge,
    badge: "Dec 2024"
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
    title: "AWS Certified Solutions Architect - Associate",
    imageUrl: Badge,
    badge: "2025"
  },
  {
    title: "Certified Kubernetes Application Developer (CKAD)",
    imageUrl: Badge,
    badge: "2026"
  },
];

const Certification = () => {
  return (
    <div className="gallery">
      {certificateData.map((certificate, index) => (
        <div className="certificate" key={index}>
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
  );
};

export default Certification;
