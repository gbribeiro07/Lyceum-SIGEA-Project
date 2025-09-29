import { CardProfessor } from "./StyledProfessor";


const CardProfessorComponent = ({ professor }) => {
    return (
        <CardProfessor>
            <h4>{professor.nome}</h4>
            <p>ID: {professor.id}</p>
        </CardProfessor>
      
    );
  };
  
  export default CardProfessorComponent;
  