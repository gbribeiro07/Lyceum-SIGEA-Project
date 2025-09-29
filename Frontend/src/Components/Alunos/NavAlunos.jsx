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
      <NavLink to="/professores">Professores</NavLink>
      <NavLink to="/calendario">Calendário</NavLink>
      <NavLink to="/home">Home</NavLink>
    </NavContainer>
  );
}