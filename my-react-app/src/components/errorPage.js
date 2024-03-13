import React from 'react';
import './ErrorPage.css'; // 假设你也将对应的样式转移到了一个CSS文件中

const ErrorPage = ({ message }) => {
  return (
    <div className="jumbotron" style={{ minHeight: '300px' }}>
      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <h1>出错啦！！！</h1>
        <p>{message || '服务太热啦，要不然稍等下再来试试~'}</p>
        <p>
          <a className="btn btn-primary btn-lg" href="/" role="button">回到主页</a>
        </p>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <img className="img-thumbnail" style={{ width: '35%' }} src="/images/official.jpg" alt="Error"/>
      </div>
    </div>
  );
};

export default ErrorPage;
