import React from "react";
const Login = () => {
  return (
    <div id="login">
      <div className="container-login">
        {/* Background Image */}
        <div className="background-login"></div>
        <img src="../img/Login.jpg" alt="Side Image" className="image-login" />

        {/* Form Section */}
        <div className="form-section-login">
          <h1 className="login-title">Login</h1>

          <label htmlFor="email" className="input-label-login">
            Your Email
          </label>
          <input type="email" id="email" className="input-box-login" />

          <label htmlFor="password" className="input-label-login">
            Password
          </label>
          <input type="password" id="password" className="input-box-login" />
          <a href="#" className="forgot-password">
            Forgot Password
          </a>

          <button className="login-btn">Login</button>

          <div className="register-link">
            Don't have an account? <a href="/register">Register</a>
          </div>
        </div>

        
      
      </div>
    </div>

  );
};

export default Login;
