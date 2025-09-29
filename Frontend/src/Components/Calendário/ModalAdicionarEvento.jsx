import { useState } from 'react';

const ModalAdicionarEvento = ({ dia, mes, ano, onClose, onSubmit }) => {
  const [titulo, setTitulo] = useState('');

  const handleSubmit = () => {
    if (titulo.trim()) {
      const data = new Date(ano, mes, dia).toISOString().split('T')[0];
      onSubmit({ titulo, data });
      setTitulo('');
    }
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', width: '300px' }}>
        <h3>Adicionar Evento em {dia}/{mes + 1}</h3>
        <input
          type="text"
          placeholder="Título do evento"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <div style={{ marginTop: '1rem' }}>
          <button onClick={handleSubmit}>Salvar</button>
          <button onClick={onClose} style={{ marginLeft: '1rem' }}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalAdicionarEvento;
