import { useState, useEffect } from 'react';
import ModalAdicionarEvento from './ModalAdicionarEvento';
import DiaCalendario from './DiaCalendario';
import ListaEventos from './ListaEventos';

const meses = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

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

  return (
    <div>
      <h2>Calendário de {meses[mesAtual]} {anoAtual}</h2>
      <button onClick={() => setMesAtual((mesAtual + 11) % 12)}>←</button>
      <button onClick={() => setMesAtual((mesAtual + 1) % 12)}>→</button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem', marginTop: '1rem' }}>
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

export default Calendario;
