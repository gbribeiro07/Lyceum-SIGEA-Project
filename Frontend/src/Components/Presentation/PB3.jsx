import styled from "styled-components";

const PB3 = styled.div`
  background: linear-gradient(135deg, #f4e800 0%, #fff9c4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  min-height: 800px;
  padding: 0 50px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  max-width: 1000px;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 40px;
`;

const StatNumber = styled.div`
  font-size: 4rem;
  font-weight: 300;
  color: #000;
  margin-bottom: 10px;
  font-family: 'Georgia', serif;
`;

const StatLabel = styled.div`
  font-size: 1.3rem;
  color: #333;
  font-weight: 300;
  letter-spacing: 1px;
`;

const MainTitle = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  color: #000;
  text-align: center;
  margin-bottom: 80px;
  font-family: 'Georgia', serif;
  letter-spacing: 2px;
  grid-column: 1 / -1;
`;

export default function PB3Component() {
  return (
    <PB3 id="vantagens">
      <StatsGrid>
        <MainTitle>Por que Escolher o Lyceum?</MainTitle>
        
        <StatCard>
          <StatNumber>+80%</StatNumber>
          <StatLabel>Eficiência na Gestão</StatLabel>
        </StatCard>
        
        <StatCard>
          <StatNumber>24/7</StatNumber>
          <StatLabel>Disponibilidade</StatLabel>
        </StatCard>
        
        <StatCard>
          <StatNumber>100%</StatNumber>
          <StatLabel>Segurança de Dados</StatLabel>
        </StatCard>
        
        <StatCard>
          <StatNumber>∞</StatNumber>
          <StatLabel>Escalabilidade</StatLabel>
        </StatCard>
      </StatsGrid>
    </PB3>
  );
}