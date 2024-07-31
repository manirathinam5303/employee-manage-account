import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleLoginpage = (event) => {
    event.preventDefault();

    const validationErrors = {};

    if (!username) {
      validationErrors.username = 'Username is required';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Login successfully");
    }
    setUsername("")
    setPassword("")
    navigate("/employetetails")
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="login_form ">
      <div className="container" >
       
        <form onSubmit={handleLoginpage}>
        <div>
          <h1 className='d-flex justify-content-center mb-5  header' >Login</h1>
        </div>
          <div className="row mb-3 align-items-center">
            <label className="col-sm-2 col-md-4 col-lg-5 text-sm-start text-md-end">Username</label>
            <div className="col-sm-10 col-md-8 col-lg-7">
              <input 
                type="text" 
                className="form-control" 
                placeholder="User_name" 
                style={{ maxWidth: '300px' }} 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <div className="text-danger">{errors.username}</div>}
            </div>
          </div>
          <div className="row mb-3 align-items-center">
            <label className="col-sm-2 col-md-4 col-lg-5 text-sm-start text-md-end">Password</label>
            <div className="col-sm-10 col-md-8 col-lg-7">
              <input 
                type="password" 
                className="form-control" 
                placeholder="Password" 
                style={{ maxWidth: '300px' }} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>
          </div>
          <div className="btn_1">
            <button type="submit" className="btn btn-primary">Login</button>
            <div>
              <p onClick={handleRegisterClick} style={{ cursor: 'pointer', color: 'blue' }}>Register?</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
