import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import loginService from "../services/loginService";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [role, setRole] = useState("");
  const[errorMessage,setErrorMessage] = useState('');
  const { setAuthusername, loggedIn, setLoggedIn, setRole, setContextjwt } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginService.login(username, password);
      setUsername(userData.username);
      setAuthusername(userData.username);
      setRole(userData.role);
      setContextjwt(userData.token);
      setLoggedIn(true);
      setErrorMessage('');
      console.log("Successful login");
      // console.log('username :'+userData.username);
      // console.log('role :'+userData.role);

      navigate("/dashboard");
    } catch (error) {
      setErrorMessage("Incorrect username/Password");
      console.log("Failed login");
    }
  };

  return (
    <>
      <div
        style={{
          borderColor: "white",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url("loginpage.jpg")`,
        }}
      >
        <div className="d-flex vh-100 justify-content-center align-items-center border border-primary">
          <div className="p-3 bg-transparent w-25">
            <div className="big-title text-center text-white">
              <img src="safaricom-logo.png" width="200" height="70" alt="" />
              <h3 style={{ marginTop: "60px" }}>
                <b>eSOS</b>
              </h3>{" "}
              {/* Apply styling here */}
            </div>

            <form action="">
              <div className="mb-3 text-white">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="Your username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-3 text-white">
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
            {errorMessage && 
          <div style={{ color: 'red' }}>
            {errorMessage}
          </div>
        }
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
