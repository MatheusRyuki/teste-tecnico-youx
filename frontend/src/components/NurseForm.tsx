import React, { useState } from "react";
import axios from "axios";
import "../styles/PatientForm.css"; // Usando o mesmo arquivo de estilo

const NurseForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    senha: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.nome) newErrors.nome = "Nome é obrigatório";
    if (!formData.cpf) newErrors.cpf = "CPF é obrigatório";
    if (!formData.senha) newErrors.senha = "Senha é obrigatória";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        await axios.post("http://localhost:8080/api/enfermeiros", formData);
        setSuccessMessage("Enfermeiro cadastrado com sucesso!");
        setFormData({
          nome: "",
          cpf: "",
          senha: "",
        });
        setErrors({});
      } catch (error) {
        console.error("Erro ao cadastrar enfermeiro:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="patient-form">
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <div className="form-group">
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
        {errors.nome && <span className="error">{errors.nome}</span>}
      </div>
      <div className="form-group">
        <label>CPF:</label>
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
        />
        {errors.cpf && <span className="error">{errors.cpf}</span>}
      </div>
      <div className="form-group">
        <label>Senha:</label>
        <input
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
        />
        {errors.senha && <span className="error">{errors.senha}</span>}
      </div>
      <button type="submit" className="submit-button">
        Cadastrar
      </button>
    </form>
  );
};

export default NurseForm;
