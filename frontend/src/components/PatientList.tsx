import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Patient {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  peso: number;
  altura: number;
  uf: string;
}

const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Lista de Pacientes</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Data de Nascimento</th>
            <th>Peso (kg)</th>
            <th>Altura (m)</th>
            <th>UF</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.nome}</td>
              <td>{patient.cpf}</td>
              <td>{new Date(patient.dataNascimento).toLocaleDateString()}</td>
              <td>{patient.peso}</td>
              <td>{patient.altura}</td>
              <td>{patient.uf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
