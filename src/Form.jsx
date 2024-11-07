import React, { useState } from 'react';
import InputField from './InputField';

function Form({ onSubmit, setError }) {
  const [formData, setFormData] = useState({ input1: "", input2: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.input1.length < 3 || formData.input1.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta");
      onSubmit(null);
      return;
    }

    if (formData.input2.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      onSubmit(null);
      return;
    }

    setError("");
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        type="text"
        name="input1"
        placeholder="Ingresa tu nombre"
        value={formData.input1}
        onChange={handleChange}
      />
      <InputField
        type="text"
        name="input2"
        placeholder="Ingresa tu color favorito"
        value={formData.input2}
        onChange={handleChange}
      />
      <button type="submit" style={{ padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Enviar
      </button>
    </form>
  );
}

export default Form;
