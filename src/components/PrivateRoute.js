import { useContext, useEffect } from 'react';
import { useNavigate, Route } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function PrivateRoute({ path, children }) {
  const { loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate('/login');
    }
  }, [loggedIn, navigate]);

  return (
    <Route path={path}>
      {children}
    </Route>
  );
}

export default PrivateRoute;
