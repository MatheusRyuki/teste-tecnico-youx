import React from "react";
import PatientForm from "../components/PatientForm";
import "../styles/PatientRegistrationPage.css";

const PatientRegistrationPage: React.FC = () => {
  return (
    <div className="registration-page">
      <h1>Cadastro de Pacientes</h1>
      <p>
        Preencha os dados abaixo para cadastrar um novo paciente na clínica.
      </p>
      <PatientForm />
    </div>
  );
};

export default PatientRegistrationPage;
