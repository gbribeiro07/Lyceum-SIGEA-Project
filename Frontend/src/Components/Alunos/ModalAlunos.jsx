import { useState } from 'react';
import { ModalAluno, Input, Button } from './StyledAluno';

const Overlay = {
  position: 'fixed',
  top: 0, left: 0,
  width: '100%', height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999
};

const ModalAdicionarAluno = ({ onClose, onSubmit }) => {
  const [nome, setNome] = useState('');

  const handleSubmit = () => {
    if (nome.trim()) {
      onSubmit({ nome });
      setNome('');
    }
  };

  return (
    <div style={Overlay}>
      <ModalAluno>
        <h3 style={{ color: '#f4e800', marginBottom: '1rem' }}>Adicionar Aluno</h3>
        <Input
          type="text"
          placeholder="Nome do aluno"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <Button onClick={handleSubmit}>Salvar</Button>
          <Button onClick={onClose}>Cancelar</Button>
        </div>
      </ModalAluno>
    </div>
  );
};

export default ModalAdicionarAluno;
