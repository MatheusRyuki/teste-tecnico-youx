import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/pacientes" onClick={toggleMenu}>Lista de Pacientes</Link>
        </li>
        <li>
          <Link to="/cadastro" onClick={toggleMenu}>Cadastrar Paciente</Link>
        </li>
        <li>
          <Link to="/mapa" onClick={toggleMenu}>Mapa de Pacientes</Link>
        </li>
        <li>
          <Link to="/cadastro-enfermeiro" onClick={toggleMenu}>Cadastrar Enfermeiro</Link>
        </li>
        <li>
          <Link to="/cadastro-medico" onClick={toggleMenu}>Cadastrar Médico</Link>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
