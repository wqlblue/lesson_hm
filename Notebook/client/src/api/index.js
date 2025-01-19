import axios from 'axios'
// import { showFailToast } from 'vant';

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截
axios.interceptors.request.use(config => {
  // 1. 从本地存储中获取token
  const token = localStorage.getItem('token')
  // 2. 判断token是否存在
  if (token) {
    // 3. 将token添加到请求头中
    config.headers.Authorization = token
  }
  return config
})

// 响应拦截
axios.interceptors.response.use(res => {
  if (res.status !== 200) { // 程序错误
    showFailToast('服务器异常')
    return Promise.reject(res)
  } else {
    if (res.data.code !== '8000') {
      showFailToast(res.data.msg)
      return Promise.reject(res)
    }

    return res.data
  }
})

export default axios