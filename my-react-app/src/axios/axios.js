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
    if (error.response.status === 401) {
      // 清理本地 token 和状态
      localStorage.removeItem('token');
      // 可能需要清理其他状态

      // 重定向到登录页面
      const history = useHistory();
      history.push('/login');
  }
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
