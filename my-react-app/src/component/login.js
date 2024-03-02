// Login.js
import React from 'react';
import '../css/login.css'; // 引入样式文件
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
                <p className="form-footer">Don't have an account? <Link to="/register">Sign up</Link></p>
            </form>
        </div>
    );
};

export default Login;
