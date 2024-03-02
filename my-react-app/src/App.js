// App.js
import React from 'react';
import { Route, Routes, NavLink, Navigate } from 'react-router-dom';
import Login from './component/login';
import Register from './component/register';

function App() {
  return (
    <div>
      <nav style={{ backgroundColor: '#333', overflow: 'hidden' }}>
        <ul style={{ listStyleType: 'none', margin: '0', padding: '0', display: 'flex', justifyContent: 'center' }}>
          <li style={{ float: 'left' }}>
            <NavLink to="/login" style={{ color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none', fontSize: '17px' }}>Login</NavLink>
          </li>
          <li style={{ float: 'left' }}>
            <NavLink to="/register" style={{ color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none', fontSize: '17px' }}>Register</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default App;
