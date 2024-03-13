// Register.js
import React from 'react';
import '../css/register.css'; // 假设你有专门的CSS文件

const Register = () => {
  return (
    <div className="register-container">
      <form className="register-form">
        <h2>Register</h2>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
