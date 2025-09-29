import { useState } from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 30%;
  left: 30%;
  background: white;
  padding: 20px;
  border-radius: 8px;
`;

export default function ModalNovaTurma({ onConfirm, onClose }) {
  const [nomeTurma, setNomeTurma] = useState("");

  return (
    <Modal>
      <h3>Nova Turma</h3>
      <input
        type="text"
        placeholder="Nome da turma"
        value={nomeTurma}
        onChange={(e) => setNomeTurma(e.target.value)}
      />
      <button onClick={() => onConfirm(nomeTurma)}>Criar</button>
      <button onClick={onClose}>Cancelar</button>
    </Modal>
  );
}
