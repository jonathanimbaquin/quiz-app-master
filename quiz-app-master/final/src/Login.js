import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <a>
          Simulacro <b>ICFES</b> Website{" "}
        </a>
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value="" />

          <h5>Password</h5>
          <input type="password" value="" />

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p></p>

        <button className="login__registerButton">Create Account</button>
      </div>
    </div>
  );
}

export default Login;
