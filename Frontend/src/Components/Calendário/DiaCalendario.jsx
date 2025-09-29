const DiaCalendario = ({ dia, mes, ano, onClick }) => {
    return (
      <div
        onClick={onClick}
        style={{
          padding: '1rem',
          border: '1px solid #ccc',
          borderRadius: '6px',
          cursor: 'pointer',
          textAlign: 'center',
          backgroundColor: '#f0f0f0'
        }}
      >
        {dia}
      </div>
    );
  };
  
  export default DiaCalendario;
  