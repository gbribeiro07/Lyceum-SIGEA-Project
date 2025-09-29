import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Presentation from "./App.jsx";
import { Login } from "./App.jsx";
import { SignUp } from "./App.jsx";
import { Home } from "./App.jsx";
import { Professores } from "./App.jsx";
import { CalendarioPage } from "./App.jsx";
import { AlunosPage } from "./App.jsx";
// import PrivateRoute from "./Middlewares/PrivateRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Presentation" />} />

        <Route path="/Presentation" element={<Presentation />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Professores" element={<Professores />} />
        <Route path="/Calendario" element={<CalendarioPage />} />
        <Route path="/Alunos" element={<AlunosPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
