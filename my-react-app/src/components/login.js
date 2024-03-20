import React, { useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import '../css/login.css'; // 引入样式文件
import { Modal, Button, Form } from 'react-bootstrap';
import { useUser } from '../context/userContext';
import { AxiosContext } from '../App'; // 导入上下文
import { Alert } from 'react-bootstrap';

const LoginFailedAlert = () => (
    <Alert variant="danger">
        登录失败，请检查您的用户名和密码。
    </Alert>
);

const Login = ({ show, onHide }) => {
    const [loginFailed, setLoginFailed] = useState(false);
    const axiosInstance = useContext(AxiosContext);
    const { setUser } = useUser();
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
    });

    // 自动隐藏登录失败提示
    useEffect(() => {
        let timer;
        if (loginFailed) {
            timer = setTimeout(() => {
                setLoginFailed(false);
            }, 5000); // 5秒后自动隐藏提示
        }
        return () => clearTimeout(timer); // 清除计时器
    }, [loginFailed]);//LoginFailed是只要变化就会触发userEffect

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/user/login', formData);
            const { token, userId, userName, loginResult } = response.data;
            if (loginResult === "OK") {
                setLoginFailed(false);
                const user = { userId, userName };
                setUser(user);
                // 存储 JWT 到 cookie
                Cookies.set('token', token, { expires: 7 }); // 有效期为 7 天
                onHide(); // Close modal on successful registration
            } else {
                setLoginFailed(true);
                setUser(null);
            }
        } catch (error) {
            console.error('登陆失败:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <Modal show={show} onHide={() => { onHide(); setLoginFailed(false); }} backdrop="static" keyboard={false} centered>
            <Modal.Header closeButton>
                <Modal.Title style={{ fontWeight: 'bold' }}>登录</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {loginFailed && <LoginFailedAlert />}
                <Form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email" style={{ size: '20px', color: 'gray' }}>邮箱/用户名</label>
                        <input type="email" id="email" name="userName" value={formData.userName} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password" style={{ size: '20px', color: 'gray' }}>密码</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
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
