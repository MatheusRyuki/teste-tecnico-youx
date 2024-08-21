import React from 'react';
import PatientMap from '../components/PatientMap';
import '../styles/PatientMapPage.css';

const PatientMapPage: React.FC = () => {
  return (
    <div className="patient-map-page">
      <h1>Mapa de Pacientes</h1>
      <PatientMap />
    </div>
  );
};

export default PatientMapPage;
