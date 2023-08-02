import React, { useState } from "react";
import axios from "axios";
import instance from "../services/api";
import { Button, Modal, Form } from "react-bootstrap";

// const instance = axios.create({
//   baseURL: "http://localhost:8080/api/v1/",
//   timeout: 1000,
//   headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
// });
const CreateUserForm = ({ show, onHide, users, refreshUsers }) => {
  const [notification, setNotification] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    role: "USER",
    managerId: "",
  });

  const [isManagerSelected, setIsManagerSelected] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "managerId") {
      setIsManagerSelected(value.trim() !== "");
    }
  };

  const handleSubmit = async () => {
    try {
      let payload = { ...userData };

      if (payload.managerId.trim() === "") {
        delete payload.managerId;
      }
      console.log(JSON.stringify(payload));
     
      await instance.post("createuser", payload);
      refreshUsers();
      setNotification("User has been added successfully!");
      setIsSuccess(true);
    } catch (error) {
      console.error("An error occurred while creating the user:", error);
      setNotification("An error occurred while adding the user.");
      setIsSuccess(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create User</Modal.Title>
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

        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Select
              name="role"
              onChange={handleInputChange}
              defaultValue="USER"
            >
              <option value="ADMIN">ADMIN</option>
              <option value="USER">USER</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Manager ID</Form.Label>
            <Form.Select name="managerId" onChange={handleInputChange} required>
              <option value="">Select Manager</option>{" "}
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.username}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Create User</Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateUserForm;
