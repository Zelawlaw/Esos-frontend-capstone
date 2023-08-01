import jwtDecode from 'jwt-decode';
import axios from 'axios';

const login = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:8080/api/v1/authenticate', { username, password });
        const decodedjwt = jwtDecode(response.data.token);
        console.log('decoded jwt:'+decodedjwt);
        // Store token in the local storage
        localStorage.setItem('jwtToken', response.data.token);

        return { username: decodedjwt.sub, role: decodedjwt.role };
    } catch (error) {
        throw new Error('Login failed');
    }
};

const loginService = {
  login,
};

export default loginService;
