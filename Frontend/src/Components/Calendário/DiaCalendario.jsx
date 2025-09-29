const DiaCalendario = ({ dia, mes, ano, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        padding: '1rem',
        border: '1px solid #f4e800',
        borderRadius: '8px',
        cursor: 'pointer',
        textAlign: 'center',
        backgroundColor: '#2c2c2c',
        color: '#fff',
        fontFamily: 'Georgia, serif',
        transition: 'background-color 0.2s ease',
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f4e800'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2c2c2c'}
    >
      {dia}
    </div>
  );
};

export default DiaCalendario;
