import '../App.css';
import Login from '../Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import ErrorPage from '../Pages/ErrorPage';
// import Sidebar from './Sidebar';
// import Home from './Home';
// import Newcase from '../Pages/Newcase';
// import Dashboard from '../Pages/Dashboard';


function App() {
  return (
    // <div className='container-fluid bg-secondary min-vh-100'>
    //   <Login />
    //   <div className='row'>
    //     <div className='col-2 bg-white vh-100'>
    //       <Sidebar />
    //     </div>
    //     <div className='col'>
    //       <Home />
    //     </div>
    //     </div>
    //     <div>
    //   <Newcase />
    //   </div>
    //   </div>

    <>
    <BrowserRouter>
      <Routes> 
        <Route index element = {<Login />} />
        <Route path='/dashboard' element = {<Dashboard />} />
        <Route path='*' element = {<ErrorPage/>} /> 
      </Routes>
    </BrowserRouter>


    </>

    // <div className='container-fluid bg-secondary min-vh-100'>
    //   <Login />
    //   {/* <div className='row'>
    //     <div className='col-2 bg-white vh-100'> */}
    //       {/* <Dashboard /> */}
    //       {/* <Newcase /> */}
    //     </div>
        // </div>
        // </div>
   




  );
}

export default App;
