import styled from "styled-components";
import LoginForm from "./LoginForm";

const LoginP = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: black;
  display: flex;
  width: 100;
  height: 100vh;
  margin-top: 0;
  margin-left: -8px;
  position: relative;
  overflow: hidden;
`;

export default function LoginPage() {
  return (
    <LoginP>
      <LoginForm />
    </LoginP>
  );
}
