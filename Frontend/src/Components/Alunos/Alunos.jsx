import { useEffect, useState } from 'react';
import ModalAdicionarAluno from './ModalAlunos';
import CardAluno from './CardAluno';
import styled from 'styled-components';

const PageContainer = styled.div`
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  min-height: 100vh;
  padding: 40px;
  color: #fff;
  font-family: 'Georgia', serif;
`;

const Title = styled.h2`
  color: #f4e800;
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 30px;
  letter-spacing: 2px;
`;

const AddButton = styled.button`
  font-size: 24px;
  background-color: #f4e800;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;


  &:hover {
    background-color: #ffe600;
  }
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const Alunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    fetch('/api/alunos')
      .then(res => res.json())
      .then(data => setAlunos(data))
      .catch(err => console.error('Erro ao buscar alunos:', err));
  }, []);

  const adicionarAluno = (novoAluno) => {
    fetch('/api/alunos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoAluno),
    })
      .then(res => res.json())
      .then(alunoCriado => {
        setAlunos(prev => [...prev, alunoCriado]);
        setMostrarModal(false);
      })
      .catch(err => console.error('Erro ao adicionar aluno:', err));
  };

  return (
    <PageContainer>
      <Title>Lista de Alunos</Title>
      <AddButton onClick={() => setMostrarModal(true)}>+</AddButton>

      {mostrarModal && (
        <ModalAdicionarAluno
          onClose={() => setMostrarModal(false)}
          onSubmit={adicionarAluno}
        />
      )}

      <CardGrid>
        {alunos.map(aluno => (
          <CardAluno key={aluno.id} aluno={aluno} />
        ))}
      </CardGrid>
    </PageContainer>
  );
};

export default Alunos;
