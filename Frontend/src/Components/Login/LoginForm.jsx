import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../Services/Auth.Api";

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

const RegisterLink = styled.p`
  margin-top: 70px;
  font-size: 14px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  color: #ff8c00;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage("");

    if (!email || !password) {
      setMessage("Preencha todos os campos!");
      return;
    }

    setIsLoading(true);

    try {
      const response = await loginUser(email, password);

      if (!response.success) {
        setMessage(response.message || "Credenciais inválidas");
        return;
      }

      // Garante que cookies/tokens estejam setados antes de prosseguir
      await new Promise((resolve) => setTimeout(resolve, 200));

      navigate("/Home", { replace: true, state: { fromLogin: true } });
    } catch (error) {
      console.error("Erro no login:", error);
      setMessage("Erro ao conectar com o servidor");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <Title>LOGIN</Title>
      <form onSubmit={handleLogin}>
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
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? "Entrando..." : "Entrar"}
        </SubmitButton>
      </form>

      {message && <p>{message}</p>}

      <RegisterLink>
        Não tem conta ainda? <StyledLink to="/SignUp">Cadastre-se!</StyledLink>
      </RegisterLink>
      <BackLink to="/Presentation">Voltar</BackLink>
    </FormContainer>
  );
}
