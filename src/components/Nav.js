import React ,{ useState ,useEffect, useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import 'bootstrap/js/dist/dropdown';

function Nav() {

    const { username ,role} = useContext(AuthContext);
    const [compositeUsername, setCompositeUsername] = useState('');

    useEffect(() => {
       
        if(role ==="ROLE_USER")
        {
       
      
        setCompositeUsername(username+' (USER)');
        } else {

            setCompositeUsername(username+' (ADMIN)');
        }

      }, []);
   
      return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light" style={{ borderRadius: '10px' }}>
          <a className="navbar-brand" href="#/" style={{ borderRadius: '10px' }}>
            <img src="safari4.png" width="150" height="50" alt="" />
          </a>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            </ul>
            <div className="d-flex my-2 my-lg-0" style={{ borderRadius: '10px' }}>
              <label className="form-label me-sm-2" htmlFor="username">Logged In:</label>
              <span id="username">{compositeUsername}</span>
            </div>
          </div>
        </nav>
      );
      
      
      
}

export default Nav
