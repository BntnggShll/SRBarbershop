import React from 'react';

const Login = () => {
  return (
    <div className="container">
      {/* Background Image */}
      <div className="background"></div>
      
      {/* Form Section */}
      <div className="form-section">
        <h1 className="login-title">Login</h1>

        <label htmlFor="email" className="input-label">Your Email</label>
        <input type="email" id="email" className="input-box" placeholder="Enter your email"/>

        <label htmlFor="password" className="input-label">Password</label>
        <input type="password" id="password" className="input-box" placeholder="Enter your password"/>

        <button className="login-btn">Login</button>
        <a href="#" className="forgot-password">Forgot Password</a>
        
        <div className="register-link">
          Don't have an account? <a href="#">Register</a>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="image-section">
        <img src="login.jpg" alt="Side Image" className="side-image" />
      </div>
    </div>
  );
};

export default Login;
