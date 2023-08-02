import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import loginService from "../services/loginService"; 
import { AuthContext } from '../contexts/AuthContext';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [role, setRole] = useState(""); 
  const { loggedIn, setLoggedIn ,setRole,setContextjwt} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginService.login(username, password);
      setUsername(userData.username);
      setRole(userData.role);
      setContextjwt(userData.token);
      setLoggedIn(true); 
      console.log("Successful login");
     // console.log('username :'+userData.username);
     // console.log('role :'+userData.role);

      navigate("/dashboard");
    } catch (error) {
      console.log("Failed login");
    }
  };

  return (
    <>
      {/* <p> Hey</p>;  */}

      <div className="d-flex vh-100 justify-content-center align-items-center bg-success">
        <div className="p-3 bg-white w-25">
          <div className="big-title text-center">
            <h2>eSOS</h2>
          </div>
          <form action="">
            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Your username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)} 

              />
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="xxxxxxxxxxx"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>

            <button
              className="btn btn-success"
              type="submit"
              onClick={handleSubmit}
            >
              {" "}
              Log In{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
