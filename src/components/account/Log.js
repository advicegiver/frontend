import React, { useState } from "react";

function Log(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("");

  function handleCredentialsUsername(e) {
    setUsername(e.target.value);
    console.log(username);
  }

  function handleCredentialsPassword(e) {
    setPassword(e.target.value);
    console.log(password);
  }

  function handleCredentialsType(e) {
    const type = e.target.checked ? "advicer" : "receiver";
    setUsertype(type);
    console.log(usertype);
  }

  function checkUser(event) {
    event.preventDefault();
    // CHECK USER AND PASSWORD
    //////////////////////////
    // RECEIVE USERNAME AND USER TYPE
    //////////////////////////
    if (password.length >= 4) {
      console.log("out of Log");
      props.handleLoginAction(username, usertype);
    } else {
      console.log("password too short");
    }
  }

  return (
    <form>
      <div>
        <label>Advicer ? (check for giving advice)</label>
        <input type="checkbox" onChange={handleCredentialsType} />
      </div>
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
