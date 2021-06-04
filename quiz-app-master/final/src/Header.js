import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header class="main-header dark-theme">
      <ul class="header-options">
        <li class="title">
          Simulacro <b>ICFES</b> Website{" "}
        </li>
        <li class="option"> Home </li>
        <li class="option"> Contactenos </li>
        <li class="option"> Sobre Nosotros </li>
        <li class="option">
          <Link to="/Categories">Categorias</Link>
        </li>
        <li class="option">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
