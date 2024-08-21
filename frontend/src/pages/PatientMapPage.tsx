import React from 'react';
import PatientMap from '../components/PatientMap';
import '../styles/PatientMapPage.css';

const PatientMapPage: React.FC = () => {
  return (
    <div className="patient-map-page">
      <header className="header">
        <h1>Mapa de Pacientes</h1>
        <p>Visualize a distribuição dos pacientes cadastrados por estado.</p>
      </header>
      <PatientMap />
    </div>
  );
};

export default PatientMapPage;
