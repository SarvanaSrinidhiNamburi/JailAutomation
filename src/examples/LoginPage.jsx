/*import React, { useState } from "react";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      onLogin();
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div style={styles.container}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/e/ea/Appolice%28emblem%29.png"
        alt="Logo"
        style={styles.logo}
      />
      <h1 style={styles.title}>AP Police Jail Automation System</h1>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          style={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    paddingTop: "60px",
    backgroundColor: "#f3f4f6",
    height: "100vh",
  },
  logo: {
    height: "80px",
  },
  title: {
    fontSize: "2rem",
    margin: "20px 0",
    color: "#1e3a8a",
  },
  form: {
    marginTop: "30px",
  },
  input: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    width: "250px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#2563eb",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default LoginPage;*/

/*import React, { useState } from "react";
import "../styles/login.css"; // Ensure this file exists

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      onLogin();
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/e/ea/Appolice%28emblem%29.png"
          alt="Logo"
          className="login-logo"
        />
        <h2 className="login-title">AP Police Jail Automation System</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          className="login-input"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="login-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
*/

import React, { useState } from "react";
import "../styles/login.css"; // Ensure this file exists

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authorizedUsers = {
    admin: "admin123",
    jailer101: "s101",
    jailer202: "s202",
  };

  const handleLogin = () => {
    if (username && password) {
      if (authorizedUsers[username] === password) {
        onLogin();
      } else {
        alert("Invalid username or password");
      }
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/e/ea/Appolice%28emblem%29.png"
          alt="Logo"
          className="login-logo"
        />
        <h2 className="login-title">AP Police Jail Automation System</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          className="login-input"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="login-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
