import React, { useState } from "react";
import axios from "axios";

const DoctorForm: React.FC = () => {
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
        await axios.post("http://localhost:8080/api/medicos", formData);
        setSuccessMessage("Médico cadastrado com sucesso!");
        setFormData({
          nome: "",
          cpf: "",
          senha: "",
        });
        setErrors({});
      } catch (error) {
        console.error("Erro ao cadastrar médico:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {successMessage && <div>{successMessage}</div>}
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
        {errors.nome && <span>{errors.nome}</span>}
      </div>
      <div>
        <label>CPF:</label>
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
        />
        {errors.cpf && <span>{errors.cpf}</span>}
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
        />
        {errors.senha && <span>{errors.senha}</span>}
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default DoctorForm;
