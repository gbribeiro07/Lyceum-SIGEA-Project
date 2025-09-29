import styled from "styled-components";

const PageWrapper = styled.div`
  background: #0a0a0a;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 60px 40px;
  font-family: 'Georgia', serif;
  color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  color: #f4e800;
  margin-bottom: 30px;
  letter-spacing: 2px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const Card = styled.div`
  background: #1c1c1c;
  border: 1px solid rgba(244, 232, 0, 0.2);
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 10px rgba(244, 232, 0, 0.2);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  color: #f4e800;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
`;

const AgendaWrapper = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 60px;
  border: 1px solid rgba(244, 232, 0, 0.2);
`;

const AgendaItem = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  background: #2a2a2a;
  border-radius: 8px;
  border-left: 4px solid #f4e800;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  background: #1c1c1c;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid rgba(244, 232, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskStatus = styled.span`
  color: #f4e800;
  font-weight: 300;
  font-size: 0.9rem;
`;


export default function HomePage() {
  return (
    <PageWrapper>
      <SectionTitle>Turmas</SectionTitle>
    </PageWrapper>
  );
}
