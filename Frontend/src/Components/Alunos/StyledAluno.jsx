import styled from "styled-components";

export const CardAluno = styled.div`
  background: linear-gradient(135deg, #fff9c4 0%, #f8f9fa 100%);
  border: 1px solid #f4e800;
  border-radius: 10px;
  padding: 20px;
  width: 220px;
  color: #333;
  font-family: 'Georgia', serif;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ModalAluno = styled.div`
  background: #272727ff;
  border: 1px solid #f4e800;
  border-radius: 12px;
  padding: 30px;
  color: #333;
  width: 320px;
  font-family: 'Georgia', serif;
  box-shadow: 0 0 20px rgba(244, 232, 0, 0.2);
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: #242020ff;
  border: 1px solid #f4e800;
  color: #ffff;
  border-radius: 6px;
`;

export const Button = styled.button`
  background: #f4e800;
  color: #000;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #ffe600;
  }
`;
