import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import "../styles/PatientMap.css"
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface Patient {
  id: string;
  nome: string;
  uf: string;
}

interface StateData {
  uf: string;
  count: number;
  coordinates: [number, number];
}

const PatientMap: React.FC = () => {
  const [stateData, setStateData] = useState<StateData[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/pacientes');
        const patients: Patient[] = response.data;

        const stateCounts: { [key: string]: number } = {};
        patients.forEach(patient => {
          stateCounts[patient.uf] = (stateCounts[patient.uf] || 0) + 1;
        });

        const stateCoordinates: { [key: string]: [number, number] } = {
          'AC': [-9.97499, -67.8243],
          'AL': [-9.66599, -35.735],
          'AM': [-3.11903, -60.0217],
          'AP': [0.038, -51.0504],
          'BA': [-12.9714, -38.5014],
          'CE': [-3.71722, -38.5434],
          'DF': [-15.7801, -47.9292],
          'ES': [-20.3155, -40.3128],
          'GO': [-16.6869, -49.2648],
          'MA': [-2.53073, -44.3068],
          'MG': [-19.9208, -43.9378],
          'MS': [-20.4697, -54.6201],
          'MT': [-15.601, -56.0974],
          'PA': [-1.45502, -48.5024],
          'PB': [-7.11509, -34.8641],
          'PE': [-8.04756, -34.877],
          'PI': [-5.08921, -42.8016],
          'PR': [-25.4284, -49.2733],
          'RJ': [-22.9068, -43.1729],
          'RN': [-5.79448, -35.211],
          'RO': [-8.76116, -63.9004],
          'RR': [2.82384, -60.6753],
          'RS': [-30.0346, -51.2177],
          'SC': [-27.5954, -48.548],
          'SE': [-10.9472, -37.0731],
          'SP': [-23.5505, -46.6333],
          'TO': [-10.184, -48.3336]
        };

        const data: StateData[] = Object.keys(stateCounts).map(uf => ({
          uf,
          count: stateCounts[uf],
          coordinates: stateCoordinates[uf]
        }));

        setStateData(data);
      } catch (error) {
        console.error('Erro ao buscar pacientes:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <MapContainer center={[-15.7801, -47.9292]} zoom={4} style={{ height: '500px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {stateData.map(state => (
        <Marker key={state.uf} position={state.coordinates} icon={L.divIcon({ html: `<div>${state.count}</div>`, className: 'custom-icon' })}>
          <Popup>
            {state.uf}: {state.count} pacientes
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default PatientMap;
