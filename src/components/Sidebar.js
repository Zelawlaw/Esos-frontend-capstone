import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import CreateIncidentForm from "./CreateIncidentForm";
import Users from "./Users";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles.css";

function Sidebar(props) {
  const onIncidentUpdate = props.onIncidentUpdate;
  const { setLoggedIn ,role,setContextjwt} = useContext(AuthContext);
  const [showCreateIncidentModal, setShowCreateIncidentModal] = useState(false);
  const [showUsersModal, setShowUsersModal] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setContextjwt('');
    setLoggedIn(false);
    navigate("/login");
  };

  const openCreateIncidentModal = (e) => {
    e.preventDefault();
    setShowCreateIncidentModal(true);
  };

  const closeCreateIncidentModal = () => {
    onIncidentUpdate();
    setShowCreateIncidentModal(false);
  };

  const openUsersModal = (e) => {
    console.log("clicked?");
    setShowUsersModal(true);
  };
  const closeUsersModal = () => {
    onIncidentUpdate();
    setShowUsersModal(false);
  };

  return (
    <div>
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <i className="bi bi-amd me-2 fs-4"></i>
        <span className="brand-name fs-4">eSOS</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a href="#/" className="list-group-item py-2">
          <i className="bi bi-house fs-5 me-3"></i>
          <span className="fs-5">Home</span>
        </a>
        {role === "ROLE_ADMIN" && (
          <a href="#/"
           className="list-group-item py-2"
           onClick={openUsersModal}
          >
            <i className="bi bi-people-fill fs-5 me-3"
            ></i>
            <span className="fs-5">Users</span>
          </a>
        )}
        <a
          href="#/"
          className="list-group-item py-2"
          onClick={openCreateIncidentModal}
        >
          <i className="bi bi-prescription2 fs-5 me-3"></i>
          <span className="fs-5">Create Incident</span>
        </a>
        <a href="#/" className="list-group-item py-2" onClick={handleLogout}>
          <i className="bi bi-power fs-5 me-3"></i>
          <span className="fs-5">Log out</span>
        </a>
      </div>
     
    </div>
    <CreateIncidentForm
        show={showCreateIncidentModal}
        handleClose={closeCreateIncidentModal}
        onIncidentUpdate={onIncidentUpdate}
      />
       <Users
        show={showUsersModal}
        handleClose={closeUsersModal} 
      />
    </div>
  );
}

export default Sidebar;
