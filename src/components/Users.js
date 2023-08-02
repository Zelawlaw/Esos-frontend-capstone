import React, { useState, useEffect ,useContext } from "react";
import axios from "axios";
import getAxiosInstance from "../services/api2";
import { Button, Modal } from "react-bootstrap";
import CreateUserForm from "./CreateUserForm";
import { AuthContext } from "../contexts/AuthContext";
// const instance = axios.create({
//   baseURL: 'http://localhost:8080/api/v1/',
//   timeout: 1000,
//   headers: { 'Authorization': `Bearer ${localStorage.getItem('jwtToken')}` },
// });

const Users = ({ show, handleClose }) => {
 
  const [users, setUsers] = useState([]);
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);
  const { contextjwt} = useContext(AuthContext);

  useEffect(() => {
    if(show){getUsers();}
    
  }, [show]);
  const getUsers = async () => {
    try {
      const instance = getAxiosInstance(contextjwt);
      const response = await instance.get('getusers');
      
      console.log(JSON.stringify(response.data));
      setUsers(response.data);
    } catch (error) {
      console.error("An error occurred while fetching users:", error);
    }
  };

  const handleCreateUser = () => {
    setShowCreateUserModal(true);
  };



  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <nav>
            <a href="#/" onClick={handleCreateUser}>Create User</a>
          </nav>
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.username} ({user.role})</li>
            ))}
          </ul>
        </Modal.Body>
      </Modal>

      { <CreateUserForm
        show={showCreateUserModal}
        onHide={() => setShowCreateUserModal(false)}
        users={users}
        refreshUsers={getUsers}
      /> }
    </div>
  );
};

export default Users;
