import '../App.css';
import Login from '../Pages/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from "react";
import Dashboard from '../Pages/Dashboard';
import ErrorPage from '../Pages/ErrorPage';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

function App() {
  const { loggedIn } = useContext(AuthContext);
  const [dashboardKey, setDashboardKey] = useState(0);

  const refreshDashboard = () => {
    console.log("before adding key :"+dashboardKey);
    setDashboardKey(prevKey => prevKey + 1); 
    console.log("after adding key :"+dashboardKey);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={loggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={loggedIn ? <Dashboard key={dashboardKey} onIncidentUpdate={refreshDashboard} /> : <Navigate to="/login" />} />
        {/* <Route path="/logs" element={loggedIn ? <Logs /> : <Navigate to="/login" />} />  */}
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
