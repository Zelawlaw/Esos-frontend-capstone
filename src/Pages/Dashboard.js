import '../App.css';
import React from 'react'
// import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import Home from '../components/Home'

function Dashboard() {
  return (
    <div className='container-fluid bg-secondary min-vh-100'>
        <div className='row'>
        <div className='col-2 bg-white vh-100'>
          <Sidebar />
        </div>
        <div className='col'>
          <Home />
        </div>
        </div>
        <div>
        </div>
      </div>
  )
}

export default Dashboard