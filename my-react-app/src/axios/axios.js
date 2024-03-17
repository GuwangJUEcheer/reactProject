import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', 
  withCredentials: true, 
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
      // 从Cookie中获取token
      const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    
      // 如果token存在，则在请求头中添加Authorization字段
      if (token) {
        config.headers.Authorization = `Bearer ${token.split('=')[1]}`;
      }  
      return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    // 如果响应状态码不是200，则重定向到错误页面
    if (response.status !== 200) {
      window.location.href = '/error.html';
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
