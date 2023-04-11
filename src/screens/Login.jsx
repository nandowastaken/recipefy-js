import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderBack from "../components/HeaderBack";
import "../styles/Login.css";

var styles = {
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "10px",
    height: "80vh",
  },
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      setLoggedIn(true);
    } else {
      alert("Usuário ou senha incorretos.");
    }
  };

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <HeaderBack />

      <div className="content" style={styles.content}>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="login-header">
            <h1 className="welcomeback">Seja bem-vindo de volta!</h1>
            <p className="welcome-paragraph">É bom ver você aqui de novo!</p>
          </div>

          <div className="login-label-container">
            <label htmlFor="email" className="login-label">
              Email *
            </label>
            <input
              type="text"
              id="email"
              className="input-box"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-label-container">
            <label htmlFor="password" className="login-label">
              Senha *
            </label>
            <input
              type="password"
              id="password"
              className="input-box"
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="final-part">
            <button type="submit" className="login-button">
              Entrar
            </button>
            <Link to="/register" className="create-account-text">
              Criar uma conta.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
