import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Input, Modal, List, notification } from 'antd';
import 'antd/dist/antd.css';  // Importando o CSS do Ant Design
import './App.css';  // CSS customizado

const App = () => {
  const [formOng] = Form.useForm();
  const [formVoluntario] = Form.useForm();
  const [showOngForm, setShowOngForm] = useState(true);
  const [showVoluntarioForm, setShowVoluntarioForm] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [doacoes, setDoacoes] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [habilidades, setHabilidades] = useState([]);

  // Funções de envio de dados
  const handleSubmitOng = async (values) => {
    try {
      await axios.post('http://localhost:8080/api/ongs', values);
      notification.success({ message: 'Ong cadastrada com sucesso!' });
      formOng.resetFields();
    } catch (error) {
      console.error('Erro ao cadastrar ONG:', error);
      notification.error({ message: 'Erro ao cadastrar ONG' });
    }
  };

  const handleSubmitVoluntario = async (values) => {
    try {
      await axios.post('http://localhost:8080/api/voluntarios', values);
      notification.success({ message: 'Voluntário cadastrado com sucesso!' });
      formVoluntario.resetFields();
    } catch (error) {
      console.error('Erro ao cadastrar Voluntário:', error);
      notification.error({ message: 'Erro ao cadastrar Voluntário' });
    }
  };

  const fetchData = async (url, setState) => {
    try {
      const response = await axios.get(url);
      setState(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  // Funções para exibir as listas
  const showUsuarios = () => fetchData('http://localhost:8080/api/usuarios', setUsuarios);
  const showDoacoes = () => fetchData('http://localhost:8080/api/doacoes', setDoacoes);
  const showEventos = () => fetchData('http://localhost:8080/api/eventos', setEventos);
  const showHabilidades = () => fetchData('http://localhost:8080/api/habilidades', setHabilidades);

  return (
    <div className="App">
      <h1>Cadastrar Novo Registro</h1>
      
      {/* Formulário de Cadastro de ONG */}
      {showOngForm && (
        <Form form={formOng} onFinish={handleSubmitOng} layout="vertical">
          <h2>Cadastrar ONG</h2>
          <Form.Item label="CNPJ" name="cnpj" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Descrição" name="descricao" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">Cadastrar ONG</Button>
        </Form>
      )}

      {/* Formulário de Cadastro de Voluntário */}
      {showVoluntarioForm && (
        <Form form={formVoluntario} onFinish={handleSubmitVoluntario} layout="vertical">
          <h2>Cadastrar Voluntário</h2>
          <Form.Item label="CPF" name="cpf" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">Cadastrar Voluntário</Button>
        </Form>
      )}

      {/* Botões para exibir as listas */}
      <div>
        <Button onClick={showUsuarios}>Listar Usuários</Button>
        <Button onClick={showDoacoes}>Listar Doações</Button>
        <Button onClick={showEventos}>Listar Eventos</Button>
        <Button onClick={showHabilidades}>Listar Habilidades</Button>
      </div>

      {/* Modal para exibir a lista de Usuários */}
      <Modal
        title="Usuários Cadastrados"
        visible={usuarios.length > 0}
        onCancel={() => setUsuarios([])}
        footer={null}
      >
        <List
          dataSource={usuarios}
          renderItem={(item) => <List.Item>{item.nome}</List.Item>}
        />
      </Modal>

      {/* Modal para exibir a lista de Doações */}
      <Modal
        title="Doações Registradas"
        visible={doacoes.length > 0}
        onCancel={() => setDoacoes([])}
        footer={null}
      >
        <List
          dataSource={doacoes}
          renderItem={(item) => <List.Item>{`Valor: R$${item.valor} | Data: ${item.dataDoacao}`}</List.Item>}
        />
      </Modal>

      {/* Modal para exibir a lista de Eventos */}
      <Modal
        title="Eventos Cadastrados"
        visible={eventos.length > 0}
        onCancel={() => setEventos([])}
        footer={null}
      >
        <List
          dataSource={eventos}
          renderItem={(item) => <List.Item>{item.titulo}</List.Item>}
        />
      </Modal>

      {/* Modal para exibir a lista de Habilidades */}
      <Modal
        title="Habilidades Registradas"
        visible={habilidades.length > 0}
        onCancel={() => setHabilidades([])}
        footer={null}
      >
        <List
          dataSource={habilidades}
          renderItem={(item) => <List.Item>{item.descricao}</List.Item>}
        />
      </Modal>
    </div>
  );
};

export default App;
