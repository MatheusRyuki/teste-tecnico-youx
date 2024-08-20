import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

interface Patient {
  id: number;
  name: string;
  age: number;
  latitude: number;
  longitude: number;
}

const PatientMap: React.FC = () => {
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
    <MapContainer center={[-15.7801, -47.9292]} zoom={4} style={{ height: '500px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {patients.map((patient) => (
        <Marker key={patient.id} position={[patient.latitude, patient.longitude]}>
          <Popup>
            {patient.name} - {patient.age} anos
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default PatientMap;
