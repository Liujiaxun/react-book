import axios from 'axios';
import { HTTPBASURL } from './config'
import { SStorage } from './util'
axios.defaults.baseURL = HTTPBASURL;

axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers.common['token'] = '';
axios.defaults.timeout = 5000;
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    const token = SStorage.get('BOOK_token') ? SStorage.get('BOOK_token') : '';
    config.headers.token = token
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // if(error.response.status === 401){
    //   // Message.error('登录失效，请重新登录！');
    // }else{
    //   // Message.error(error.response.data.msg);
    // }
    return Promise.reject(error);
});

export default axios;
                   