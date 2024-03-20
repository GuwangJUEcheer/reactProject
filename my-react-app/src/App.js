// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import Login from './components/login';
import Register from './components/register';
import PublishForm from './components/publish'
import axios from './axios/axios'
import "./App.css"
export const AxiosContext = React.createContext(axios); // 创建一个React context

function App() {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);
  const toggleRegisterModal = () => setShowRegisterModal(!showLoginModal);
  return (
    <AxiosContext.Provider value={axios}>
      <>
          <MyNavbar onLoginClick={toggleLoginModal} onRegisterClick={toggleRegisterModal}/>
          <Login show={showLoginModal} onHide={() => setShowLoginModal(false)} />
          {/* 其他App内容 */}
          <Register show={showRegisterModal} onHide={() => setShowRegisterModal(false)} />
          {/* 其他App内容 */}
          </>
      <PublishForm/>
      </AxiosContext.Provider>
  );
}
export default App;
