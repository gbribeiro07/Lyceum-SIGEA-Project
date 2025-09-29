const ListaEventos = ({ eventos, mesAtual }) => {
    const eventosDoMes = eventos.filter(ev => new Date(ev.data).getMonth() === mesAtual);
  
    const agrupados = eventosDoMes.reduce((acc, ev) => {
      const dia = new Date(ev.data).getDate();
      acc[dia] = acc[dia] || [];
      acc[dia].push(ev.titulo);
      return acc;
    }, {});
  
    return (
      <div style={{ marginTop: '2rem' }}>
        <h3>Eventos de {eventosDoMes.length > 0 ? '' : 'Nenhum evento neste mês'}</h3>
        {Object.entries(agrupados).map(([dia, titulos]) => (
          <div key={dia}>
            <strong>{String(dia).padStart(2, '0')}/{String(mesAtual + 1).padStart(2, '0')}:</strong>
            {titulos.map((titulo, i) => (
              <div key={i}>• {titulo}</div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default ListaEventos;
  