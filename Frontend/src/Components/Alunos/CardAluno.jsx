import { CardAluno as Card } from './StyledAluno';

const CardAluno = ({ aluno }) => {
  return (
    <Card>
      <h4>{aluno.nome}</h4>
      <p>ID: {aluno.id}</p>
    </Card>
  );
};

export default CardAluno;
