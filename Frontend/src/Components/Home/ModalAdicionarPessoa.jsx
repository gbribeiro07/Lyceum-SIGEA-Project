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

export default function ModalAdicionarPessoa({ onConfirm, onClose }) {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("ALUNO");

  return (
    <Modal>
      <h3>Adicionar Pessoa</h3>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="ALUNO">ALUNO</option>
        <option value="PROFESSOR">PROFESSOR</option>
      </select>
      <button onClick={() => onConfirm(nome, tipo)}>Adicionar</button>
      <button onClick={onClose}>Cancelar</button>
    </Modal>
  );
}
