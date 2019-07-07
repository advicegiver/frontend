import { React, useState } from "react";

function Log(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleCredentials(value, type) {
    if (type === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  }

  function checkUser(username, password) {
    props.handleLoginAction(username);
  }

  return (
    <main>
      <div>
        <label>username:</label>
        <input
          type="text"
          value={username}
          onChange={() => handleCredentials(this.value, "username")}
        />
      </div>
      <div>
        <label>password:</label>
        <input
          type="password"
          value={password}
          onChange={() => handleCredentials(this.value, "password")}
        />
      </div>
      <button onClick={() => checkUser(username, password)}>log in</button>
    </main>
  );
}

export default Log;
