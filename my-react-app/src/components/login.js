// Login.js
import React from 'react';
import '../css/login.css'; // 引入样式文件
import { Modal, Button, Form } from 'react-bootstrap';

const Login = ({ show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide} backdrop="static" keyboard={false} centered>
            <Modal.Header closeButton>
                <Modal.Title style={{ fontWeight: 'bold' }}>登录</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="input-group">
                        <label htmlFor="email" style={{ size: '20px', color: 'gray' }}>邮箱/用户名</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password" style={{ size: '20px', color: 'gray' }}>密码</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onHide}>
                    登录
                </Button>
                <Button variant="secondary" onClick={onHide}>
                    关闭
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Login;
