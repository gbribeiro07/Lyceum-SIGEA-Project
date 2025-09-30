import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { RegisterClassroom } from "../../Services/Classrooms.Api";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Modal = styled.div`
  background: #1a1a1a;
  border: 1px solid rgba(244, 232, 0, 0.2);
  border-radius: 12px;
  padding: 30px;
  width: 320px;
  color: #fff;
  font-family: "Georgia", serif;
  box-shadow: 0 0 20px rgba(244, 232, 0, 0.2);
`;

const Title = styled.h3`
  color: #f4e800;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
  background-color: #2c2c2c;
  border: 1px solid #f4e800;
  color: #fff;
  border-radius: 6px;
  font-family: "Georgia", serif;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Button = styled.button`
  background: transparent;
  color: #f4e800;
  border: 2px solid #f4e800;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-family: "Georgia", serif;
  transition: 0.3s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "transparent" : "#f4e800"};
    color: ${(props) => (props.disabled ? "#f4e800" : "#000")};
  }
`;

export default function ModalNovaTurma({ onConfirm, onClose }) {
  const [nomeTurma, setNomeTurma] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateClassroom = async () => {
    if (!nomeTurma.trim()) {
      setError("O nome da turma é obrigatório.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await RegisterClassroom(nomeTurma);

      onConfirm();
    } catch (err) {
      console.error("Erro ao criar sala:", err);
      setError(err.message || "Falha ao criar a turma.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Overlay>
      <Modal>
        <Title>Nova Turma</Title>

        {/* Exibe a mensagem de erro, se houver */}
        {error && (
          <p style={{ color: "red", marginBottom: "1rem", fontSize: "0.9em" }}>
            {error}
          </p>
        )}

        <Input
          type="text"
          placeholder="Nome da turma"
          value={nomeTurma}
          onChange={(e) => {
            setNomeTurma(e.target.value);
            setError(null); // Limpa o erro ao digitar
          }}
          disabled={loading}
        />

        <ButtonGroup>
          <Button
            onClick={handleCreateClassroom}
            disabled={loading || !nomeTurma.trim()}
          >
            {loading ? "Criando..." : "Criar"}
          </Button>

          <Button onClick={onClose} disabled={loading}>
            Cancelar
          </Button>
        </ButtonGroup>
      </Modal>
    </Overlay>
  );
}

ModalNovaTurma.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
