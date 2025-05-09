/*
import React, { useState } from "react";
import LoginPage from "./examples/LoginPage.jsx";
import HomePage from "./examples/HomePage.jsx";
import PrisonerDetails from "./examples/PrisonerDetails.jsx";
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-200 font-sans">
      {!loggedIn ? (
        <LoginPage onLogin={() => setLoggedIn(true)} />
      ) : currentTask === "prisoners" ? (
        <PrisonerDetails onBack={() => setCurrentTask(null)} />
      ) : (
        <HomePage
          onSelectTask={(task) => setCurrentTask(task)}
          onLogout={() => {
            setLoggedIn(false);
            setCurrentTask(null);
          }}
        />
      )}
    </div>
  );
};

export default App;*/
import React, { useState } from "react";
import LoginPage from "./examples/LoginPage.jsx";
import HomePage from "./examples/HomePage.jsx";
import PrisonerDetails from "./frontend/PrisonerDetails.js";
import LeaveSanction from "./examples/LeaveSanction.jsx";
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-200 font-sans">
      {!loggedIn ? (
        <LoginPage onLogin={() => setLoggedIn(true)} />
      ) : currentTask === "prisoners" ? (
        <PrisonerDetails onBack={() => setCurrentTask(null)} />
      ) : currentTask === "leave" ? (
        <LeaveSanction onBack={() => setCurrentTask(null)} />
      ) : (
        <HomePage
          onSelectTask={(task) => setCurrentTask(task)}
          onLogout={() => {
            setLoggedIn(false);
            setCurrentTask(null);
          }}
        />
      )}
    </div>
  );
};

export default App;
