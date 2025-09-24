import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../Services/User.Api";
import { verifyEmailUser } from "../../Services/User.Api";

const FormContainer = styled.form`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(244, 232, 0, 0.2);
  padding: 50px;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  margin: 100px auto;
  text-align: center;
  color: #fff;
  font-family: 'Georgia', serif;
  backdrop-filter: blur(8px);
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 300;
  color: #f4e800;
  margin-bottom: 30px;
  letter-spacing: 2px;
`;

const Label = styled.label`
  display: block;
  margin: 15px 0 5px;
  font-weight: 300;
  text-align: left;
  color: rgba(255, 255, 255, 0.8);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #f4e800;
  border-radius: 6px;
  background-color: #1a1a1a;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background: transparent;
  color: #f4e800;
  border: 2px solid #f4e800;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  border-radius: 6px;

  &:hover {
    background: #f4e800;
    color: #000;
  }
`;

const BackLink = styled(Link)`
  display: block;
  margin-top: 20px;
  font-size: 0.9rem;
  color: #f4e800;
  text-decoration: none;
  font-weight: 300;

  &:before {
    content: "← ";
  }

  &:hover {
    text-decoration: underline;
    color: #fff200;
  }
`;

const ModalConteúdo = styled.div`
  background: #1a1a1a;
  border: 1px solid #f4e800;
  width: 90%;
  max-width: 600px;
  padding: 40px;
  border-radius: 12px;
  color: #fff;
  font-family: 'Georgia', serif;
`;

const TítuloModal = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  color: #f4e800;
  margin-bottom: 30px;
  text-align: center;
`;

const CodeSubButton = styled(SubmitButton)`
  width: 100%;
  margin-top: 20px;
`;



export default function SignUpForm() {
  //estados para armazenar os valores dos Inputs
  const [modalAberto, setModalAberto] = useState(false);
  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    if (!nameUser || !email || !password) {
      setMessage("Preencha todos os campos!");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Por favor, insira um e-mail válido!");
      return;
    }

    setIsLoading(true);

    try {
      const response = await registerUser(nameUser, email, password);

      if (!response.success) {
        setMessage(response.message || "Erro no pré-cadastro");
        return;
      }

      setMessage("Código de verificação enviado para seu e-mail!");
      setModalAberto(true);
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      setMessage(error.message || "Erro ao processar cadastro");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode) {
      setMessage("Digite o código de verificação!");
      return;
    }

    setIsLoading(true);

    try {
      const response = await verifyEmailUser(email, verificationCode);

      if (!response.success) {
        setMessage(response.message || "Código inválido!");
        return;
      }

      setMessage("Cadastro concluído com sucesso! Você já pode fazer login.");
      setTimeout(() => {
        setMessage("");
        setModalAberto(false);
        setNameUser("");
        setEmail("");
        setPassword("");
        setVerificationCode("");
      }, 3000);
    } catch (error) {
      console.error("Erro ao verificar código:", error);
      setMessage(error.message || "Erro ao verificar código");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <Title>CADASTRO</Title>
        <Label>Nome:</Label>
        <Input
          type="text"
          placeholder="Digite seu nome"
          value={nameUser}
          onChange={(e) => setNameUser(e.target.value)}
        />

        <Label>E-mail:</Label>
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label>Senha:</Label>
        <Input
          type="password"
          placeholder="Crie uma senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? "Processando..." : "Cadastrar-se"}
        </SubmitButton>
        <BackLink to="/Presentation">Voltar</BackLink>
      </FormContainer>

      {modalAberto && (
        <ModalFundo>
          <ModalConteúdo>
            <TítuloModal>Digite o código de verificação</TítuloModal>
            <Input
              type="text"
              placeholder="Código enviado ao seu e-mail"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <CodeSubButton onClick={handleVerifyCode} disabled={isLoading}>
              {isLoading ? "Verificando..." : "Confirmar Código"}
            </CodeSubButton>
          </ModalConteúdo>
        </ModalFundo>
      )}
      {message && (
        <p style={{ color: "white", textAlign: "center", marginTop: "20px" }}>
          {message}
        </p>
      )}
    </>
  );
}
