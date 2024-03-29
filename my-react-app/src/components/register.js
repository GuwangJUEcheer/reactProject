import React, { useState, useContext } from 'react';
import Cookies from 'js-cookie';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import '../css/register.css'; // 假设你将自定义的CSS样式保存在这个文件中
import { AxiosContext } from '../App'; // 导入上下文
import { useUser } from '../context/userContext';


const Register = ({ show, onHide }) => {

  const axiosInstance = useContext(AxiosContext);

  const { user, setUser } = useUser();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    address: '',
    phonePart1: '',
    phonePart2: '',
    phonePart3: '',
    email: '',
    gender: '',
    postalCode: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/user/register', formData);
      const { token, userId, userName } = response.data;
      const user = { userId, userName };
      setUser(user);
      // 存储 JWT 到 cookie
      Cookies.set('token', token, { expires: 7 }); // 有效期为 7 天

      // 如果你有父组件或全局状态管理器，这里也可以更新用户状态
      // updateUserState(user); // 假设的函数来更新状态

      // 跳转到登录页面或其他页面
      // history.push('/login');
    } catch (error) {
      console.error('注册失败:', error);
    }
    onHide(); // Close modal on successful registration
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontWeight: 'bold', fontSize: '25px', textAlign: 'center', width: '100%' }}>注册用户</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>用户名</Form.Label>
            <Form.Control type="text" name="username" onChange={handleChange} required />
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" style={{ marginTop: '10px' }}>
            <Form.Label column sm="2">
              密码
            </Form.Label>
            <Col sm="12">
              <Form.Control type="password" />
            </Col>
          </Form.Group>

          <Form.Group controlId="formBasicAddress">
            <Form.Label>住所</Form.Label>
            <Form.Control type="text" name="address" onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formBasicPhone" className="phone-group">
            <Form.Label>电话</Form.Label>
            <div className="phone-inputs">
              <Form.Control type="text" name="phonePart1" onChange={handleChange} required />
              <span>-</span>
              <Form.Control type="text" name="phonePart2" onChange={handleChange} required />
              <span>-</span>
              <Form.Control type="text" name="phonePart3" onChange={handleChange} required />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>邮箱</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <div className="d-grid gap-2" style={{ marginTop: '10px' }}>
            <Button variant="primary" type="submit" className="mt-3">
              注册
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Register;
