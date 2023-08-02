import React, { useState } from 'react';
import axios from 'axios';
import { Modal,Button} from 'react-bootstrap';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
  timeout: 1000,
  headers: { 'Authorization': `Bearer ${localStorage.getItem('jwtToken')}` },
});

const CreateIncidentForm = ({ show, handleClose, onIncidentUpdate }) => {
  console.log("ever rendered?");
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      await instance.post('createincident', { message });

      setResponseMessage('Incident created successfully!');
      setIsLoading(false);
       
      
    } catch (error) {
      setResponseMessage('An error occurred while creating the incident.');
      setIsLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Incident</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <label>
            Incident Description:
            <textarea value={message} onChange={handleInputChange} required />
          </label>
          <input type="submit" value={isLoading ? 'Creating...' : 'Create Incident'} disabled={isLoading} />
        </form>
        {responseMessage && <div>{responseMessage}</div>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
  
};

export default CreateIncidentForm;
