import React, { useState } from "react";

function Log(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleCredentialsUsername(e) {
    setUsername(e.target.value);
    console.log({ username });
  }

  function handleCredentialsPassword(e) {
    setPassword(e.target.value);
  }

  function checkUser(event) {
    event.preventDefault();
    console.log("out of Log");
    props.handleLoginAction(username);
  }

  return (
    <form>
      <div>
        <label>username:</label>
        <input
          type="text"
          value={username}
          onChange={handleCredentialsUsername}
        />
      </div>
      <div>
        <label>password:</label>
        <input
          type="password"
          value={password}
          onChange={handleCredentialsPassword}
        />
      </div>
      <button onClick={checkUser}>log in</button>
    </form>
  );
}

export default Log;
