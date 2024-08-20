import React from 'react';
import PatientForm from '../components/PatientForm';

const PatientRegistrationPage: React.FC = () => {
  return (
    <div>
      <h1>Cadastro de Pacientes</h1>
      <PatientForm />
    </div>
  );
};

export default PatientRegistrationPage;
