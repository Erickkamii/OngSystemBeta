// src/components/DoacaoForm.js
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const DoacaoForm = ({ onSave, doacaoId = null }) => {
  const [valor, setValor] = useState('');
  const [dataDoacao, setDataDoacao] = useState('');
  const [ongId, setOngId] = useState('');
  const [voluntarioId, setVoluntarioId] = useState('');

  useEffect(() => {
    if (doacaoId) {
      api.get(`/doacoes/${doacaoId}`).then((response) => {
        const doacao = response.data;
        setValor(doacao.valor);
        setDataDoacao(doacao.dataDoacao);
        setOngId(doacao.id_ongs);
        setVoluntarioId(doacao.id_voluntarios);
      });
    }
  }, [doacaoId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const doacao = { valor, dataDoacao, id_ongs: ongId, id_voluntarios: voluntarioId };
    if (doacaoId) {
      api.put(`/doacoes/${doacaoId}`, doacao).then(() => onSave());
    } else {
      api.post('/doacoes', doacao).then(() => onSave());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Valor" required />
      <input type="date" value={dataDoacao} onChange={(e) => setDataDoacao(e.target.value)} placeholder="Data da Doação" required />
      <input type="text" value={ongId} onChange={(e) => setOngId(e.target.value)} placeholder="ID da ONG" required />
      <input type="text" value={voluntarioId} onChange={(e) => setVoluntarioId(e.target.value)} placeholder="ID do Voluntário" required />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default DoacaoForm;
