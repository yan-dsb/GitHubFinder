import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import Logo from '../../components/Logo/Logo';

const Dashboard: React.FC = () => {
  return (
    <>
      <Logo />
      <Title>Ache repositórios no GitHub</Title>
      <Form action="#">
        <input type="text" placeholder="Digite aqui o repositório" />
        <button type="submit">Buscar</button>
      </Form>
      <Repositories>
        <a href="/">
          <img
            src="https://avatars1.githubusercontent.com/u/47652180?s=460&u=78d5f4181f7ae724da68c824d37ac00ecdaa1432&v=4"
            alt="GitHub User"
          />
          <div>
            <strong>BackendWithTypeORM</strong>
            <p>Node Application with TypeORM</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars1.githubusercontent.com/u/47652180?s=460&u=78d5f4181f7ae724da68c824d37ac00ecdaa1432&v=4"
            alt="GitHub User"
          />
          <div>
            <strong>BackendWithTypeORM</strong>
            <p>Node Application with TypeORM</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
