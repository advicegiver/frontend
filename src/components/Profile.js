import React from "react";

const Profile = props => {
  return (
    <main>
      <label>{props.username} welcome!</label>
      <hr />
      {props.usertype === "advicer" ? (
        <button>Give advice</button>
      ) : (
        <button>Receive advice</button>
      )}
    </main>
  );
};

export default Profile;
