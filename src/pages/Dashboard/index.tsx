import React, { useState, FormEvent, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Error } from './styles';
import Logo from '../../components/Logo/Logo';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepository, setNewRepository] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GitHubFinder:repositories',
    );
    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GitHubFinder:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function addRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepository) {
      setInputError('Digite o nome do repositório');
      return;
    }
    try {
      const response = await api.get<Repository>(`/repos/${newRepository}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);

      setNewRepository('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca do repositório');
    }
  }

  return (
    <>
      <Logo />
      <Title>Ache repositórios no GitHub</Title>
      <Form hasError={!!inputError} onSubmit={addRepository}>
        <input
          type="text"
          value={newRepository}
          onChange={(e) => setNewRepository(e.target.value)}
          placeholder="Digite aqui o repositório"
        />
        <button type="submit">Buscar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map((repository) => {
          return (
            <Link
              key={repository.full_name}
              to={`/repositories/${repository.full_name}`}
            >
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
          );
        })}
      </Repositories>
    </>
  );
};

export default Dashboard;
