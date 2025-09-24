import styled from "styled-components";
import studyIcon from "../../assets/icon.png";

const PB2 = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  min-height: 800px;
  padding: 0 50px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  max-width: 1200px;
  align-items: center;
`;

const TextContent = styled.div`
  color: #333;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  color: #000;
  margin-bottom: 30px;
  font-family: 'Georgia', serif;
  letter-spacing: 2px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 40px;
  font-weight: 300;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: #333;
  font-weight: 300;
  
  &:before {
    content: "•";
    color: #f4e800;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const ImagePlaceholder = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
`;

const StyledImage = styled.img`
  width: 80%;
  position: relative;
  height: auto;

  border-radius: 12px;

`;

export default function PB2Component() {
  return (
    <PB2 id="sobre">
      <ContentWrapper>
        <TextContent>
          <SectionTitle>Excelência Acadêmica</SectionTitle>
          <Description>
            O Lyceum nasceu da necessidade de unir a tradição das grandes universidades 
            à agilidade da tecnologia moderna. Uma plataforma pensada para educadores 
            que buscam perfeição na gestão do conhecimento.
          </Description>
          <FeatureList>
            <FeatureItem>Gestão integrada de cursos e disciplinas</FeatureItem>
            <FeatureItem>Controle acadêmico completo</FeatureItem>
            <FeatureItem>Relatórios analíticos avançados</FeatureItem>
            <FeatureItem>Interface intuitiva e sofisticada</FeatureItem>
          </FeatureList>
        </TextContent>
        <ImagePlaceholder>
        <StyledImage src={studyIcon} alt="icon" />
        </ImagePlaceholder>
      </ContentWrapper>
    </PB2>
  );
}