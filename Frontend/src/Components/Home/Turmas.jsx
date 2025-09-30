import { useState } from "react";
import ModalNovaTurma from "./ModalNovaTurma";
import ModalAdicionarPessoa from "./ModalAdicionarPessoa";
import TurmaCard from "./TurmaCard";
import styled from "styled-components";

const TurmasContainer = styled.div`
  padding: 20px;
  background-color: #171717;
`;

const HeaderTurmas = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  color: #f4e800;
`;

const AddButton = styled.button`
  font-size: 24px;
  background-color: #f4e800;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export default function Turmas() {
  const [turmas, setTurmas] = useState([]);
  const [showModalTurma, setShowModalTurma] = useState(false);
  const [showModalPessoa, setShowModalPessoa] = useState(false);
  const [turmaSelecionada, setTurmaSelecionada] = useState(null);

  const adicionarTurma = (nome) => {
    setTurmas([...turmas, { nome, pessoas: [] }]);
    setShowModalTurma(false);
  };

  const adicionarPessoa = (nome, tipo) => {
    const novaLista = turmas.map((turma) =>
      turma === turmaSelecionada
        ? { ...turma, pessoas: [...turma.pessoas, { nome, tipo }] }
        : turma
    );
    setTurmas(novaLista);
    setShowModalPessoa(false);
  };

  return (
    <TurmasContainer>
      <HeaderTurmas>
        <Title>Turmas</Title>
        <AddButton onClick={() => setShowModalTurma(true)}>+</AddButton>
      </HeaderTurmas>

      {turmas.map((turma, index) => (
        <TurmaCard
          key={index}
          turma={turma}
          onAddPessoa={() => {
            setTurmaSelecionada(turma);
            setShowModalPessoa(true);
          }}
        />
      ))}

      {showModalTurma && (
        <ModalNovaTurma
          onConfirm={adicionarTurma}
          onClose={() => setShowModalTurma(false)}
        />
      )}
      {showModalPessoa && (
        <ModalAdicionarPessoa
          onConfirm={adicionarPessoa}
          onClose={() => setShowModalPessoa(false)}
        />
      )}
    </TurmasContainer>
  );
}
