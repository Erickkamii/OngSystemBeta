import React, { useState } from 'react';
import { Button, Input, Form, Select, Table } from 'antd';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState({
    ong: false,
    voluntario: false,
    doacao: false,
    evento: false,
    habilidade: false,
    voluntarioHabilidade: false,
    usuario: false,
  });

  const [ongs, setOngs] = useState([]);
  const [voluntarios, setVoluntarios] = useState([]);
  const [doacoes, setDoacoes] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [habilidades, setHabilidades] = useState([]);
  const [voluntarioHabilidades, setVoluntarioHabilidades] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  // Funções de submit
  const handleSubmit = (type, values) => {
    switch (type) {
      case 'ong':
        setOngs([...ongs, values]);
        break;
      case 'voluntario':
        setVoluntarios([...voluntarios, values]);
        break;
      case 'doacao':
        setDoacoes([...doacoes, values]);
        break;
      case 'evento':
        setEventos([...eventos, values]);
        break;
      case 'habilidade':
        setHabilidades([...habilidades, values]);
        break;
      case 'voluntarioHabilidade':
        setVoluntarioHabilidades([...voluntarioHabilidades, values]);
        break;
      case 'usuario':
        setUsuarios([...usuarios, values]);
        break;
      default:
        break;
    }
    setShowForm((prev) => ({ ...prev, [type]: false }));
  };

  // Definindo as colunas das tabelas para listagem
  const ongColumns = [
    { title: 'Nome da ONG', dataIndex: 'nome', key: 'nome' },
    { title: 'CNPJ', dataIndex: 'cnpj', key: 'cnpj' },
    { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },
  ];

  const voluntarioColumns = [
    { title: 'Nome', dataIndex: 'nome', key: 'nome' },
    { title: 'CPF', dataIndex: 'cpf', key: 'cpf' },
  ];

  const doacaoColumns = [
    { title: 'Valor', dataIndex: 'valor', key: 'valor' },
    { title: 'Data da Doação', dataIndex: 'dataDoacao', key: 'dataDoacao' },
    { title: 'ONG', dataIndex: 'ong', key: 'ong' },
    { title: 'Voluntário', dataIndex: 'voluntario', key: 'voluntario' },
  ];

  const eventoColumns = [
    { title: 'Título', dataIndex: 'titulo', key: 'titulo' },
    { title: 'Data', dataIndex: 'data', key: 'data' },
    { title: 'Estado', dataIndex: 'estado', key: 'estado' },
    { title: 'Cidade', dataIndex: 'cidade', key: 'cidade' },
    { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },
    { title: 'Período', dataIndex: 'periodo', key: 'periodo' },
  ];

  const habilidadeColumns = [
    { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },
  ];

  const voluntarioHabilidadeColumns = [
    { title: 'Voluntário', dataIndex: 'voluntario', key: 'voluntario' },
    { title: 'Habilidade', dataIndex: 'habilidade', key: 'habilidade' },
  ];

  const usuarioColumns = [
    { title: 'Nome', dataIndex: 'nome', key: 'nome' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
  ];

  return (
    <div className="App">
      <h1>Sistema de ONGs e Voluntários</h1>
      <h2 classname="center-heading">Acompanhe nossos eventos e doações</h2>

      <div>
        {Object.keys(showForm).map((key) => (
          <Button
            key={key}
            onClick={() => setShowForm((prev) => ({ ...prev, [key]: !prev[key] }))}
            type="primary"
          >
            {showForm[key] ? `Cancelar Cadastro ${key}` : `Cadastrar ${key}`}
          </Button>
        ))}
      </div>

      {/* Formulários de Cadastro */}

      {showForm.usuario && (
        <Form layout="vertical" onFinish={(values) => handleSubmit('usuario', values)}>
          <h2>Cadastro de Usuário</h2>
          <Form.Item label="Nome" name="nome" rules={[{ required: true, message: 'Por favor, insira o nome!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Por favor, insira o email!' }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Cadastrar Usuário
          </Button>
        </Form>
      )}

      {showForm.ong && (
        <Form layout="vertical" onFinish={(values) => handleSubmit('ong', values)}>
          <h2>Cadastro de ONG</h2>
          <Form.Item label="CNPJ" name="cnpj" rules={[{ required: true, message: 'Por favor, insira o CNPJ!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Descrição" name="descricao" rules={[{ required: true, message: 'Por favor, insira a descrição!' }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Cadastrar ONG
          </Button>
        </Form>
      )}

      {showForm.voluntario && (
        <Form layout="vertical" onFinish={(values) => handleSubmit('voluntario', values)}>
          <h2>Cadastro de Voluntário</h2>
          <Form.Item label="CPF" name="cpf" rules={[{ required: true, message: 'Por favor, insira o CPF!' }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Cadastrar Voluntário
          </Button>
        </Form>
      )}

      {showForm.doacao && (
        <Form layout="vertical" onFinish={(values) => handleSubmit('doacao', values)}>
          <h2>Cadastro de Doação</h2>
          <Form.Item label="Valor" name="valor" rules={[{ required: true, message: 'Por favor, insira o valor da doação!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Data da Doação" name="dataDoacao" rules={[{ required: true, message: 'Por favor, insira a data da doação!' }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Cadastrar Doação
          </Button>
        </Form>
      )}

      {showForm.evento && (
        <Form layout="vertical" onFinish={(values) => handleSubmit('evento', values)}>
          <h2>Cadastro de Evento</h2>
          <Form.Item label="Título" name="titulo" rules={[{ required: true, message: 'Por favor, insira o título!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Data" name="data" rules={[{ required: true, message: 'Por favor, insira a data!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Estado" name="estado" rules={[{ required: true, message: 'Por favor, insira o estado!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Cidade" name="cidade" rules={[{ required: true, message: 'Por favor, insira a cidade!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Descrição" name="descricao" rules={[{ required: true, message: 'Por favor, insira a descrição!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Período" name="periodo" rules={[{ required: true, message: 'Por favor, insira o período!' }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Cadastrar Evento
          </Button>
        </Form>
      )}

      {showForm.habilidade && (
        <Form layout="vertical" onFinish={(values) => handleSubmit('habilidade', values)}>
          <h2>Cadastro de Habilidade</h2>
          <Form.Item label="Descrição" name="descricao" rules={[{ required: true, message: 'Por favor, insira a descrição!' }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Cadastrar Habilidade
          </Button>
        </Form>
      )}

      {showForm.voluntarioHabilidade && (
        <Form layout="vertical" onFinish={(values) => handleSubmit('voluntarioHabilidade', values)}>
          <h2>Cadastro de Voluntário-Habilidade</h2>
          <Form.Item label="Voluntário" name="voluntario" rules={[{ required: true, message: 'Por favor, selecione o voluntário!' }]}>
            <Select>
              {voluntarios.map((voluntario) => (
                <Select.Option key={voluntario.cpf} value={voluntario.cpf}>
                  {voluntario.nome}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Habilidade" name="habilidade" rules={[{ required: true, message: 'Por favor, selecione a habilidade!' }]}>
            <Select>
              {habilidades.map((habilidade) => (
                <Select.Option key={habilidade.descricao} value={habilidade.descricao}>
                  {habilidade.descricao}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Cadastrar Voluntário-Habilidade
          </Button>
        </Form>
      )}

      {/* Listagem dos dados */}
      <h2>Listar Dados</h2>
      <div>
        <h3>ONGs</h3>
        <Table dataSource={ongs} columns={ongColumns} rowKey="cnpj" />

        <h3>Voluntários</h3>
        <Table dataSource={voluntarios} columns={voluntarioColumns} rowKey="cpf" />

        <h3>Doações</h3>
        <Table dataSource={doacoes} columns={doacaoColumns} rowKey="dataDoacao" />

        <h3>Eventos</h3>
        <Table dataSource={eventos} columns={eventoColumns} rowKey="data" />

        <h3>Habilidades</h3>
        <Table dataSource={habilidades} columns={habilidadeColumns} rowKey="descricao" />

        <h3>Voluntário-Habilidade</h3>
        <Table dataSource={voluntarioHabilidades} columns={voluntarioHabilidadeColumns} rowKey="voluntario" />

        <h3>Usuários</h3>
        <Table dataSource={usuarios} columns={usuarioColumns} rowKey="email" />
      </div>
    </div>
  );
}

export default App;
