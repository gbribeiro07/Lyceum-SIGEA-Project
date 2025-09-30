import { useState } from "react";

const ModalAdicionarEvento = ({ dia, mes, ano, onClose, onSubmit }) => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = () => {
    if (titulo.trim()) {
      const data = new Date(ano, mes, dia).toISOString().split("T")[0];
      onSubmit({ titulo, data });
      setTitulo("");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(4px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          backgroundColor: "#1a1a1a",
          padding: "2rem",
          borderRadius: "12px",
          width: "320px",
          color: "#fff",
          fontFamily: "Georgia, serif",
          boxShadow: "0 0 20px rgba(244, 232, 0, 0.2)",
        }}
      >
        <h3 style={{ color: "#ff8c00", marginBottom: "1rem" }}>
          Adicionar Evento em {dia}/{mes + 1}
        </h3>
        <input
          type="text"
          placeholder="Título do evento"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "1rem",
            backgroundColor: "#2c2c2c",
            border: "1px solid #ff8c00",
            color: "#fff",
            borderRadius: "6px",
          }}
        />
        <input
          type="text"
          placeholder="Descrição do evento"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "1rem",
            backgroundColor: "#2c2c2c",
            border: "1px solid #ff8c00",
            color: "#fff",
            borderRadius: "6px",
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button style={btnStyle} onClick={handleSubmit}>
            Salvar
          </button>
          <button style={btnStyle} onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

const btnStyle = {
  background: "transparent",
  color: "#ff8c00",
  border: "2px solid #ff8c00",
  padding: "10px 20px",
  borderRadius: "6px",
  cursor: "pointer",
  fontFamily: "Georgia, serif",
};

export default ModalAdicionarEvento;
