// src/components/EventoForm.js
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const EventoForm = ({ onSave, eventoId = null }) => {
  const [titulo, setTitulo] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [idOng, setIdOng] = useState('');
  const [idVoluntario, setIdVoluntario] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    if (eventoId) {
      api.get(`/eventos/${eventoId}`).then((response) => {
        const evento = response.data;
        setTitulo(evento.titulo);
        setEstado(evento.estado);
        setCidade(evento.cidade);
        setDescricao(evento.descricao);
        setPeriodo(evento.periodo);
        setIdOng(evento.id_ongs);
        setIdVoluntario(evento.id_voluntarios);
        setData(evento.data);
      });
    }
  }, [eventoId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const evento = { titulo, estado, cidade, descricao, periodo, id_ongs: idOng, id_voluntarios: idVoluntario, data };
    if (eventoId) {
      api.put(`/eventos/${eventoId}`, evento).then(() => onSave());
    } else {
      api.post('/eventos', evento).then(() => onSave());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" required />
      <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} placeholder="Estado" required />
      <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} placeholder="Cidade" required />
      <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição" required />
      <input type="number" value={periodo} onChange={(e) => setPeriodo(e.target.value)} placeholder="Período" required />
      <input type="text" value={idOng} onChange={(e) => setIdOng(e.target.value)} placeholder="ID da ONG" required />
      <input type="text" value={idVoluntario} onChange={(e) => setIdVoluntario(e.target.value)} placeholder="ID do Voluntário" required />
      <input type="date" value={data} onChange={(e) => setData(e.target.value)} placeholder="Data" required />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default EventoForm;
