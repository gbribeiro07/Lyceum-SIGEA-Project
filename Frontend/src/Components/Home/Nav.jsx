import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  font-family: Arial, sans-serif;

  &:hover {
    color: #ff8c00;
  }
`;

export default function Nav() {
  return (
    <NavContainer>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/professores">Professores</NavLink>
      <NavLink to="/alunos">Alunos</NavLink>
      <NavLink to="/calendario">Calendário</NavLink>
    </NavContainer>
  );
}
