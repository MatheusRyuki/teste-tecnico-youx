import React from 'react';
import PatientList from '../components/PatientList';

const PatientListPage: React.FC = () => {
  return (
    <div>
      <h1>Lista de Pacientes</h1>
      <PatientList />
    </div>
  );
};

export default PatientListPage;
