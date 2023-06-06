import '../App.css';
import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';


function App() {
  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className='row'>
        <div className='col-2 bg-white vh-100'>
        <Sidebar />
        </div>
        <div className='col-auto'>
          <Home />

        </div>
   
      </div>
      <Header />
      <Login />
      
      {/* <Dashboard /> */}
      </div>
  );
}

export default App;
