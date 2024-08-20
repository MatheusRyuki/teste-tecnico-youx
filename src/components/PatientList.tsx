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

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('https://api.fake.com/patients');
        setPatients(response.data);
      } catch (error) {
        console.error('Erro ao buscar pacientes:', error);
      }
    };

    fetchPatients();
  }, []);

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
              <td>{patient.dataNascimento}</td>
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
