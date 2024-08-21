import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/pacientes">Lista de Pacientes</Link>
        </li>
        <li>
          <Link to="/cadastro">Cadastrar Paciente</Link>
        </li>
        <li>
          <Link to="/mapa">Mapa de Pacientes</Link>
        </li>
        <li>
          <Link to="/cadastro-enfermeiro">Cadastrar Enfermeiro</Link>
        </li>
        <li>
          <Link to="/cadastro-medico">Cadastrar Médico</Link>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
