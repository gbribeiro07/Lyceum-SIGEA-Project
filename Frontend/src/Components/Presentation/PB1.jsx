import styled from "styled-components";
import { Link } from "react-router-dom";

const PB1 = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  min-height: 800px;
  position: relative;
  overflow: hidden;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      circle at 20% 80%,
      rgba(244, 232, 0, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(244, 232, 0, 0.05) 0%,
      transparent 50%
    );
`;

const PB1Content = styled.div`
  text-align: center;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
`;

const PB1Title = styled.h1`
  color: #f4e800;
  font-size: 4.5rem;
  font-weight: 300;
  margin-bottom: 30px;
  font-family: "Georgia", serif;
  letter-spacing: 3px;
  line-height: 1.1;
`;

const PB1Subtitle = styled.h2`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 40px;
  letter-spacing: 1px;
`;

const CTAButton = styled(Link)`
  background: transparent;
  color: #f4e800;
  border: 2px solid #f4e800;
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    background: #f4e800;
    color: #000;
  }
`;

export default function PB1Component() {
  return (
    <PB1 id="hero">
      <BackgroundPattern />
      <PB1Content>
        <PB1Title>LYCEUM</PB1Title>
        <PB1Subtitle>
          O futuro da gestão acadêmica. Uma plataforma que une tradição
          universitária à inovação tecnológica para instituições que valorizam a
          excelência no ensino.
        </PB1Subtitle>
        <CTAButton to="/SignUp">Explore a Plataforma</CTAButton>
      </PB1Content>
    </PB1>
  );
}
