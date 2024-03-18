import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Badge, Button, Form, FormControl } from 'react-bootstrap';
import '../css/MyNavbar.css'; // 引入自定义CSS样式
import logoImage from '../asset/logo.jpg';
import { useUser } from '../context/userContext'; 
import Cookies from 'js-cookie';

const MyNavbar = ({ onLoginClick, onRegisterClick }) => {
  const { user ,setUser} = useUser();
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery] = useState(''); // 用于存储搜索查询的状态 
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const logOut = () =>{
    setUser(null);
    Cookies.remove('token'); 
  }
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
            <Nav.Link href="#features" style={{ width: '100px' }}>主页</Nav.Link>
            <Nav.Link href="#pricing" style={{ width: '140px' }}>发起提问</Nav.Link>
          </Nav>
          <Form className="d-flex custom-form" style={{ marginLeft: '10px' }}>
            <FormControl
              type="search"
              placeholder="搜索问题"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
            />
            <Button variant="outline-success" style={{ width: '70px' }}>搜索</Button>
          </Form>
          <Navbar.Collapse className="justify-content-end">
            {user ? (
              <NavDropdown title={user.userName} id="collasible-nav-dropdown" className="justify-content-end">
                <NavDropdown.Item href="#action/message">消息中心<Badge bg="danger" style={{ marginLeft: '15px' }}>14</Badge></NavDropdown.Item>
                <NavDropdown.Item href="#action/indvdetail">个人资料</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOut}>退出登录</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Button variant="info" onClick={onRegisterClick} style={{ width: '100px' }}>
                    注册
                </Button>
                <Navbar.Text style={{ marginLeft: '5px' }}>
                  <Button variant="primary" onClick={onLoginClick} style={{ width: '100px' }}>
                    登录
                  </Button>
                </Navbar.Text>
              </>
            )}
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
