import React, { useState } from "react";
import axios from "axios";

const PatientForm: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState<{ name?: string; age?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; age?: string } = {};
    if (!name) newErrors.name = "Nome é obrigatório";
    if (!age) newErrors.age = "Idade é obrigatória";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        await axios.post("https://api.fake.com/patients", { name, age });
        // Limpar o formulário ou mostrar uma mensagem de sucesso
      } catch (error) {
        // Tratar erros de API
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Idade:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {errors.age && <span>{errors.age}</span>}
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default PatientForm;
