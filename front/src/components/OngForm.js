// src/components/OngForm.js
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const OngForm = ({ onSave, ongId = null }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    if (ongId) {
      api.get(`/ongs/${ongId}`).then((response) => {
        const ong = response.data;
        setNome(ong.nome);
        setEmail(ong.email);
        setTelefone(ong.telefone);
        setEndereco(ong.endereco);
        setCnpj(ong.cnpj);
        setDescricao(ong.descricao);
      });
    }
  }, [ongId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ong = { nome, email, telefone, endereco, cnpj, descricao };
    if (ongId) {
      api.put(`/ongs/${ongId}`, ong).then(() => onSave());
    } else {
      api.post('/ongs', ong).then(() => onSave());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone" required />
      <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} placeholder="Endereço" required />
      <input type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} placeholder="CNPJ" required />
      <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição" required />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default OngForm;
