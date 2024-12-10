// src/App.js
import React, { useState, useEffect } from 'react';
import api from './services/api';
import OngForm from './components/OngForm';
import VoluntarioForm from './components/VoluntarioForm';

const App = () => {
  const [ongs, setOngs] = useState([]);
  const [voluntarios, setVoluntarios] = useState([]);
  const [showForm, setShowForm] = useState(null);

  useEffect(() => {
    api.get('/ongs').then((response) => setOngs(response.data));
    api.get('/voluntarios').then((response) => setVoluntarios(response.data));
  }, []);

  const handleSave = () => {
    api.get('/ongs').then((response) => setOngs(response.data));
    api.get('/voluntarios').then((response) => setVoluntarios(response.data));
    setShowForm(null);
  };

  return (
    <div>
      <h1>CRUD de ONG e Voluntário</h1>
      <button onClick={() => setShowForm('ong')}>Adicionar ONG</button>
      <button onClick={() => setShowForm('voluntario')}>Adicionar Voluntário</button>

      {showForm === 'ong' && <OngForm onSave={handleSave} />}
      {showForm === 'voluntario' && <VoluntarioForm onSave={handleSave} />}

      <h2>Lista de ONGs</h2>
      <ul>
        {ongs.map((ong) => (
          <li key={ong.id}>{ong.nome} - {ong.cnpj}</li>
        ))}
      </ul>

      <h2>Lista de Voluntários</h2>
      <ul>
        {voluntarios.map((voluntario) => (
          <li key={voluntario.id}>{voluntario.nome} - {voluntario.cpf}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
