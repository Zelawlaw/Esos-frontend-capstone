import React, { useState ,useContext } from 'react';
import axios from 'axios';
import getAxiosInstance from '../services/api2';
import { Modal,Button,Form} from 'react-bootstrap';
import { AuthContext } from '../contexts/AuthContext';
// const instance = axios.create({
//   baseURL: 'http://localhost:8080/api/v1/',
//   timeout: 1000,
//   headers: { 'Authorization': `Bearer ${localStorage.getItem('jwtToken')}` },
// });

const CreateIncidentForm = ({ show, handleClose, onIncidentUpdate }) => {

  const { contextjwt} = useContext(AuthContext);

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const createIncident = async () => {
      try {
        const instance = getAxiosInstance(contextjwt);
        const response = await instance.post('createincident', { message });
        return response.data;
      } catch (error) {
        console.error("Failed to create ticket", error);
        return null;
      }
    };

    setIsLoading(true);
    createIncident()
      .then(() => {
        console.log("has been done?");
        setResponseMessage('Incident created successfully!');
        setIsSuccess(true);
        setIsLoading(false);
      })
      .catch((error) => {
        setResponseMessage('An error occurred while creating the incident.');
        setIsLoading(false);
        setIsSuccess(false);
      });
    // try {
    //   console.log(message)
    //   console.log("token in incident form :"+localStorage.getItem('jwtToken'));
    //   await instance.post('createincident', { message });

    //   setResponseMessage('Incident created successfully!');
    //   setIsSuccess(true);
    //   setIsLoading(false);
       
      
    // } catch (error) {
    //   setResponseMessage('An error occurred while creating the incident.');
    //   setIsLoading(false);
    //   setIsSuccess(false);
    // }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Incident</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {responseMessage && 
          <div style={{ color: isSuccess ? 'green' : 'red' }}>
            {responseMessage}
          </div>
        }
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Incident Description:</Form.Label>
            <Form.Control as="textarea" value={message} onChange={handleInputChange} required />
          </Form.Group>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Creating...' : 'Create Incident'}
          </Button>
        </Form>
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
