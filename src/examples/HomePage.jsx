/*import React from "react";
import "../styles/home.css";
const tasks = [
  { name: "Prisoner Details", key: "prisoners" },
  { name: "Leave Permission", key: "leave" },
  { name: "Lawyer Assigned", key: "lawyer" },
  { name: "Cell Assignment", key: "cell" },
];

const HomePage = ({ onSelectTask, onLogout }) => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logoTitle}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/ea/Appolice%28emblem%29.png"
            alt="Logo"
            style={styles.logo}
          />
          <h1 style={styles.title}>AP Police Jail Automation System</h1>
        </div>
        <button style={styles.logout} onClick={onLogout}>
          Logout
        </button>
      </header>

      <div style={styles.taskPanel}>
        {tasks.map((task) => (
          <button
            key={task.key}
            style={styles.taskButton}
            onClick={() => onSelectTask(task.key)}
          >
            {task.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const HomePage = ({ onNavigate }) => {
  return (
    <div className="home-container">
      <div className="header">Jailer Dashboard</div>

      <div className="task-buttons">
        <button className="task-btn" onClick={() => onNavigate("prisoners")}>
          Prisoner Details
        </button>

        <button className="task-btn green" onClick={() => onNavigate("leave")}>
          Leave Sanction
        </button>

        <button
          className="task-btn red"
          onClick={() => alert("Lawyer Assignment coming soon")}
        >
          Lawyer Assignment
        </button>
      </div>
    </div>
  );
};
*/
/*const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#e5e7eb",
  },
  header: {
    backgroundColor: "#1e40af",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    alignItems: "center",
  },
  logoTitle: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "40px",
    marginRight: "10px",
  },
  title: {
    fontSize: "1.5rem",
  },
  logout: {
    backgroundColor: "#ef4444",
    border: "none",
    padding: "8px 16px",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
  },
  taskPanel: {
    padding: "40px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  taskButton: {
    padding: "20px",
    fontSize: "1rem",
    borderRadius: "10px",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    cursor: "pointer",
    transition: "0.3s",
  },
};
*/
/*export default HomePage;*/
/*import React from "react";
import "../styles/home.css"; // Make sure this path is correct

const HomePage = ({ onSelectTask, onLogout }) => {
  const tasks = [
    { key: "prisoners", name: "Prisoner Details" },
    { key: "leave", name: "Leave Sanction" },
    { key: "lawyer", name: "Lawyer Assignment" },
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo-title">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/ea/Appolice%28emblem%29.png"
            alt="Logo"
            className="logo"
          />
          <h1 className="title">AP Police Jail Automation System</h1>
        </div>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </header>

      <div className="task-buttons">
        {tasks.map((task, index) => (
          <button
            key={task.key}
            className={`task-btn ${
              index === 1 ? "green" : index === 2 ? "red" : ""
            }`}
            onClick={() => {
              if (task.key === "lawyer") {
                alert("Lawyer Assignment coming soon");
              } else {
                onSelectTask(task.key);
              }
            }}
          >
            {task.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
*/
import React from "react";
import "../styles/home.css"; // Make sure this path is correct

const HomePage = ({ onSelectTask, onLogout }) => {
  const tasks = [
    { key: "prisoners", name: "Prisoner Details" },
    { key: "leave", name: "Leave Sanction" },
    { key: "reports", name: "Daily Reports" },
    { key: "attendance", name: "Staff Attendance" },
    { key: "maintenance", name: "Cell Maintenance Log" },
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo-title">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/ea/Appolice%28emblem%29.png"
            alt="Logo"
            className="logo"
          />
          <h1 className="title">AP Police Jail Automation System</h1>
        </div>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </header>

      <div className="task-buttons">
        {tasks.map((task, index) => (
          <button
            key={task.key}
            className={`task-btn ${
              index === 1 ? "green" : index === 2 ? "red" : ""
            }`}
            onClick={() => {
              if (
                task.key === "reports" ||
                task.key === "attendance" ||
                task.key === "maintenance"
              ) {
                alert(`${task.name} feature coming soon`);
              } else {
                onSelectTask(task.key);
              }
            }}
          >
            {task.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
