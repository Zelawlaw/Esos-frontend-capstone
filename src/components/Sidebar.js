import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles.css'

function Sidebar() {
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className='bg-white sidebar p-2'>
      <div className='m-2'>
        <i className='bi bi-amd me-2 fs-4'></i>
        <span className='brand-name fs-4'>eSOS</span>
      </div>
      <hr className='text-dark'/>
      <div className='list-group list-group-flush'>
        <a href="#/" className='list-group-item py-2'>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span className='fs-5'>Dashboard</span>
        </a>
        <a href="#/" className='list-group-item py-2'>
          <i className='bi bi-house fs-5 me-3'></i>
          <span className='fs-5'>Home</span>
        </a>
        <a href="#/" className='list-group-item py-2'>
          <i className='bi bi-people-fill fs-5 me-3'></i>
          <span className='fs-5'>Users</span>
        </a>
        <a href="#/" className='list-group-item py-2'>
          <i className='bi bi-prescription2 fs-5 me-3'></i>
          <span className='fs-5'>Incidences</span>
        </a>
        <a href="#/" className='list-group-item py-2'>
          <i className='bi bi-universal-access fs-5 me-3'></i>
          <span className='fs-5'>Profile</span>
        </a>
        <a href="#/" className='list-group-item py-2' onClick={handleLogout}>
        <i className='bi bi-power fs-5 me-3'></i>
        <span className='fs-5'>Log out</span>
      </a>
         
      </div>
    </div>
  )
}

export default Sidebar