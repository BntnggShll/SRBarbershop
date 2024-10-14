import React from 'react';
import "./style/login.css"
const Login = () => {
  return (
    <div className="container">
      {/* Background Image */}
      <div className="background"></div>
      
      {/* Form Section */}
      <div className="form-section">
        <h1 className="login-title">Login</h1>

        <label htmlFor="email" className="input-label">Your Email</label>
        <input type="email" id="email" className="input-box" />

        <label htmlFor="password" className="input-label">Password</label>
        <input type="password" id="password" className="input-box" />
        <a href="#" className="forgot-password">Forgot Password</a>

        <button className="login-btn">Login</button>

        <div className="register-link">
          Don't have an account? <a href="#">Register</a>
        </div>
      </div>
      
      {/* <div className="image-section">
        <img src="/img/Login.jpg" alt="Side Image" className="side-image" />
      </div> */}
    </div>
  );
};

export default Login;
