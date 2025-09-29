import { useState } from 'react';
import {
  Overlay,
  ModalContainer,
  Title,
  Input,
  ButtonGroup,
  Button
} from './StyledProfessor';

const ModalAdicionarProfessor = ({ onClose, onSubmit }) => {
  const [nome, setNome] = useState('');

  const handleSubmit = () => {
    if (nome.trim()) {
      onSubmit({ nome });
      setNome('');
    }
  };

  return (
    <Overlay>
      <ModalContainer>
        <Title>Adicionar Professor</Title>
        <Input
          type="text"
          placeholder="Nome do professor"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <ButtonGroup>
          <Button onClick={handleSubmit}>Salvar</Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ButtonGroup>
      </ModalContainer>
    </Overlay>
  );
};

export default ModalAdicionarProfessor;
