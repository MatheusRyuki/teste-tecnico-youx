import React from 'react';
import { useNavigate } from 'react-router-dom';
import PatientList from '../components/PatientList';

const PatientListPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAddPatient = () => {
    navigate('/cadastro');
  };

  return (
    <div>
      <h1>Bem-vindo(a) à Clínica</h1>
      <p>Gerencie os pacientes cadastrados ou adicione novos pacientes.</p>
      <button onClick={handleAddPatient}>Cadastrar Novo Paciente</button>
      <PatientList />
    </div>
  );
};

export default PatientListPage;
