import '../App.css';
import Login from '../Pages/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import ErrorPage from '../Pages/ErrorPage';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={loggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
