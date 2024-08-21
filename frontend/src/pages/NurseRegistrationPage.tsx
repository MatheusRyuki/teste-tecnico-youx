import React from "react";
import NurseForm from "../components/NurseForm";
import "../styles/NurseRegistrationPage.css";

const NurseRegistrationPage: React.FC = () => {
  return (
    <div className="registration-page">
      <h1>Cadastro de Enfermeiros</h1>
      <p>
        Preencha os dados abaixo para cadastrar um novo enfermeiro na clínica.
      </p>
      <NurseForm />
    </div>
  );
};

export default NurseRegistrationPage;
