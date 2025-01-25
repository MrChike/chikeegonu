import React, { useState } from 'react';
import './Card.css';
import Badge from '../../utils/img/cousera_certification.png'; // Update this with actual badge path
import IBMDataAnalysisCertificate from '../../utils/img/Data_Analysis_Certificate.jpg'; // Update this with actual badge path
import IBMMachineCertificate from '../../utils/img/Machine_Learning_Certification.png'; // Update this with actual badge path
import DataScienceProfessionalCertificate from '../../utils/img/DataScienceProfessionalCertificate.png'; // Update this with actual badge path
import StatisticsCertificate from '../../utils/img/StatisticsCertificate.png'; // Update this with actual badge path
import TensorflowCertificate from '../../utils/img/TensorflowCertificate.png'; // Update this with actual badge path
import AdvancedReactCertificate from '../../utils/img/AdvancedReactCertificate.png'; // Update this with actual badge path
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
    title: "Data Analysis with Python",
    imageUrl: IBMDataAnalysisCertificate,
    badge: "Jan 2025"
  },
  {
    title: "Machine Learning with Python",
    imageUrl: IBMMachineCertificate,
    badge: "Jan 2025"
  },
  {
    title: "IBM Data Science Professional Certificate",
    imageUrl: DataScienceProfessionalCertificate,
    badge: "Jan 2025"
  },
  {
    title: "Statistics with Python Specialization",
    imageUrl: StatisticsCertificate,
    badge: "Jan 2025"
  },
  {
    title: "Deep Learning with Keras and Tensorflow",
    imageUrl: TensorflowCertificate,
    badge: "Jan 2025"
  },
  {
    title: "Advanced React",
    imageUrl: AdvancedReactCertificate,
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
