import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
// import { useState } from "react";



// export const Login = () => {
//     return {
//         <Login />
//     };
// }

function Login () {

    // eslint-disable-next-line
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate ('/dashboard')
        console.log("Successful login");
    } 

    return (
        <>
        {/* <p> Hey</p>;  */}

            <div className="d-flex vh-100 justify-content-center align-items-center bg-success">
            <div className="p-3 bg-white w-25">
            <div className="big-title text-center"><h2>eSOS</h2></div>
            <form action="">
                <div className="mb-3">
                    <label for="email">Email</label>
                    <input type="email" placeholder="xxxxx@safaricom.co.ke" className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="password">Password</label>
                    <input type="password" placeholder="xxxxxxxxxxx" className="form-control"/>
                </div>
           
                <button className="btn btn-success" type="submit" onClick={handleSubmit}> Log In </button>
            </form>
            </div>
        </div>

       

        </>
    )
}

export default Login