import React, { useState } from "react";

import Log from "./components/account/Log";
import Profile from "./components/Profile";

import "./App.css";

function App() {
  const [username, setUsername] = useState("");

  function handleLoginAction(username, pass) {
    setUsername(username);
    console.log("In App");
    console.log(username);
  }

  return (
    <div className="App">
      <h1>Advice giver</h1>
      {username !== "" ? (
        <Profile username={username} />
      ) : (
        <Log handleLoginAction={handleLoginAction} />
      )}
    </div>
  );
}

export default App;
