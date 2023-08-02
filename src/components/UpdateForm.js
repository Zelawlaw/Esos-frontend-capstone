import React, { useState , useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

function UpdateForm({ show, handleClose, incident, onIncidentUpdate }) {
  console.log("what about here?");
  const [update, setUpdate] = useState('');
  const [status, setStatus] = useState(incident?.status || '');

  useEffect(() => {
    setStatus(incident?.status || '');
  }, [incident]);


  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (update == null)
    {
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
        const response = await instance.post('updateincident' ,incidentUpdate);
        return response.data;
      } catch (error) {
        console.error('Failed to fetch incident summary', error);
        return null;
      }
    };

    const instance = axios.create({
      baseURL: 'http://localhost:8080/api/v1/',
      timeout: 1000,
      headers: {'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`}
    });

    updateIncident(incidentUpdate)
      .then(() => {
        alert("log saved!");
        onIncidentUpdate();
      })
      .catch((error) => {
    
        alert("log saving error");
      });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Incident</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <label>
            Update:
            <input type="text" value={update} onChange={(e) => setUpdate(e.target.value)} />
          </label>
          <label>
            Status:
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="resolved">Resolved</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateForm