import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Typography, Button } from '@mui/material';

interface Patient {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  peso: number;
  altura: number;
  uf: string;
}

interface PatientListProps {
  searchTerm: string;
}

const PatientList: React.FC<PatientListProps> = ({ searchTerm }) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [patientsPerPage] = useState<number>(10);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/pacientes');
        setPatients(response.data);
      } catch (error) {
        setError('Erro ao buscar pacientes. Tente novamente mais tarde.');
        console.error('Erro ao buscar pacientes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const filteredPatients = patients.filter(patient =>
    patient.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = filteredPatients.slice(indexOfFirstPatient, indexOfLastPatient);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <div>
      <Typography variant="h6" gutterBottom>Lista de Pacientes</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>Data de Nascimento</TableCell>
              <TableCell>Peso (kg)</TableCell>
              <TableCell>Altura (m)</TableCell>
              <TableCell>UF</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPatients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.nome}</TableCell>
                <TableCell>{patient.cpf}</TableCell>
                <TableCell>{new Date(patient.dataNascimento).toLocaleDateString()}</TableCell>
                <TableCell>{patient.peso}</TableCell>
                <TableCell>{patient.altura}</TableCell>
                <TableCell>{patient.uf}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        {Array.from({ length: Math.ceil(filteredPatients.length / patientsPerPage) }, (_, index) => (
          <Button
            key={index}
            onClick={() => paginate(index + 1)}
            variant={currentPage === index + 1 ? 'contained' : 'outlined'}
            color="primary"
            style={{ margin: '0 5px' }}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
