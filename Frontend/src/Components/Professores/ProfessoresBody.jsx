import { useEffect, useState } from 'react';
import ModalAdicionarProfessor from './AdicionarProfessor';
import CardProfessor from './CardProfessor';
import { PageContainer, Subtitle, AddButton, CardGrid } from './StyledProfessor';

const Professores = () => {
  const [professores, setProfessores] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    fetch('/api/professores')
      .then(res => res.json())
      .then(data => setProfessores(data))
      .catch(err => console.error('Erro ao buscar professores:', err));
  }, []);

  const adicionarProfessor = (novoProfessor) => {
    fetch('/api/professores', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoProfessor),
    })
      .then(res => res.json())
      .then(professorCriado => {
        setProfessores(prev => [...prev, professorCriado]);
        setMostrarModal(false);
      })
      .catch(err => console.error('Erro ao adicionar professor:', err));
  };

  return (
    <PageContainer>
      <Subtitle>Lista de Professores</Subtitle>
      <AddButton onClick={() => setMostrarModal(true)}>+</AddButton>

      {mostrarModal && (
        <ModalAdicionarProfessor
          onClose={() => setMostrarModal(false)}
          onSubmit={adicionarProfessor}
        />
      )}

      <CardGrid>
        {professores.map(prof => (
          <CardProfessor key={prof.id} professor={prof} />
        ))}
      </CardGrid>
    </PageContainer>
  );
};



export default Professores;