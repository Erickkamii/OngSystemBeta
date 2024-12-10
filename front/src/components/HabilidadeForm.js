// src/components/HabilidadeForm.js
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const HabilidadeForm = ({ onSave, habilidadeId = null }) => {
  const [descricao, setDescricao] = useState('');
  const [idVoluntario, setIdVoluntario] = useState('');

  useEffect(() => {
    if (habilidadeId) {
      api.get(`/habilidades/${habilidadeId}`).then((response) => {
        const habilidade = response.data;
        setDescricao(habilidade.descricao);
        setIdVoluntario(habilidade.id_voluntario);
      });
    }
  }, [habilidadeId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const habilidade = { descricao, id_voluntario: idVoluntario };
    if (habilidadeId) {
      api.put(`/habilidades/${habilidadeId}`, habilidade).then(() => onSave());
    } else {
      api.post('/habilidades', habilidade).then(() => onSave());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição" required />
      <input type="text" value={idVoluntario} onChange={(e) => setIdVoluntario(e.target.value)} placeholder="ID do Voluntário" required />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default HabilidadeForm;
