import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/PatientForm.css";

const PatientForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    peso: "",
    altura: "",
    uf: "",
  });

  const [ufs, setUfs] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchUfs = async () => {
      const response = await axios.get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      );
      setUfs(response.data.map((uf: any) => uf.sigla));
    };

    fetchUfs();
  }, []);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.nome) newErrors.nome = "Nome é obrigatório";
    if (!formData.cpf) newErrors.cpf = "CPF é obrigatório";
    if (!formData.dataNascimento)
      newErrors.dataNascimento = "Data de Nascimento é obrigatória";
    if (!formData.uf) newErrors.uf = "UF é obrigatória";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
        await axios.post("https://api.fake.com/patients", formData);
        setSuccessMessage("Paciente cadastrado com sucesso!");
        setFormData({
          nome: "",
          cpf: "",
          dataNascimento: "",
          peso: "",
          altura: "",
          uf: "",
        });
        setErrors({});
      } catch (error) {
        console.error("Erro ao cadastrar paciente:", error);
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
        <label>Data de Nascimento:</label>
        <input
          type="date"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
        />
        {errors.dataNascimento && (
          <span className="error">{errors.dataNascimento}</span>
        )}
      </div>
      <div className="form-group">
        <label>Peso (kg):</label>
        <input
          type="number"
          name="peso"
          value={formData.peso}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Altura (m):</label>
        <input
          type="number"
          name="altura"
          value={formData.altura}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>UF:</label>
        <select name="uf" value={formData.uf} onChange={handleChange}>
          <option value="">Selecione o estado</option>
          {ufs.map((uf) => (
            <option key={uf} value={uf}>
              {uf}
            </option>
          ))}
        </select>
        {errors.uf && <span className="error">{errors.uf}</span>}
      </div>
      <button type="submit" className="submit-button">
        Cadastrar
      </button>
    </form>
  );
};

export default PatientForm;
