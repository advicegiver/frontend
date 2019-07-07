import { React, useState } from "react";

import Log from "./components/account/Log";

import "./App.css";

function App() {
  const [users,setUser] = useState([])
  const [logged, setLogged] = useState(users);

  function handleLoginAction(user) {
    setLogged(users.add(user));
  }

  return (
    <div className="App">
      <h1>Advice giver</h1>
      <Log handleLoginAction={handleLoginAction} />
    </div>
  );
}

export default App;
