// src/components/VoluntarioForm.js
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const VoluntarioForm = ({ onSave, voluntarioId = null }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cpf, setCpf] = useState('');

  useEffect(() => {
    if (voluntarioId) {
      api.get(`/voluntarios/${voluntarioId}`).then((response) => {
        const voluntario = response.data;
        setNome(voluntario.nome);
        setEmail(voluntario.email);
        setTelefone(voluntario.telefone);
        setEndereco(voluntario.endereco);
        setCpf(voluntario.cpf);
      });
    }
  }, [voluntarioId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const voluntario = { nome, email, telefone, endereco, cpf };
    if (voluntarioId) {
      api.put(`/voluntarios/${voluntarioId}`, voluntario).then(() => onSave());
    } else {
      api.post('/voluntarios', voluntario).then(() => onSave());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone" required />
      <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} placeholder="Endereço" required />
      <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF" required />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default VoluntarioForm;
