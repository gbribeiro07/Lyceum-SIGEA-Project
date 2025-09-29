import { useEffect, useState } from 'react';
import ModalAdicionarAluno from './ModalAlunos';
import CardAluno from './ModalAlunos';

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
    <div>
      <h2>Lista de Alunos</h2>
      <button onClick={() => setMostrarModal(true)}>Adicionar Aluno</button>

      {mostrarModal && (
        <ModalAdicionarAluno
          onClose={() => setMostrarModal(false)}
          onSubmit={adicionarAluno}
        />
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        {alunos.map(aluno => (
          <CardAluno key={aluno.id} aluno={aluno} />
        ))}
      </div>
    </div>
  );
};

export default Alunos;
