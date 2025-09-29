import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #f4e800;
  text-decoration: none;
  font-weight: bold;
  font-family: Arial, sans-serif;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Nav() {
  return (
    <NavContainer>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/alunos">Alunos</NavLink>
      <NavLink to="/calendario">Calendário</NavLink>
    </NavContainer>
  );
}