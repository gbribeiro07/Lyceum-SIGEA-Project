import styled from "styled-components";

const PBottom = styled.footer`
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  padding: 50px;
`;

const FooterContent = styled.div`
  text-align: center;
  max-width: 600px;
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 30px;
  letter-spacing: 1px;
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 2px;
`;

export default function PBottomComponent() {
  return (
    <PBottom id="contato">
      <FooterContent>
        <FooterText>
          "O verdadeiro conhecimento é aquele que nos torna melhores educadores 
          e seres humanos. O Lyceum está aqui para apoiar essa jornada."
        </FooterText>
        <Copyright>© 2025 LYCEUM - SISTEMA DE GESTÃO ACADÊMICA</Copyright>
      </FooterContent>
    </PBottom>
  );
}