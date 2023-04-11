import React, { useState } from "react";
import HeaderBack from "../components/HeaderBack";
import { Navigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import { Toast } from "bootstrap";
import { Link } from "react-router-dom";

var styles = {
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "10px",
    height: "80vh",
  },

  container: {
    border: "1px solid rgb(0, 0, 0, 0.1)",
    borderRadius: "12px",
    margin: "18px 30px",
    padding: "16px",
    opacity: 0.8,
    boxShadow: "0px 0px 3px 3px rgb(0, 0, 0, 0.05)",
    width: "80%",
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
  },
};

export default function Register() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let regojb = { name, username, email, password };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(regojb),
    })
      .then((res) => {
        console.log("Registered");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome,
        senha,
        email,
        username,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      setLoggedIn(true);
    } else {
      alert("Alguma coisa deu errado.");
    }
  };

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <HeaderBack />

      <form style={styles.content} onSubmit={handleRegister}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          name="search"
          style={styles.container}
        ></input>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          name="search"
          style={styles.container}
        ></input>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          name="search"
          style={styles.container}
        ></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          name="search"
          style={styles.container}
        ></input>
        <button type="submit" className="login-button">
          Registre-se
        </button>
      </form>
    </div>
  );
}
