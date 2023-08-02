import React, { useState, useEffect ,useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import getAxiosInstance from '../services/api2';
import { AuthContext } from '../contexts/AuthContext';

function UpdateForm({ show, handleClose, incident, onIncidentUpdate }) {
  const [update, setUpdate] = useState("");
  const [status, setStatus] = useState(incident?.status || "");
  const [notification, setNotification] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { contextjwt} = useContext(AuthContext);

  useEffect(() => {
    setStatus(incident?.status || "");
  }, [incident]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (update == null) {
      alert("update cannot be empty");
      return;
    }

    const incidentUpdate = {
      incidentId: incident.incidentID,
      update,
      status,
    };

    const updateIncident = async (incidentUpdate) => {
      try {
        const instance = getAxiosInstance(contextjwt);
        const response = await instance.post("updateincident", incidentUpdate);
        return response.data;
      } catch (error) {
        console.error("Failed to fetch incident summary", error);
        return null;
      }
    };

    // const instance = axios.create({
    //   baseURL: "http://localhost:8080/api/v1/",
    //   timeout: 1000,
    //   headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
    // });

    updateIncident(incidentUpdate)
      .then(() => {
        
        setNotification("Log has been added successfully!");
      setIsSuccess(true);
      setTimeout(() => { // Add a 3-second delay before calling onIncidentUpdate
        onIncidentUpdate();
      }, 3000);
      })
      .catch((error) => {
        setNotification("Log saving error!");
      setIsSuccess(false);
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Incident</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div
          style={{
            color: isSuccess ? "green" : "red",
            marginBottom: "10px",
          }}
        >
          {notification}
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Update:</Form.Label>
            <Form.Control
              type="text"
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Status:</Form.Label>
            <Form.Control
              as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="resolved">Resolved</option>
            </Form.Control>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateForm;
