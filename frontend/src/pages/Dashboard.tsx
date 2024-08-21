import React from "react";
import { Link } from "react-router-dom";
import "../styles/DashboardPage.css";

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>Bem-vindo(a) à Clínica</h1>
      <div className="dashboard-links">
        <Link to="/pacientes" className="dashboard-link">
          Lista de Pacientes
        </Link>
        <Link to="/cadastro" className="dashboard-link">
          Cadastrar Paciente
        </Link>
        <Link to="/mapa" className="dashboard-link">
          Mapa de Pacientes
        </Link>
        <Link to="/cadastro-enfermeiro" className="dashboard-link">
          Cadastrar Enfermeiro
        </Link>
        <Link to="/cadastro-medico" className="dashboard-link">
          Cadastrar Médico
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
