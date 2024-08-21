import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container, Typography } from '@mui/material';
import PatientList from '../components/PatientList';

const PatientListPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddPatient = () => {
    navigate('/cadastro');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Bem-vindo(a) à Clínica</Typography>
      <Typography variant="body1" gutterBottom>Gerencie os pacientes cadastrados ou adicione novos pacientes.</Typography>
      <Button variant="contained" color="primary" onClick={handleAddPatient} style={{ marginBottom: '20px' }}>
        Cadastrar Novo Paciente
      </Button>
      <TextField
        label="Buscar paciente..."
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <PatientList searchTerm={searchTerm} />
    </Container>
  );
};

export default PatientListPage;
