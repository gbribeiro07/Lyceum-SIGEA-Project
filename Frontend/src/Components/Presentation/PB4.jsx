import styled from "styled-components";

const PB4 = styled.div`
  background: linear-gradient(135deg, #000000 0%, #2c2c2c 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  min-height: 800px;
  padding: 0 50px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  max-width: 1200px;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 40px 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(244, 232, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #f4e800;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  color: #f4e800;
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 15px;
  font-family: 'Georgia', serif;
`;

const FeatureDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 300;
`;

export default function PB4Component() {
  return (
    <PB4 id="diferenciais">
      <FeaturesGrid>
        <FeatureCard>
          <FeatureIcon>📊</FeatureIcon>
          <FeatureTitle>Análise Preditiva</FeatureTitle>
          <FeatureDescription>
            Tecnologia de IA para prever desempenho e identificar oportunidades de melhoria
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureIcon>⚡</FeatureIcon>
          <FeatureTitle>Performance</FeatureTitle>
          <FeatureDescription>
            Plataforma otimizada para lidar com grandes volumes de dados acadêmicos
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureIcon>🔒</FeatureIcon>
          <FeatureTitle>Segurança</FeatureTitle>
          <FeatureDescription>
            Certificação e criptografia de nível bancário para proteger dados sensíveis
          </FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>
    </PB4>
  );
}