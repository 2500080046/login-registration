
import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [details, setDetails] = useState("");
  const [message, setMessage] = useState("");

  function register(e) {
    e.preventDefault();
    setDetails("Name: " + name + "\nEmail: " + email);
    setMessage("Registration Successful!");
  }

  function login(e) {
    e.preventDefault();

    if (loginEmail === email && loginPassword === password && email !== "") {
      setMessage("Login Successful!");
    } else {
      setMessage("Invalid Email or Password!");
    }
  }

  return (
    <div className="container">
      <h1>Login and Registration</h1>

      <h2>Registration Form</h2>

      <form onSubmit={register}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>

      <h3>Registered Details</h3>
      <pre>{details}</pre>

      <hr />

      <h2>Login Form</h2>

      <form onSubmit={login}>
        <input
          type="email"
          placeholder="Enter Email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <h3>{message}</h3>
    </div>
  );
}

export default App;
