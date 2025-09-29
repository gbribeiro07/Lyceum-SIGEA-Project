import styled from "styled-components";

export const CardProfessor = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%);
  border: 1px solid rgba(244, 232, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  width: 220px;
  color: #f4e800;
  font-family: 'Georgia', serif;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ModalContainer = styled.div`
  background: #1a1a1a;
  border: 1px solid rgba(244, 232, 0, 0.2);
  border-radius: 12px;
  padding: 30px;
  color: #fff;
  width: 320px;
  font-family: 'Georgia', serif;
  box-shadow: 0 0 20px rgba(244, 232, 0, 0.2);
`;

export const Input = styled.input` 
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: #2c2c2c;
  border: 1px solid #f4e800;
  color: #fff;
  border-radius: 6px;
`;

export const Button = styled.button`
  background: transparent;
  color: #f4e800;
  border: 2px solid #f4e800;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #f4e800;
    color: #000;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
`;


export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;


export const Title = styled.h3`
  color: #f4e800;
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 20px;
  font-family: 'Georgia', serif;
  letter-spacing: 1px;
`;



export const PageContainer = styled.div`
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  min-height: 100vh;
  padding: 40px;
  color: #fff;
  font-family: 'Georgia', serif;
`;

export const Subtitle = styled.h2`
  color: #f4e800;
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 30px;
  letter-spacing: 2px;
`;

export const ListaDeProfessores = styled.h2`
  color: #f4e800;
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 30px;
  letter-spacing: 2px;
`;

export const AddButton = styled.button`
  font-size: 24px;
  background-color: #f4e800;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;