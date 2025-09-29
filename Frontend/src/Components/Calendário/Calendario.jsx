import { useState, useEffect } from 'react';
import ModalAdicionarEvento from './ModalAdicionarEvento';
import DiaCalendario from './DiaCalendario';
import ListaEventos from './ListaEventos';

const meses = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const Calendario = () => {
  const [mesAtual, setMesAtual] = useState(new Date().getMonth());
  const [anoAtual, setAnoAtual] = useState(new Date().getFullYear());
  const [eventos, setEventos] = useState([]);
  const [diaSelecionado, setDiaSelecionado] = useState(null);

  useEffect(() => {
    fetch('/api/eventos')
      .then(res => res.json())
      .then(data => setEventos(data))
      .catch(err => console.error('Erro ao buscar eventos:', err));
  }, []);

  const adicionarEvento = (evento) => {
    fetch('/api/eventos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(evento),
    })
      .then(res => res.json())
      .then(novo => {
        setEventos(prev => [...prev, novo]);
        setDiaSelecionado(null);
      });
  };

  const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();
  const primeiroDiaSemana = new Date(anoAtual, mesAtual, 1).getDay();

  return (
    <div style={{
      maxWidth: '900px',
      margin: '3rem auto',
      padding: '2rem',
      backgroundColor: '#1a1a1a',
      borderRadius: '16px',
      boxShadow: '0 0 20px rgba(244, 232, 0, 0.15)',
      color: '#fff',
      fontFamily: 'Georgia, serif'
    }}>
      <h2 style={{ textAlign: 'center', color: '#f4e800', marginBottom: '1rem' }}>
        Calendário de {meses[mesAtual]} {anoAtual}
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <button style={navBtnStyle} onClick={() => setMesAtual((mesAtual + 11) % 12)}>←</button>
        <button style={navBtnStyle} onClick={() => setMesAtual((mesAtual + 1) % 12)}>→</button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        textAlign: 'center',
        marginBottom: '0.5rem',
        color: '#f4e800',
        fontWeight: 'bold'
      }}>
        {diasSemana.map((dia, i) => (
          <div key={i}>{dia}</div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
        {Array(primeiroDiaSemana).fill(null).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {[...Array(diasNoMes)].map((_, i) => (
          <DiaCalendario
            key={i}
            dia={i + 1}
            mes={mesAtual}
            ano={anoAtual}
            onClick={() => setDiaSelecionado({ dia: i + 1, mes: mesAtual, ano: anoAtual })}
          />
        ))}
      </div>

      {diaSelecionado && (
        <ModalAdicionarEvento
          dia={diaSelecionado.dia}
          mes={diaSelecionado.mes}
          ano={diaSelecionado.ano}
          onClose={() => setDiaSelecionado(null)}
          onSubmit={adicionarEvento}
        />
      )}

      <ListaEventos eventos={eventos} mesAtual={mesAtual} />
    </div>
  );
};

const navBtnStyle = {
  background: 'transparent',
  color: '#f4e800',
  border: '2px solid #f4e800',
  padding: '6px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontFamily: 'Georgia, serif'
};

export default Calendario;
