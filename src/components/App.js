import '../App.css';
import Login from '../Pages/Login';
// import Sidebar from './Sidebar';
// import Home from './Home';
// import Newcase from '../Pages/Newcase';
import Dashboard from '../Pages/Dashboard';


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

    <div className='container-fluid bg-secondary min-vh-100'>
      <Login />
      {/* <div className='row'>
        <div className='col-2 bg-white vh-100'> */}
          <Dashboard />
        </div>
        // </div>
        // </div>
   




  );
}

export default App;
