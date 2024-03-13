import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Badge} from 'react-bootstrap';
import '../css/MyNavbar.css'; // 引入自定义CSS样式
import logoImage from '../asset/logo.jpg';

const MyNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Navbar collapseOnSelect expand="lg" bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} className="mb-3">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logoImage} className="navbar-logo" />
          <span>Talk Whatever you want</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <button onClick={toggleDarkMode} className="btn btn-secondary">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <Nav.Link href="#features">主页</Nav.Link>
            <Nav.Link href="#pricing">发起提问</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown title="更多..." id="collasible-nav-dropdown" className="justify-content-end">
              <NavDropdown.Item href="#action/message">消息中心 
              <Badge bg="danger" style={{marginLeft:'15px'}}>14</Badge>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/indvdetail">个人资料</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/logout">退出登录</NavDropdown.Item>
            </NavDropdown>
            <Navbar.Text style={{ marginRight: '10px', marginLeft: '45px', backgroundColor: '#007bff', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
               <a href="#login" style={{ color: 'white' }}>John Doe</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
