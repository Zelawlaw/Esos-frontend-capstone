import React, { useState } from "react";
import axios from "axios";

function AddUser() {
  const [username, setUsername] = useState("");

  const addUser = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:8080/api/v1/users', { username });
      setUsername("");
      // After adding the user, refresh the user list or notify the parent to do so.
    } catch (error) {
      console.error('Failed to add user', error);
    }
  };

  return (
    <form onSubmit={addUser}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <input type="submit" value="Add User" />
    </form>
  );
}

export default AddUser;
