const CardAluno = ({ aluno }) => {
    return (
      <div style={{
        border: '1px solid #ccc', padding: '1rem', borderRadius: '8px',
        width: '200px', backgroundColor: '#f9f9f9'
      }}>
        <h4>{aluno.nome}</h4>
        <p>ID: {aluno.id}</p>
      </div>
    );
  };
  
  export default CardAluno;
  