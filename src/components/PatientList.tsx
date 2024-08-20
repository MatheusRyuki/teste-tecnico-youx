import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Patient {
  id: number;
  name: string;
  age: number;
}

const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('https://api.fake.com/patients');
        setPatients(response.data);
      } catch (error) {
        // Tratar erros de API
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Lista de Pacientes</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.name} - {patient.age} anos</li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
