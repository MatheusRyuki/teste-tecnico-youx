import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaList, FaMapMarkedAlt, FaUserMd, FaUserNurse, FaSignOutAlt } from 'react-icons/fa';
import Logout from './Logout';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <Link to="/" className="navbar-brand">Clínica</Link>
      </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/pacientes" onClick={toggleMenu}>
            <FaList /> Lista de Pacientes
          </Link>
        </li>
        <li>
          <Link to="/cadastro" onClick={toggleMenu}>
            <FaUserPlus /> Cadastrar Paciente
          </Link>
        </li>
        <li>
          <Link to="/mapa" onClick={toggleMenu}>
            <FaMapMarkedAlt /> Mapa de Pacientes
          </Link>
        </li>
        <li>
          <Link to="/cadastro-enfermeiro" onClick={toggleMenu}>
            <FaUserNurse /> Cadastrar Enfermeiro
          </Link>
        </li>
        <li>
          <Link to="/cadastro-medico" onClick={toggleMenu}>
            <FaUserMd /> Cadastrar Médico
          </Link>
        </li>
        <li>
          <button className="logout-button" onClick={toggleMenu}>
            <FaSignOutAlt /> <Logout />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
