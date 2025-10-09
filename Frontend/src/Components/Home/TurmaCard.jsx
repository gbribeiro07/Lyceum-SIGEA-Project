import styled from "styled-components";
import PropTypes from "prop-types";
// REMOVA A IMPORTAÇÃO DESNECESSÁRIA:
// import { nameClassroom } from '../../Services/Classrooms.Api';

const Card = styled.div`
  background-color: #1a1a1a;
  border: 1px solid #ffcc00;
  padding: 20px;
  margin: 15px 0;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(255, 204, 0, 0.2);
  color: #ffffff;
`;

const TituloTurma = styled.h3`
  color: #ffeb3b;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.5em;
  border-bottom: 2px solid #333333;
  padding-bottom: 5px;
`;

const Pessoa = styled.div`
  margin: 5px 0;
  padding-left: 10px;
  border-left: 3px solid #ffcc00;
`;

const AddPessoaButton = styled.button`
  background-color: #ffcc00;
  color: #1a1a1a;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  font-weight: bold;

  &:hover {
    background-color: #ffe066;
  }
`;

export default function TurmaCard({ turma, onAddPessoa }) {
  // Usamos 'nameClassroom' como padrão, que é a chave que o Backend deve retornar.
  const nomeDaTurma = turma.nameClassroom || turma.nome;

  return (
    <Card>
      <TituloTurma>{nomeDaTurma}</TituloTurma>

      {turma.pessoas && turma.pessoas.length > 0 ? (
        turma.pessoas.map((pessoa, index) => (
          <Pessoa key={index}>
            {pessoa.nome} ({pessoa.tipo})
          </Pessoa>
        ))
      ) : (
        <p style={{ color: "#ccc" }}>
          Nenhuma pessoa adicionada ou dado indisponível.
        </p>
      )}

      <AddPessoaButton onClick={onAddPessoa}>Adicionar Pessoa</AddPessoaButton>
    </Card>
  );
}

TurmaCard.propTypes = {
  turma: PropTypes.shape({
    nameClassroom: PropTypes.string,
    nome: PropTypes.string,
    pessoas: PropTypes.arrayOf(
      PropTypes.shape({
        nome: PropTypes.string.isRequired,
        tipo: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  onAddPessoa: PropTypes.func.isRequired,
};
