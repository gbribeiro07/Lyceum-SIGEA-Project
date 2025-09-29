import { useState } from 'react';

const ModalAdicionarAluno = ({ onClose, onSubmit }) => {
  const [nome, setNome] = useState('');

  const handleSubmit = () => {
    if (nome.trim()) {
      onSubmit({ nome });
      setNome('');
    }
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px' }}>
        <h3>Adicionar Aluno</h3>
        <input
          type="text"
          placeholder="Nome do aluno"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <div style={{ marginTop: '1rem' }}>
          <button onClick={handleSubmit}>Salvar</button>
          <button onClick={onClose} style={{ marginLeft: '1rem' }}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalAdicionarAluno;
