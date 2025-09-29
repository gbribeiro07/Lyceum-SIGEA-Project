import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  padding: 20px;
  margin-top: 15px;
  border-radius: 8px;
`;

const Pessoa = styled.div`
  margin-top: 5px;
`;

const AddPessoaButton = styled.button`
  margin-top: 10px;
`;

export default function TurmaCard({ turma, onAddPessoa }) {
  return (
    <Card>
      <h3>{turma.nome}</h3>
      {turma.pessoas.length === 0 ? (
        <p>Nenhuma pessoa adicionada.</p>
      ) : (
        turma.pessoas.map((pessoa, index) => (
          <Pessoa key={index}>
            {pessoa.nome} ({pessoa.tipo})
          </Pessoa>
        ))
      )}
      <AddPessoaButton onClick={onAddPessoa}>Adicionar Pessoa</AddPessoaButton>
    </Card>
  );
}
