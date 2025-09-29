// import { useState } from 'react'
import PHeader from "./Components/Presentation/PHeader";
import PTitle from "./Components/Presentation/PTitle";
import SignUpTxt from "./Components/Presentation/SignUpTxt";
import LoginTxt from "./Components/Presentation/LoginTxt";
import PB1 from "./Components/Presentation/PB1";
import PB2 from "./Components/Presentation/PB2";
import PB3 from "./Components/Presentation/PB3";
import PB4 from "./Components/Presentation/PB4";
import PBottom from "./Components/Presentation/PBottom";
import LoginPage from "./Components/Login/LoginPage";
import SignUpPage from "./Components/SignUp/SignUpPage";
import Header from "./Components/Home/Header";

import HTitle from "./Components/Home/HTitle";
import HB1 from "./Components/Home/HB1";
import GlobalStyle from "../GlobalStyle";
import Nav from "./Components/Home/Nav";
import Turmas from "./Components/Home/Turmas";

import NavProf from "./Components/Professores/NavProf";
import ProfessoresHeader from "./Components/Professores/ProfessoresHeader";
import ProfessoresBody from "./Components/Professores/ProfessoresBody";

import Calendario from "./Components/Calendário/Calendario";
import NavCalendario from "./Components/Calendário/NavCalendario";

import Alunos from "./Components/Alunos/Alunos";
import NavAlunos from "./Components/Alunos/NavAlunos";

export default function Presentation() {
  return (
    <>
      <GlobalStyle />
      <PHeader>
        <PTitle>Lyceum</PTitle>
        <SignUpTxt>Cadastrar-se</SignUpTxt>
        <LoginTxt>Login</LoginTxt>
      </PHeader>
      <PB1 />
      <PB2 />
      <PB3 />
      <PB4 />
      <PBottom />
    </>
  );
}

export function Login() {
  return (
    <>
      <LoginPage></LoginPage>
    </>
  );
}

export function SignUp() {
  return (
    <>
      <SignUpPage></SignUpPage>
    </>
  );
}

export function Home() {
  return (
    <>
     <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      
      <Header>
        <HTitle>Lyceum</HTitle>
        <Nav />
      </Header>
      <Turmas />
      
     </div>
    </>
  );
}

export function Professores () {
  return (
    <>
      <ProfessoresHeader>
        <HTitle>Professores</HTitle>
        <NavProf />
      </ProfessoresHeader>
      <ProfessoresBody />

    </>
  )
}

export function CalendarioPage () {
  return (
    <>
        <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
        <Header>
        <HTitle>Calendário</HTitle>
        <NavCalendario />
      </Header>
      <Calendario />
        </div>
    </>
  )
}

export function AlunosPage() {
  return (
    <>
      <Header>
        <HTitle>Alunos</HTitle>
        <NavAlunos />
      </Header>
      <Alunos />
    </>
  );
}