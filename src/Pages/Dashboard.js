import "../App.css";
import React from "react";
// import Nav from '../components/Nav'
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";

function Dashboard(props) {
  const onIncidentUpdate = props.onIncidentUpdate;
  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        <div className="col-2 bg-white vh-100">
          <Sidebar  onIncidentUpdate={onIncidentUpdate}  />
        </div>
        <div className="col">
          <Home onIncidentUpdate={onIncidentUpdate} />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Dashboard;
