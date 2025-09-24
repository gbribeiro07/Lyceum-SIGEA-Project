import styled from "styled-components";
import SignUpForm from "./SignUpForm";


const SignUpP = styled.div`
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

export default function SignUpPage() {
  return (
    <SignUpP>
      <SignUpForm />
    </SignUpP>
  );
}
