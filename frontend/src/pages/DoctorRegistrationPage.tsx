import React from "react";
import DoctorForm from "../components/DoctorForm";
import "../styles/DoctorRegistrationPage.css";

const DoctorRegistrationPage: React.FC = () => {
  return (
    <div className="registration-page">
      <h1>Cadastro de Médicos</h1>
      <p>
        Preencha os dados abaixo para cadastrar um novo médico na clínica.
      </p>
      <DoctorForm />
    </div>
  );
};

export default DoctorRegistrationPage;
